import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'lottie-react';
import { LottieInteractivity } from '@lottiefiles/lottie-interactivity';
import { getPerformanceSettings, createIntersectionObserver } from '../../utils/performance';

const LottieAnimation = ({
  animationData,
  loop = true,
  autoplay = true,
  speed = 1,
  direction = 1,
  className = '',
  style = {},
  interactivity = null,
  onComplete = null,
  onLoopComplete = null,
  onEnterFrame = null,
  rendererSettings = {},
  lazyLoad = true,
  ...props
}) => {
  const lottieRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(!lazyLoad);
  const [shouldAnimate, setShouldAnimate] = useState(autoplay);

  const settings = getPerformanceSettings();

  // Performance-optimized renderer settings
  const defaultRendererSettings = {
    preserveAspectRatio: 'xMidYMid slice',
    clearCanvas: settings.deviceInfo.mobile ? true : false,
    progressiveLoad: true,
    hideOnTransparent: true,
    ...rendererSettings
  };

  useEffect(() => {
    // Don't animate if reduced motion is preferred
    if (settings.deviceInfo.reducedMotion) {
      setShouldAnimate(false);
      return;
    }

    // Set up intersection observer for lazy loading
    if (lazyLoad && containerRef.current) {
      const observer = createIntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              setShouldAnimate(autoplay);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px 0px', // Start loading 50px before it's visible
          threshold: 0.1
        }
      );

      observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }
  }, [lazyLoad, autoplay, settings.deviceInfo.reducedMotion]);

  useEffect(() => {
    if (interactivity && lottieRef.current && containerRef.current && isVisible) {
      // Apply interactivity only when visible and animations are enabled
      LottieInteractivity.create({
        player: lottieRef.current,
        mode: interactivity.mode || 'scroll',
        container: containerRef.current,
        ...interactivity
      });
    }
  }, [interactivity, isVisible]);

  const lottieOptions = {
    animationData,
    loop: settings.deviceInfo.reducedMotion ? false : loop,
    autoplay: shouldAnimate && isVisible,
    speed: settings.deviceInfo.mobile ? Math.min(speed, 0.8) : speed, // Slower on mobile
    direction,
    lottieRef,
    onComplete,
    onLoopComplete,
    onEnterFrame,
    renderer: settings.lottieRenderer, // Use performance-optimized renderer
    rendererSettings: defaultRendererSettings,
    ...props
  };

  // Show loading placeholder while not visible
  if (!isVisible) {
    return (
      <div
        ref={containerRef}
        className={`lottie-container lottie-loading ${className}`}
        style={{
          ...style,
          // Performance optimizations
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden'
        }}
      />
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`lottie-container ${className}`}
      style={{
        ...style,
        // Performance optimizations
        willChange: 'transform',
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden'
      }}
    >
      <Lottie {...lottieOptions} />
    </div>
  );
};

// Preset configurations for common use cases
export const LottiePresets = {
  // Hover interaction
  hover: {
    mode: 'hover',
    actions: [
      {
        visibility: [0, 1],
        type: 'seek',
        frames: [0, 30]
      }
    ]
  },
  
  // Scroll-triggered animation
  scroll: {
    mode: 'scroll',
    actions: [
      {
        visibility: [0, 1],
        type: 'seek',
        frames: [0, 100]
      }
    ]
  },
  
  // Click interaction
  click: {
    mode: 'cursor',
    actions: [
      {
        type: 'click',
        forceFlag: false
      }
    ]
  },
  
  // Cursor follow
  cursor: {
    mode: 'cursor',
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: 'seek',
        frames: [0, 179]
      }
    ]
  }
};

// Higher-order component for common patterns
export const ScrollTriggeredLottie = ({ animationData, ...props }) => (
  <LottieAnimation
    animationData={animationData}
    autoplay={false}
    loop={false}
    interactivity={LottiePresets.scroll}
    {...props}
  />
);

export const HoverLottie = ({ animationData, ...props }) => (
  <LottieAnimation
    animationData={animationData}
    autoplay={false}
    loop={false}
    interactivity={LottiePresets.hover}
    {...props}
  />
);

export const ClickLottie = ({ animationData, ...props }) => (
  <LottieAnimation
    animationData={animationData}
    autoplay={false}
    loop={false}
    interactivity={LottiePresets.click}
    {...props}
  />
);

export default LottieAnimation; 