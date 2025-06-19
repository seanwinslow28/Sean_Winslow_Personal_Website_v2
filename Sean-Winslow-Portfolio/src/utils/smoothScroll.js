// Utility function for smooth scrolling to elements
export const scrollToElement = (target, offset = 0) => {
  if (typeof target === 'string') {
    const element = document.querySelector(target);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.lenis?.scrollTo(elementPosition);
    }
  }
};

// Utility function to handle navigation clicks
export const handleNavClick = (e, target) => {
  e.preventDefault();
  scrollToElement(target, 100); // 100px offset for fixed header
}; 