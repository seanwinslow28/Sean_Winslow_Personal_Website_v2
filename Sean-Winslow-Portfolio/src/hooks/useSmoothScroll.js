import { useEffect } from 'react';
import { initSmoothScroll, destroySmoothScroll } from '../lib/scroll';

const useSmoothScroll = () => {
  useEffect(() => {
    // Initialize smooth scroll on mount
    initSmoothScroll();
    // Cleanup on unmount
    return () => {
      destroySmoothScroll();
    };
  }, []);
};

export default useSmoothScroll;
