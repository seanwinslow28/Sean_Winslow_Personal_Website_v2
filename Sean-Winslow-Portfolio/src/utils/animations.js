// Animation utility functions for React components
// Optimized for Lenis smooth scrolling with performance enhancements

// Easing functions
export const easings = {
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1]
};

// Animation variants for Framer Motion
export const animationVariants = {
  // Fade animations
  fadeInUp: {
    hidden: {
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easings.easeOutCubic
      }
    }
  },
  
  fadeInDown: {
    hidden: {
      opacity: 0,
      y: -60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easings.easeOutCubic
      }
    }
  },

  fadeInLeft: {
    hidden: {
      opacity: 0,
      x: -60
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easings.easeOutCubic
      }
    }
  },

  fadeInRight: {
    hidden: {
      opacity: 0,
      x: 60
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easings.easeOutCubic
      }
    }
  },

  // Scale animations
  scaleIn: {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: easings.easeOutCubic
      }
    }
  },

  // Stagger animations
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  },

  staggerItem: {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easings.easeOutCubic
      }
    }
  }
};

// Lenis smooth scroll configuration (optimized)
export const scrollAnimations = {
  // Performance-optimized Lenis settings
  lenis: {
    speed: 1.2,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false, // Disabled for better mobile performance
    touchMultiplier: 2,
    infinite: false,
    // Mobile optimizations
    syncTouch: false,
    syncTouchLerp: 0.1,
    touchInertiaMultiplier: 35
  }
};

// Helper functions
export const createStaggerAnimation = (children, delay = 0.1) => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay,
        delayChildren: 0.2
      }
    }
  };
};

export const createParallaxEffect = (speed = 0.5, direction = 'vertical') => {
  return {
    speed,
    direction,
    smooth: true
  };
};

// CSS-in-JS animation styles (fallback for non-JS environments)
export const cssAnimations = {
  fadeInUp: {
    transform: 'translateY(60px)',
    opacity: 0,
    transition: 'all 0.8s cubic-bezier(0.33, 1, 0.68, 1)',
    '&.animate': {
      transform: 'translateY(0)',
      opacity: 1
    }
  },
  
  scaleIn: {
    transform: 'scale(0.8)',
    opacity: 0,
    transition: 'all 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
    '&.animate': {
      transform: 'scale(1)',
      opacity: 1
    }
  }
};

// Performance optimized scroll handler
export const throttledScrollHandler = (callback, delay = 16) => {
  let timeoutId;
  let lastExecTime = 0;
  
  return function (...args) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      callback.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}; 