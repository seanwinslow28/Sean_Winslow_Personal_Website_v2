import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../utils/performance';

const useRevealOnScroll = ({ threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) {
      return undefined;
    }

    if (prefersReducedMotion()) {
      node.classList.add('reveal-on-scroll--visible');
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('reveal-on-scroll--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return nodeRef;
};

export default useRevealOnScroll;
