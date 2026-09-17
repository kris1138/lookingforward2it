/**
 * The story image only sticks while it sits beside the text; once the
 * section wraps to one column, sticking would pin it over the prose. CSS
 * alone can't detect "did my sibling wrap to a new line" — that's a
 * layout-algorithm outcome, not a static, query-able condition (neither
 * :has() nor container queries observe it) — so this measures it directly
 * by comparing offsetTop against the next sibling's. Ported verbatim from
 * the old DCLogic componentDidMount.
 */
function syncStickyStoryImage() {
  const el = document.querySelector<HTMLElement>('[data-story-media]');
  if (!el) return;
  const sib = el.nextElementSibling as HTMLElement | null;
  const stacked = !sib || el.offsetTop !== sib.offsetTop;
  el.style.position = stacked ? 'static' : 'sticky';
}

function initStickyStoryImage() {
  syncStickyStoryImage();
  window.addEventListener('resize', syncStickyStoryImage);
  window.addEventListener('load', syncStickyStoryImage);
  if (document.fonts?.ready) document.fonts.ready.then(syncStickyStoryImage);
  setTimeout(syncStickyStoryImage, 300);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStickyStoryImage);
} else {
  initStickyStoryImage();
}
