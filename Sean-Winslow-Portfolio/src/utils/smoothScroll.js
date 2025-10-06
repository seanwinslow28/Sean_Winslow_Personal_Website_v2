// Utility function for smooth scrolling to elements
const resolveElement = (target) => {
  if (typeof target === 'string') {
    return document.querySelector(target);
  }
  return target ?? null;
};

export const scrollToElement = (target, offset = 0) => {
  const element = resolveElement(target);
  if (!element) return;

  const elementPosition = element.offsetTop - offset;
  window.lenis?.scrollTo(elementPosition);
};

// Utility function to handle navigation clicks
export const handleNavClick = (e, target) => {
  e.preventDefault();
  const element = resolveElement(target);
  if (!element) return;

  scrollToElement(element, 100); // 100px offset for fixed header

  window.requestAnimationFrame(() => {
    setTimeout(() => {
      if (typeof element.focus === 'function') {
        element.focus({ preventScroll: true });
      }
    }, 220);
  });
};
