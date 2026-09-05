import './styles.css';
import { sections, items, visions, routes, achievements, updates, signals, secrets, bosses, quizQuestions } from './data.js';
import cover from './assets/archives-cover.png';
import spriteSheet from './assets/catalogue-sheet.png';

const labels = {
  ru: {
    now: 'Что делать?', entities: 'Сущности', items: 'Предметы', visions: 'Visions', map: 'Карта', bosses: 'Боссы', routes: 'Маршруты', achievements: 'Достижения', secrets: 'Секреты', quiz: 'Мини-тест', updates: 'Обновления', settings: 'Настройки',
    open: 'Открыть гайд →', saved: '★ В избранном', favorite: '☆ В избранное', handbook: 'ПОЛНЫЙ СПРАВОЧНИК', guide: 'АКТУАЛЬНЫЙ СПРАВОЧНИК', app: 'ПРИЛОЖЕНИЕ', trainer: 'ТРЕНАЖЁР', path: 'ПУТЬ ИГРОКА', modes: 'ОСОБЫЕ РЕЖИМЫ',
    entitiesTitle: 'Сущности', entitiesIntro: 'Выбери локацию или найди сущность по имени.', cards: 'карточек', searchEntity: 'Например, Алма, Rush или Figure', searchItem: 'Найти предмет', results: 'Результаты поиска',
    itemsTitle: 'Предметы', itemsIntro: 'Только действующие предметы после The Archives.', itemCount: 'предмет', visionsTitle: 'Visions', visionsIntro: 'Быстрые гайды для Battle Mode, Daily Runs и остальных режимов.', modesCount: 'режимов',
    settingsTitle: 'Настройки', settingsIntro: 'Настрой справочник для удобного чтения.', font: 'Размер текста', large: 'Крупный', normal: 'Обычный', theme: 'Оформление', mono: 'Чёрно-белое', language: 'Язык',
    back: '← К списку', lead: 'Запомни правило — и эта встреча станет намного спокойнее.', cue: 'ПРИЗНАК', action: 'ЧТО ДЕЛАТЬ', avoid: 'НЕ ДЕЛАЙ ТАК', tip: 'СОВЕТ',
    howTo: 'Как пользоваться', howToText: 'Выбери сущность — увидишь признак, действие, ошибку и совет.', current: 'Сейчас', more: 'Ещё', version: 'ВЕРСИЯ 0.1.0 · ARCHIVES'
  },
  en: {
    now: 'What now?', entities: 'Entities', items: 'Items', visions: 'Visions', map: 'Map', bosses: 'Bosses', routes: 'Routes', achievements: 'Achievements', secrets: 'Secrets', quiz: 'Mini quiz', updates: 'Updates', settings: 'Settings',
    open: 'Open guide →', saved: '★ Saved', favorite: '☆ Save', handbook: 'COMPLETE GUIDE', guide: 'CURRENT GUIDE', app: 'APPLICATION', trainer: 'TRAINER', path: 'PLAYER PATH', modes: 'SPECIAL MODES',
    entitiesTitle: 'Entities', entitiesIntro: 'Choose an area or search for an entity by name.', cards: 'cards', searchEntity: 'For example: Alma, Rush, or Figure', searchItem: 'Search items', results: 'Search results',
    itemsTitle: 'Items', itemsIntro: 'Active items only, after The Archives.', itemCount: 'items', visionsTitle: 'Visions', visionsIntro: 'Quick guides for Battle Mode, Daily Runs, and other modes.', modesCount: 'modes',
    settingsTitle: 'Settings', settingsIntro: 'Adjust the guide for comfortable reading.', font: 'Text size', large: 'Large', normal: 'Normal', theme: 'Appearance', mono: 'Black and white', language: 'Language',
    back: '← Back to list', lead: 'Remember the rule — the encounter becomes much calmer.', cue: 'SIGN', action: 'WHAT TO DO', avoid: 'DO NOT DO THIS', tip: 'TIP',
    howTo: 'How to use', howToText: 'Choose an entity to see its sign, action, mistake, and tip.', current: 'Now', more: 'More', version: 'VERSION 0.1.0 · ARCHIVES'
  }
};
const state = { view: 'entities', query: '', location: 'Отель', selected: null, language: localStorage.getItem('doors-language') || 'ru' };
const app = document.querySelector('#app');

function t(key) { return labels[state.language][key] || labels.ru[key] || key; }
function allEntities() { return Object.entries(sections).flatMap(([location, list]) => list.map((entity) => ({ ...entity, location }))); }
function navButton(label, view, icon) { return `<button class="nav-button ${state.view === view ? 'active' : ''}" data-view="${view}"><span>${icon}</span>${label}</button>`; }
function escape(text) { return text.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char]); }

function entityCard(entity) {
  const favorites = JSON.parse(localStorage.getItem('doors-favorites') || '[]');
  const favorite = favorites.includes(entity.name);
  const icon = [...entity.name].reduce((sum, char) => sum + char.codePointAt(0), 0) % 36;
  const x = (icon % 6) * 20;
  const y = Math.floor(icon / 6) * 20;
  return `<button class="entity-card" data-entity="${escape(entity.name)}">
    <span class="card-art" style="background-image:url('${spriteSheet}');background-position:${x}% ${y}%"></span>
    <span class="eyebrow">${escape(entity.location)}</span><strong>${escape(entity.name)}</strong><small>${escape(entity.cue)}</small><span class="open">${t('open')}</span>
    <span class="favorite ${favorite ? 'saved' : ''}" data-favorite="${escape(entity.name)}">${favorite ? t('saved') : t('favorite')}</span>
  </button>`;
}

function simpleList(title, intro, list, mark) {
  const checks = JSON.parse(localStorage.getItem('doors-achievements') || '[]');
  const isAchievements = title === 'Достижения';
  const progress = isAchievements ? ` · Прогресс: ${checks.length} из ${list.length}` : '';
  return `<section class="content"><div class="page-title"><div><p class="eyebrow">ПОЛНЫЙ СПРАВОЧНИК</p><h1>${title}</h1><p>${intro}${progress}</p></div></div><div class="item-list">${list.map(([name, text]) => `<article class="item"><div class="item-icon">${isAchievements ? `<button class="check ${checks.includes(name) ? 'done' : ''}" data-check="${escape(name)}">${checks.includes(name) ? '✓' : ''}</button>` : mark}</div><div><h2>${escape(name)}</h2><p>${escape(text)}</p></div></article>`).join('')}</div></section>`;
}

function renderSettings() {
  const large = localStorage.getItem('doors-font') === 'large';
  return `<section class="content"><div class="page-title"><div><p class="eyebrow">${t('app')}</p><h1>${t('settingsTitle')}</h1><p>${t('settingsIntro')}</p></div></div><div class="settings"><button data-font="true"><b>${t('font')}</b><span>${large ? t('large') : t('normal')}</span></button><button data-theme="true"><b>${t('theme')}</b><span>${t('mono')}</span></button><button data-language="true"><b>${t('language')}</b><span>${state.language === 'ru' ? 'Русский' : 'English'}</span></button></div></section>`;
}


function renderNow() { return simpleList('Что делать сейчас?', 'Выбери то, что заметил в игре — и сразу увидишь действие.', signals, '!'); }
function renderQuiz() { const done = Number(localStorage.getItem('doors-quiz') || 0); const index = Number(localStorage.getItem('doors-quiz-index') || 0) % quizQuestions.length; const [question, good, bad] = quizQuestions[index]; return `<section class="content"><div class="page-title"><div><p class="eyebrow">ТРЕНАЖЁР</p><h1>Мини-тест</h1><p>${question}</p></div></div><div class="settings"><button data-quiz="bad"><b>${bad}</b><span>Выбрать</span></button><button data-quiz="good"><b>${good}</b><span>Выбрать</span></button><div><b>Верных ответов</b><span>${done} · вопрос ${index + 1} из ${quizQuestions.length}</span></div></div></section>`; }
function renderMap() { return `<section class="content"><div class="page-title"><div><p class="eyebrow">ПУТЬ ИГРОКА</p><h1>Карта маршрута</h1><p>Hotel → Archives → Outdoors → Mines → Stairwell. Backdoor — отдельный маршрут.</p></div></div><div class="route-map">Hotel <i>→</i> Archives <i>→</i> Outdoors <i>→</i> Mines <i>→</i> Stairwell</div></section>`; }

function renderEntities() {
  const search = state.query.trim().toLowerCase();
  const found = allEntities().filter((entry) => !search || `${entry.name} ${entry.location} ${entry.cue}`.toLowerCase().includes(search));
  const current = sections[state.location];
  return `<section class="content">
    <div class="page-title"><div><p class="eyebrow">${t('guide')}</p><h1>${t('entitiesTitle')}</h1><p>${t('entitiesIntro')}</p></div><div class="count">${found.length} ${t('cards')}</div></div>
    <label class="search"><span>⌕</span><input id="search" value="${escape(state.query)}" placeholder="${t('searchEntity')}" /></label>
    <div class="chips">${Object.keys(sections).map((name) => `<button class="chip ${state.location === name ? 'selected' : ''}" data-location="${name}">${name}</button>`).join('')}</div>
    <div class="desktop-heading">${search ? t('results') : state.location}</div>
    <div class="cards">${(search ? found : current.map((entity) => ({ ...entity, location: state.location }))).map(entityCard).join('')}</div>
  </section>`;
}

function renderItems() {
  const search = state.query.trim().toLowerCase();
  const list = items.filter(([name, description]) => !search || `${name} ${description}`.toLowerCase().includes(search));
  return `<section class="content"><div class="page-title"><div><p class="eyebrow">${state.language === 'ru' ? 'БЕЗ УДАЛЁННОГО КОНТЕНТА' : 'NO REMOVED CONTENT'}</p><h1>${t('itemsTitle')}</h1><p>${t('itemsIntro')}</p></div><div class="count">${list.length} ${t('itemCount')}</div></div>
  <label class="search"><span>⌕</span><input id="search" value="${escape(state.query)}" placeholder="${t('searchItem')}" /></label>
  <div class="item-list">${list.map(([name, description], index) => `<article class="item"><span class="item-art" style="background-image:url('${spriteSheet}');background-position:${(index % 6) * 20}% ${Math.floor((index % 36) / 6) * 20}%"></span><div><h2>${escape(name)}</h2><p>${escape(description)}</p></div></article>`).join('')}</div></section>`;
}

function renderVisions() {
  return `<section class="content"><div class="page-title"><div><p class="eyebrow">${t('modes')}</p><h1>${t('visionsTitle')}</h1><p>${t('visionsIntro')}</p></div><div class="count">${Object.keys(visions).length} ${t('modesCount')}</div></div>
  <div class="vision-grid">${Object.entries(visions).map(([name, guide]) => `<article class="vision"><span class="vision-mark">✦</span><h2>${escape(name)}</h2><p>${escape(guide)}</p></article>`).join('')}</div></section>`;
}

function renderGuide() {
  const entity = state.selected;
  if (!entity) return renderEntities();
  return `<section class="content guide"><button class="back" data-back="true">${t('back')}</button><p class="eyebrow">${escape(entity.location)}</p><h1>${escape(entity.name)}</h1><p class="guide-lead">${t('lead')}</p>
  <div class="guide-grid"><article><span>${t('cue')}</span><p>${escape(entity.cue)}</p></article><article class="bright"><span>${t('action')}</span><p>${escape(entity.action)}</p></article><article><span>${t('avoid')}</span><p>${escape(entity.avoid)}</p></article><article><span>${t('tip')}</span><p>${escape(entity.tip)}</p></article></div></section>`;
}

function render() {
  const content = state.view === 'entities' ? renderEntities() : state.view === 'items' ? renderItems() : state.view === 'visions' ? renderVisions() : state.view === 'routes' ? simpleList('Маршруты', 'Короткий план для каждой локации.', routes, '→') : state.view === 'map' ? renderMap() : state.view === 'bosses' ? simpleList('Боссы', 'Отдельные короткие гайды для главных встреч.', bosses, '☠') : state.view === 'achievements' ? simpleList('Достижения', 'Отмечай полученные бейджи в игре.', achievements, '✓') : state.view === 'updates' ? simpleList('Обновления', 'Что изменилось в актуальной версии Doors.', updates, '◌') : state.view === 'secrets' ? simpleList('Секреты', 'Редкие пути и полезные находки.', secrets, '◇') : state.view === 'now' ? renderNow() : state.view === 'quiz' ? renderQuiz() : state.view === 'settings' ? renderSettings() : renderGuide();
  app.innerHTML = `<main class="shell"><aside class="sidebar"><a class="brand" href="#">DOORS<span>GUIDES</span></a><p class="version">${t('version')}</p><nav>${navButton(t('now'), 'now', '!')}${navButton(t('entities'), 'entities', '◉')}${navButton(t('items'), 'items', '◇')}${navButton(t('visions'), 'visions', '✦')}${navButton(t('map'), 'map', '⌘')}${navButton(t('bosses'), 'bosses', '☠')}${navButton(t('routes'), 'routes', '→')}${navButton(t('achievements'), 'achievements', '✓')}${navButton(t('secrets'), 'secrets', '◇')}${navButton(t('quiz'), 'quiz', '?')}${navButton(t('updates'), 'updates', '◌')}${navButton(t('settings'), 'settings', '⚙')}</nav><div class="sidebar-note"><b>${t('howTo')}</b><p>${t('howToText')}</p></div></aside><header class="mobile-header"><a class="brand" href="#">DOORS<span>GUIDES</span></a><button class="mobile-search" data-focus-search="true">⌕</button></header>${state.view === 'entities' ? `<div class="cover"><img src="${cover}" alt="${state.language === 'ru' ? 'Чёрно-белый коридор Doors' : 'Black-and-white Doors corridor'}" /></div>` : ''}${content}<nav class="bottom-nav">${navButton(t('current'), 'now', '!')}${navButton(t('entities'), 'entities', '◉')}${navButton(t('items'), 'items', '◇')}${navButton(t('more'), 'settings', '⚙')}</nav></main>`;
  bind();
}

function bind() {
  document.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => { state.view = button.dataset.view; state.selected = null; state.query = ''; render(); }));
  document.querySelectorAll('[data-location]').forEach((button) => button.addEventListener('click', () => { state.location = button.dataset.location; state.query = ''; render(); }));
  document.querySelectorAll('[data-entity]').forEach((button) => button.addEventListener('click', () => { state.selected = allEntities().find((entity) => entity.name === button.dataset.entity); state.view = 'guide'; render(); }));
  document.querySelectorAll('[data-favorite]').forEach((button) => button.addEventListener('click', (event) => { event.stopPropagation(); const saved = new Set(JSON.parse(localStorage.getItem('doors-favorites') || '[]')); saved.has(button.dataset.favorite) ? saved.delete(button.dataset.favorite) : saved.add(button.dataset.favorite); localStorage.setItem('doors-favorites', JSON.stringify([...saved])); render(); }));
  document.querySelectorAll('[data-check]').forEach((button) => button.addEventListener('click', () => { const saved = new Set(JSON.parse(localStorage.getItem('doors-achievements') || '[]')); saved.has(button.dataset.check) ? saved.delete(button.dataset.check) : saved.add(button.dataset.check); localStorage.setItem('doors-achievements', JSON.stringify([...saved])); render(); }));
  document.querySelector('[data-back]')?.addEventListener('click', () => { state.view = 'entities'; render(); });
  document.querySelector('#search')?.addEventListener('input', (event) => { state.query = event.target.value; const at = event.target.selectionStart; render(); document.querySelector('#search')?.focus(); document.querySelector('#search')?.setSelectionRange(at, at); });
  document.querySelector('[data-focus-search]')?.addEventListener('click', () => { state.view = 'entities'; render(); document.querySelector('#search')?.focus(); });
  document.querySelector('[data-font]')?.addEventListener('click', () => { const large = localStorage.getItem('doors-font') === 'large'; localStorage.setItem('doors-font', large ? 'normal' : 'large'); document.documentElement.dataset.font = large ? 'normal' : 'large'; render(); });
  document.querySelector('[data-language]')?.addEventListener('click', () => { state.language = state.language === 'ru' ? 'en' : 'ru'; localStorage.setItem('doors-language', state.language); render(); });
  document.querySelectorAll('[data-quiz]').forEach((button) => button.addEventListener('click', () => { if (button.dataset.quiz === 'good') localStorage.setItem('doors-quiz', String(Number(localStorage.getItem('doors-quiz') || 0) + 1)); localStorage.setItem('doors-quiz-index', String(Number(localStorage.getItem('doors-quiz-index') || 0) + 1)); render(); }));
}

document.documentElement.dataset.font = localStorage.getItem('doors-font') || 'normal';
render();
