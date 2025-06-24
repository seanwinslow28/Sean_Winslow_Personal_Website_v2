// Performance utilities for mobile detection and animation optimization

// Mobile detection
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         window.innerWidth <= 768;
};

// Reduced motion detection
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Low-end device detection (simple heuristic)
export const isLowEndDevice = () => {
  if (typeof window === 'undefined') return false;
  
  // Check for low memory devices
  const memory = navigator.deviceMemory;
  if (memory && memory <= 2) return true;
  
  // Check for slow connection
  const connection = navigator.connection;
  if (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
    return true;
  }
  
  // Check for mobile and assume lower performance
  return isMobile();
};

// Performance settings based on device capabilities
export const getPerformanceSettings = () => {
  const mobile = isMobile();
  const reducedMotion = prefersReducedMotion();
  const lowEnd = isLowEndDevice();
  
  return {
    // Animation settings - More conservative for mobile
    enableHeavyAnimations: !mobile && !lowEnd && !reducedMotion,
    enableBackgroundAnimations: !mobile && !lowEnd && !reducedMotion, // Disable UnicornStudio on mobile
    enableParallax: !mobile && !reducedMotion,
    
    // Lottie settings
    lottieRenderer: mobile ? 'canvas' : 'svg', // Canvas is better for mobile
    lottieQuality: mobile || lowEnd ? 'low' : 'high',
    
    // Scroll settings
    smoothScroll: !reducedMotion,
    scrollMultiplier: mobile ? 0.7 : 1, // Slightly increased for better mobile feel
    
    // Animation durations (ms) - More conservative
    animationDuration: reducedMotion ? 0 : (mobile ? 250 : 600),
    transitionDuration: reducedMotion ? 0 : (mobile ? 150 : 400),
    
    // Prevent component flickering on mobile
    preventFlicker: mobile,
    
    // Debug info
    deviceInfo: {
      mobile,
      reducedMotion,
      lowEnd,
      memory: navigator.deviceMemory || 'unknown',
      connection: navigator.connection?.effectiveType || 'unknown'
    }
  };
};

// Throttle function for performance
export const throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;
  return function (...args) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

// Debounce function for performance
export const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

// Intersection Observer for lazy loading animations
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '10% 0px',
    threshold: 0.1,
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Request animation frame with fallback
export const rafWithFallback = (callback) => {
  if (typeof requestAnimationFrame !== 'undefined') {
    return requestAnimationFrame(callback);
  } else {
    return setTimeout(callback, 16); // ~60fps fallback
  }
};

export default {
  isMobile,
  prefersReducedMotion,
  isLowEndDevice,
  getPerformanceSettings,
  throttle,
  debounce,
  createIntersectionObserver,
  rafWithFallback
}; 