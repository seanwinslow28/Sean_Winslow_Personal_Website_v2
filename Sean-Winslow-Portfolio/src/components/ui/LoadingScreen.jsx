import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ isLoading, onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    if (!isLoading || hasCompleted) return;

    // Simple progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setHasCompleted(true);
          setTimeout(() => {
            onLoadingComplete?.();
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, [isLoading, hasCompleted, onLoadingComplete]);

  // Reset state when loading starts again
  useEffect(() => {
    if (isLoading && hasCompleted) {
      setHasCompleted(false);
      setProgress(0);
    }
  }, [isLoading, hasCompleted]);

  return (
    <AnimatePresence>
      {isLoading && !hasCompleted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 50%, #0f2027 100%)'
          }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-96 h-96 rounded-full opacity-10"
              style={{
                background: 'radial-gradient(circle, #EA9B01 0%, transparent 70%)',
                left: '20%',
                top: '30%'
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute w-80 h-80 rounded-full opacity-10"
              style={{
                background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
                right: '25%',
                bottom: '25%'
              }}
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </div>

          {/* Main loading content */}
          <div className="relative z-10 text-center px-8">
            {/* Logo/Title */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
                <span style={{ 
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Sean</span>{' '}
                <span style={{ 
                  background: 'linear-gradient(135deg, #EA9B01 0%, #FFB341 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Winslow</span>
              </h1>
              <p className="text-lg text-gray-300 font-serif italic">
                AI & ML Creative Solutions
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-80 max-w-full mx-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Loading...</span>
                  <span className="text-sm text-gray-400">{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #3b82f6 0%, #EA9B01 100%)',
                      width: `${progress}%`
                    }}
                    initial={{ width: 0 }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Loading animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center space-x-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#EA9B01' }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 