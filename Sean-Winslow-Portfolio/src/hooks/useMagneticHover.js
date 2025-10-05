import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../utils/performance';

const supportsFinePointer = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(pointer: fine)').matches;
};

const useMagneticHover = ({ strength = 6 } = {}) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) {
      return undefined;
    }

    if (prefersReducedMotion() || !supportsFinePointer()) {
      node.style.removeProperty('--magnet-x');
      node.style.removeProperty('--magnet-y');
      return undefined;
    }

    const handlePointerMove = (event) => {
      const rect = node.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
      const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
      const clampedX = Math.max(Math.min(relativeX, 0.5), -0.5);
      const clampedY = Math.max(Math.min(relativeY, 0.5), -0.5);

      node.style.setProperty('--magnet-x', `${clampedX * strength * 2}px`);
      node.style.setProperty('--magnet-y', `${clampedY * strength * 2}px`);
    };

    const resetMagnet = () => {
      node.style.setProperty('--magnet-x', '0px');
      node.style.setProperty('--magnet-y', '0px');
    };

    node.addEventListener('pointermove', handlePointerMove);
    node.addEventListener('pointerleave', resetMagnet);
    node.addEventListener('pointerdown', resetMagnet);

    return () => {
      node.removeEventListener('pointermove', handlePointerMove);
      node.removeEventListener('pointerleave', resetMagnet);
      node.removeEventListener('pointerdown', resetMagnet);
    };
  }, [strength]);

  return nodeRef;
};

export default useMagneticHover;
