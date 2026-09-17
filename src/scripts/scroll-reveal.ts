/**
 * Fades/rises [data-reveal] sections into view on scroll. Ported from the
 * old DCLogic componentDidMount — same rootMargin/threshold, same
 * respect for prefers-reduced-motion, same "already visible at first
 * paint, don't animate" guard. Base opacity/transform states live in
 * src/styles/global.css; this only toggles the .is-revealed class.
 */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        io.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
  );

  nodes.forEach((node) => {
    if (node.getBoundingClientRect().top < window.innerHeight * 0.9) {
      node.classList.add('is-revealed');
      return;
    }
    io.observe(node);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}
