import './styles.css';
import { sections, items, visions, routes, achievements, updates, signals, secrets, bosses } from './data.js';
import cover from './assets/archives-cover.png';
import spriteSheet from './assets/entity-item-sheet.png';

const state = { view: 'entities', query: '', location: 'Отель', selected: null };
const app = document.querySelector('#app');

function allEntities() { return Object.entries(sections).flatMap(([location, list]) => list.map((entity) => ({ ...entity, location }))); }
function navButton(label, view, icon) { return `<button class="nav-button ${state.view === view ? 'active' : ''}" data-view="${view}"><span>${icon}</span>${label}</button>`; }
function escape(text) { return text.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char]); }

function entityCard(entity) {
  const favorites = JSON.parse(localStorage.getItem('doors-favorites') || '[]');
  const favorite = favorites.includes(entity.name);
  const icon = [...entity.name].reduce((sum, char) => sum + char.codePointAt(0), 0) % 16;
  const x = (icon % 4) * 33.333;
  const y = Math.floor(icon / 4) * 33.333;
  return `<button class="entity-card" data-entity="${escape(entity.name)}">
    <span class="card-art" style="background-image:url('${spriteSheet}');background-position:${x}% ${y}%"></span>
    <span class="eyebrow">${escape(entity.location)}</span><strong>${escape(entity.name)}</strong><small>${escape(entity.cue)}</small><span class="open">Открыть гайд →</span>
    <span class="favorite ${favorite ? 'saved' : ''}" data-favorite="${escape(entity.name)}">${favorite ? '★ В избранном' : '☆ В избранное'}</span>
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
  return `<section class="content"><div class="page-title"><div><p class="eyebrow">ПРИЛОЖЕНИЕ</p><h1>Настройки</h1><p>Настрой справочник для удобного чтения.</p></div></div><div class="settings"><button data-font="true"><b>Размер текста</b><span>${large ? 'Крупный' : 'Обычный'}</span></button><button data-theme="true"><b>Оформление</b><span>Чёрно-белое</span></button><div><b>Язык</b><span>Русский — все гайды написаны по-русски</span></div></div></section>`;
}


function renderNow() { return simpleList('Что делать сейчас?', 'Выбери то, что заметил в игре — и сразу увидишь действие.', signals, '!'); }
function renderQuiz() { const done = Number(localStorage.getItem('doors-quiz') || 0); return `<section class="content"><div class="page-title"><div><p class="eyebrow">ТРЕНАЖЁР</p><h1>Мини-тест</h1><p>Сигнал: свет мигает. Что делать?</p></div></div><div class="settings"><button data-quiz="bad"><b>Продолжить обыскивать комнату</b><span>Неверно</span></button><button data-quiz="good"><b>Найти укрытие</b><span>Верно</span></button><div><b>Верных ответов</b><span>${done}</span></div></div></section>`; }
function renderMap() { return `<section class="content"><div class="page-title"><div><p class="eyebrow">ПУТЬ ИГРОКА</p><h1>Карта маршрута</h1><p>Hotel → Archives → Outdoors → Mines → Stairwell. Backdoor — отдельный маршрут.</p></div></div><div class="route-map">Hotel <i>→</i> Archives <i>→</i> Outdoors <i>→</i> Mines <i>→</i> Stairwell</div></section>`; }

function renderEntities() {
  const search = state.query.trim().toLowerCase();
  const found = allEntities().filter((entry) => !search || `${entry.name} ${entry.location} ${entry.cue}`.toLowerCase().includes(search));
  const current = sections[state.location];
  return `<section class="content">
    <div class="page-title"><div><p class="eyebrow">АКТУАЛЬНЫЙ СПРАВОЧНИК</p><h1>Сущности</h1><p>Выбери локацию или найди сущность по имени.</p></div><div class="count">${found.length} карточек</div></div>
    <label class="search"><span>⌕</span><input id="search" value="${escape(state.query)}" placeholder="Например, Алма, Rush или Figure" /></label>
    <div class="chips">${Object.keys(sections).map((name) => `<button class="chip ${state.location === name ? 'selected' : ''}" data-location="${name}">${name}</button>`).join('')}</div>
    <div class="desktop-heading">${search ? 'Результаты поиска' : state.location}</div>
    <div class="cards">${(search ? found : current.map((entity) => ({ ...entity, location: state.location }))).map(entityCard).join('')}</div>
  </section>`;
}

function renderItems() {
  const search = state.query.trim().toLowerCase();
  const list = items.filter(([name, description]) => !search || `${name} ${description}`.toLowerCase().includes(search));
  return `<section class="content"><div class="page-title"><div><p class="eyebrow">БЕЗ УДАЛЁННОГО КОНТЕНТА</p><h1>Предметы</h1><p>Только действующие предметы после The Archives.</p></div><div class="count">${list.length} предмет</div></div>
  <label class="search"><span>⌕</span><input id="search" value="${escape(state.query)}" placeholder="Найти предмет" /></label>
  <div class="item-list">${list.map(([name, description], index) => `<article class="item"><span class="item-art" style="background-image:url('${spriteSheet}');background-position:${(index % 4) * 33.333}% ${Math.floor((index % 16) / 4) * 33.333}%"></span><div><h2>${escape(name)}</h2><p>${escape(description)}</p></div></article>`).join('')}</div></section>`;
}

function renderVisions() {
  return `<section class="content"><div class="page-title"><div><p class="eyebrow">ОСОБЫЕ РЕЖИМЫ</p><h1>Visions</h1><p>Быстрые гайды для Battle Mode, Daily Runs и остальных режимов.</p></div><div class="count">${Object.keys(visions).length} режимов</div></div>
  <div class="vision-grid">${Object.entries(visions).map(([name, guide]) => `<article class="vision"><span class="vision-mark">✦</span><h2>${escape(name)}</h2><p>${escape(guide)}</p></article>`).join('')}</div></section>`;
}

function renderGuide() {
  const entity = state.selected;
  if (!entity) return renderEntities();
  return `<section class="content guide"><button class="back" data-back="true">← К списку</button><p class="eyebrow">${escape(entity.location)}</p><h1>${escape(entity.name)}</h1><p class="guide-lead">Запомни правило — и эта встреча станет намного спокойнее.</p>
  <div class="guide-grid"><article><span>ПРИЗНАК</span><p>${escape(entity.cue)}</p></article><article class="bright"><span>ЧТО ДЕЛАТЬ</span><p>${escape(entity.action)}</p></article><article><span>НЕ ДЕЛАЙ ТАК</span><p>${escape(entity.avoid)}</p></article><article><span>СОВЕТ</span><p>${escape(entity.tip)}</p></article></div></section>`;
}

function render() {
  const content = state.view === 'entities' ? renderEntities() : state.view === 'items' ? renderItems() : state.view === 'visions' ? renderVisions() : state.view === 'routes' ? simpleList('Маршруты', 'Короткий план для каждой локации.', routes, '→') : state.view === 'map' ? renderMap() : state.view === 'bosses' ? simpleList('Боссы', 'Отдельные короткие гайды для главных встреч.', bosses, '☠') : state.view === 'achievements' ? simpleList('Достижения', 'Отмечай полученные бейджи в игре.', achievements, '✓') : state.view === 'updates' ? simpleList('Обновления', 'Что изменилось в актуальной версии Doors.', updates, '◌') : state.view === 'secrets' ? simpleList('Секреты', 'Редкие пути и полезные находки.', secrets, '◇') : state.view === 'now' ? renderNow() : state.view === 'quiz' ? renderQuiz() : state.view === 'settings' ? renderSettings() : renderGuide();
  app.innerHTML = `<main class="shell"><aside class="sidebar"><a class="brand" href="#">DOORS<span>GUIDES</span></a><p class="version">VERSION 1.0 · ARCHIVES</p><nav>${navButton('Что делать?', 'now', '!')}${navButton('Сущности', 'entities', '◉')}${navButton('Предметы', 'items', '◇')}${navButton('Visions', 'visions', '✦')}${navButton('Карта', 'map', '⌘')}${navButton('Боссы', 'bosses', '☠')}${navButton('Маршруты', 'routes', '→')}${navButton('Достижения', 'achievements', '✓')}${navButton('Секреты', 'secrets', '◇')}${navButton('Мини-тест', 'quiz', '?')}${navButton('Обновления', 'updates', '◌')}${navButton('Настройки', 'settings', '⚙')}</nav><div class="sidebar-note"><b>Как пользоваться</b><p>Выбери сущность — увидишь признак, действие, ошибку и совет.</p></div></aside><header class="mobile-header"><a class="brand" href="#">DOORS<span>GUIDES</span></a><button class="mobile-search" data-focus-search="true">⌕</button></header>${state.view === 'entities' ? `<div class="cover"><img src="${cover}" alt="Чёрно-белый коридор Doors" /></div>` : ''}${content}<nav class="bottom-nav">${navButton('Сейчас', 'now', '!')}${navButton('Сущности', 'entities', '◉')}${navButton('Предметы', 'items', '◇')}${navButton('Ещё', 'settings', '⚙')}</nav></main>`;
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
  document.querySelectorAll('[data-quiz]').forEach((button) => button.addEventListener('click', () => { if (button.dataset.quiz === 'good') localStorage.setItem('doors-quiz', String(Number(localStorage.getItem('doors-quiz') || 0) + 1)); render(); }));
}

document.documentElement.dataset.font = localStorage.getItem('doors-font') || 'normal';
render();
