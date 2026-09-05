import './styles.css';
import { sections, items, visions } from './data.js';

const state = { view: 'entities', query: '', location: 'Отель', selected: null };
const app = document.querySelector('#app');

function allEntities() { return Object.entries(sections).flatMap(([location, list]) => list.map((entity) => ({ ...entity, location }))); }
function navButton(label, view, icon) { return `<button class="nav-button ${state.view === view ? 'active' : ''}" data-view="${view}"><span>${icon}</span>${label}</button>`; }
function escape(text) { return text.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char]); }

function entityCard(entity) {
  return `<button class="entity-card" data-entity="${escape(entity.name)}">
    <span class="eyebrow">${escape(entity.location)}</span><strong>${escape(entity.name)}</strong><small>${escape(entity.cue)}</small><span class="open">Открыть гайд →</span>
  </button>`;
}

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
  <div class="item-list">${list.map(([name, description]) => `<article class="item"><div class="item-icon">◇</div><div><h2>${escape(name)}</h2><p>${escape(description)}</p></div></article>`).join('')}</div></section>`;
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
  const content = state.view === 'entities' ? renderEntities() : state.view === 'items' ? renderItems() : state.view === 'visions' ? renderVisions() : renderGuide();
  app.innerHTML = `<main class="shell"><aside class="sidebar"><a class="brand" href="#">DOORS<span>GUIDES</span></a><p class="version">THE ARCHIVES EDITION</p><nav>${navButton('Сущности', 'entities', '◉')}${navButton('Предметы', 'items', '◇')}${navButton('Visions', 'visions', '✦')}</nav><div class="sidebar-note"><b>Как пользоваться</b><p>Выбери сущность — увидишь признак, действие, ошибку и совет.</p></div></aside><header class="mobile-header"><a class="brand" href="#">DOORS<span>GUIDES</span></a><button class="mobile-search" data-focus-search="true">⌕</button></header>${content}<nav class="bottom-nav">${navButton('Сущности', 'entities', '◉')}${navButton('Предметы', 'items', '◇')}${navButton('Visions', 'visions', '✦')}</nav></main>`;
  bind();
}

function bind() {
  document.querySelectorAll('[data-view]').forEach((button) => button.addEventListener('click', () => { state.view = button.dataset.view; state.selected = null; state.query = ''; render(); }));
  document.querySelectorAll('[data-location]').forEach((button) => button.addEventListener('click', () => { state.location = button.dataset.location; state.query = ''; render(); }));
  document.querySelectorAll('[data-entity]').forEach((button) => button.addEventListener('click', () => { state.selected = allEntities().find((entity) => entity.name === button.dataset.entity); state.view = 'guide'; render(); }));
  document.querySelector('[data-back]')?.addEventListener('click', () => { state.view = 'entities'; render(); });
  document.querySelector('#search')?.addEventListener('input', (event) => { state.query = event.target.value; const at = event.target.selectionStart; render(); document.querySelector('#search')?.focus(); document.querySelector('#search')?.setSelectionRange(at, at); });
  document.querySelector('[data-focus-search]')?.addEventListener('click', () => { state.view = 'entities'; render(); document.querySelector('#search')?.focus(); });
}

render();
