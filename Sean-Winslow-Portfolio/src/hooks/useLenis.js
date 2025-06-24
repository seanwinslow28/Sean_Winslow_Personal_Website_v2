import { useEffect } from 'react';
import Lenis from 'lenis';
import { getPerformanceSettings } from '../utils/performance';

export const useLenis = () => {
  useEffect(() => {
    const settings = getPerformanceSettings();
    
    // Skip smooth scroll if reduced motion is preferred
    if (!settings.smoothScroll) {
      return;
    }

    // Initialize Lenis with performance-optimized settings
    const lenis = new Lenis({
      duration: settings.deviceInfo.mobile ? 0.8 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: settings.scrollMultiplier,
      smoothTouch: false, // Keep disabled for better mobile performance
      touchMultiplier: settings.deviceInfo.mobile ? 1.5 : 2,
      infinite: false,
      // Optimize for mobile performance
      syncTouch: false,
      syncTouchLerp: 0.1,
      touchInertiaMultiplier: settings.deviceInfo.mobile ? 15 : 35,
    });

    // Make lenis globally available
    window.lenis = lenis;

    // Animation frame function
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Log performance settings in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Lenis Performance Settings:', settings.deviceInfo);
    }

    // Cleanup function
    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);
};

export default useLenis; 