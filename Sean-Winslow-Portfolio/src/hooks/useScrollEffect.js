import { useEffect, useRef, useState } from 'react';

// Custom hook for scroll effects
export const useScrollEffect = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const elementRef = useRef(null);

  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    offset = 0
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Intersection Observer for visibility detection
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  // Scroll position tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    elementRef,
    isVisible,
    scrollY
  };
};

// Hook for parallax effects
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * -speed;
      
      setOffset(rate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return {
    elementRef,
    offset
  };
};

// Hook for scroll-triggered animations
export const useScrollAnimation = (animationType = 'fadeInUp') => {
  const { elementRef, isVisible } = useScrollEffect();
  
  const getAnimationClass = () => {
    if (!isVisible) return 'animate-hidden';
    
    switch (animationType) {
      case 'fadeInUp':
        return 'animate-fadeInUp';
      case 'fadeInDown':
        return 'animate-fadeInDown';
      case 'fadeInLeft':
        return 'animate-fadeInLeft';
      case 'fadeInRight':
        return 'animate-fadeInRight';
      case 'scaleIn':
        return 'animate-scaleIn';
      case 'slideInUp':
        return 'animate-slideInUp';
      default:
        return 'animate-fadeInUp';
    }
  };

  return {
    elementRef,
    animationClass: getAnimationClass(),
    isVisible
  };
}; 