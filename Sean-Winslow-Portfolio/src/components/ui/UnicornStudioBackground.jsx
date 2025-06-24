import React, { useEffect, useRef, useState } from 'react';
import { getPerformanceSettings, createIntersectionObserver } from '../../utils/performance';

const UnicornStudioBackground = ({ onLoadingChange }) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const performanceSettings = getPerformanceSettings();

  useEffect(() => {
    // Notify parent of loading state
    if (onLoadingChange) {
      onLoadingChange(!isLoaded);
    }
  }, [isLoaded, onLoadingChange]);

  useEffect(() => {
    // Set up intersection observer for lazy loading
    if (containerRef.current) {
      const observer = createIntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '100px 0px', // Start loading when 100px away from viewport
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
  }, []);

  useEffect(() => {
    // Skip complex animation if reduced motion is preferred or heavy animations are disabled
    if (!performanceSettings.enableBackgroundAnimations || !isVisible) {
      if (!performanceSettings.enableBackgroundAnimations) {
        setIsLoaded(true);
      }
      return;
    }

    const loadUnicornStudio = async () => {
      try {
        // Check if UnicornStudio is already loaded
        if (window.UnicornStudio && window.UnicornStudio.isInitialized) {
          initializeAnimation();
          return;
        }

        // Load UnicornStudio script with performance considerations
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js';
        script.async = true;
        script.defer = true; // Use defer for better page load performance
        
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

        // Add to head for better caching as recommended in performance guide
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
          
          // Create the animation element with performance optimizations from Unicorn Studio guide
          const animationDiv = document.createElement('div');
          animationDiv.setAttribute('data-us-project', '4swJSCcGnB2yGsrLWAyH');
          
          // Enable production mode for CDN caching and optimizations
          animationDiv.setAttribute('data-us-production', 'true');
          
          // Enable lazy loading (though we're already managing visibility)
          animationDiv.setAttribute('data-us-lazyload', 'true');
          
          // Performance parameters based on device capabilities
          const scale = performanceSettings.deviceInfo.mobile ? '0.5' : '0.75'; // Lower scale for mobile
          const dpi = performanceSettings.deviceInfo.mobile ? '1.0' : '1.2';
          const fps = performanceSettings.deviceInfo.mobile ? '24' : '30';
          
          animationDiv.setAttribute('data-us-scale', scale);
          animationDiv.setAttribute('data-us-dpi', dpi);
          animationDiv.setAttribute('data-us-fps', fps);
          
          // Style the container
          animationDiv.style.width = '100%';
          animationDiv.style.height = '100%';
          animationDiv.style.position = 'absolute';
          animationDiv.style.top = '0';
          animationDiv.style.left = '0';
          
          containerRef.current.appendChild(animationDiv);
          
          // Initialize with global performance settings
          window.UnicornStudio.init();
          
          setIsLoaded(true);
          
          // Log performance settings in development
          if (process.env.NODE_ENV === 'development') {
            console.log('UnicornStudio Performance Settings:', {
              scale,
              dpi,
              fps,
              production: true,
              lazyload: true,
              deviceInfo: performanceSettings.deviceInfo
            });
          }
        } catch (error) {
          console.warn('Error initializing UnicornStudio animation:', error);
          setIsLoaded(true);
        }
      }
    };

    loadUnicornStudio();
  }, [performanceSettings, isVisible]);

  // Mobile/low-performance device fallback - static gradient for better performance
  if (!performanceSettings.enableBackgroundAnimations) {
    return (
      <div 
        ref={containerRef}
        className="fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(234, 155, 1, 0.2) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(255, 179, 65, 0.2) 0%, transparent 60%),
            linear-gradient(135deg, #002654 0%, #4682B4 50%, #87CEEB 100%)
          `,
          // Static background for mobile performance
          backgroundAttachment: 'fixed',
          willChange: 'auto' // Don't reserve GPU resources for static background
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
          className="fixed inset-0 -z-10"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(234, 155, 1, 0.2) 0%, transparent 60%),
              radial-gradient(circle at 80% 20%, rgba(255, 179, 65, 0.2) 0%, transparent 60%),
              linear-gradient(135deg, #002654 0%, #4682B4 50%, #87CEEB 100%)
            `,
            // Static loading background to prevent flickering
            backgroundAttachment: 'fixed'
          }}
        />
      )}
    </>
  );
};

export default UnicornStudioBackground; 