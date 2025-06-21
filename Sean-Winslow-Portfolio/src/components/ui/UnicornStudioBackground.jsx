import React, { useEffect, useRef, useState } from 'react';

const UnicornStudioBackground = () => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for mobile devices
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setReducedMotion(reducedMotion);
    };

    checkMobile();
    checkReducedMotion();

    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Skip complex animation on mobile or if reduced motion is preferred
    if (isMobile || reducedMotion) {
      setIsLoaded(true);
      return;
    }

    const loadUnicornStudio = async () => {
      try {
        // Check if UnicornStudio is already loaded
        if (window.UnicornStudio && window.UnicornStudio.isInitialized) {
          initializeAnimation();
          return;
        }

        // Load UnicornStudio script
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js';
        script.async = true;
        
        script.onload = () => {
          if (!window.UnicornStudio.isInitialized) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
          }
          initializeAnimation();
        };

        script.onerror = () => {
          console.warn('Failed to load UnicornStudio, falling back to CSS animation');
          setIsLoaded(true);
        };

        document.head.appendChild(script);

        // Cleanup function
        return () => {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
        };
      } catch (error) {
        console.warn('Error loading UnicornStudio:', error);
        setIsLoaded(true);
      }
    };

    const initializeAnimation = () => {
      if (containerRef.current && window.UnicornStudio) {
        try {
          // Clear any existing content
          containerRef.current.innerHTML = '';
          
          // Create the animation element using the project ID
          const animationDiv = document.createElement('div');
          animationDiv.setAttribute('data-us-project', '4swJSCcGnB2yGsrLWAyH');
          animationDiv.style.width = '100%';
          animationDiv.style.height = '100%';
          animationDiv.style.position = 'absolute';
          animationDiv.style.top = '0';
          animationDiv.style.left = '0';
          
          containerRef.current.appendChild(animationDiv);
          
          // Initialize the animation with performance optimizations
          window.UnicornStudio.init({
            fps: 30, // Reduced FPS for better performance
            dpi: 1, // Reduced DPI for better performance
            quality: 'medium' // Medium quality for balance
          });
          
          setIsLoaded(true);
        } catch (error) {
          console.warn('Error initializing UnicornStudio animation:', error);
          setIsLoaded(true);
        }
      }
    };

    // Add a delay to prevent immediate loading issues
    const timer = setTimeout(() => {
      loadUnicornStudio();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [isMobile, reducedMotion]);

  // Fallback CSS animation for mobile/reduced motion
  if (isMobile || reducedMotion) {
    return (
      <div 
        className="fixed inset-0 -z-10 gpu-accelerated background-animation"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(234, 155, 1, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 179, 65, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #002654 0%, #4682B4 50%, #87CEEB 100%)
          `,
          backgroundSize: '400% 400%',
          animation: 'gradientFlow 8s ease-in-out infinite'
        }}
      />
    );
  }

  return (
    <>
      {/* UnicornStudio Animation Container */}
      <div 
        ref={containerRef}
        className="fixed inset-0 -z-10 gpu-accelerated"
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
      
      {/* Fallback background while loading */}
      {!isLoaded && (
        <div 
          className="fixed inset-0 -z-10 gpu-accelerated background-animation"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(234, 155, 1, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 179, 65, 0.3) 0%, transparent 50%),
              linear-gradient(135deg, #002654 0%, #4682B4 50%, #87CEEB 100%)
            `,
            backgroundSize: '400% 400%',
            animation: 'gradientFlow 8s ease-in-out infinite'
          }}
        />
      )}
    </>
  );
};

export default UnicornStudioBackground; 