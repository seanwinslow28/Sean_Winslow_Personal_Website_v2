import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { LottieInteractivity } from '@lottiefiles/lottie-interactivity';

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
  ...props
}) => {
  const lottieRef = useRef(null);
  const containerRef = useRef(null);

  // Default renderer settings optimized for performance
  const defaultRendererSettings = {
    preserveAspectRatio: 'xMidYMid slice',
    clearCanvas: false,
    progressiveLoad: true,
    hideOnTransparent: true,
    ...rendererSettings
  };

  useEffect(() => {
    if (interactivity && lottieRef.current && containerRef.current) {
      // Apply interactivity
      LottieInteractivity.create({
        player: lottieRef.current,
        mode: interactivity.mode || 'scroll',
        container: containerRef.current,
        ...interactivity
      });
    }
  }, [interactivity]);

  const lottieOptions = {
    animationData,
    loop,
    autoplay,
    speed,
    direction,
    lottieRef,
    onComplete,
    onLoopComplete,
    onEnterFrame,
    rendererSettings: defaultRendererSettings,
    ...props
  };

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