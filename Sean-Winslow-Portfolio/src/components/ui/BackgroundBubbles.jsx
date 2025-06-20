import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BackgroundBubbles = () => {
  const blobs = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 120 + 80, // 80-200px for bigger, more prominent blobs
    initialX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
    initialY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
    duration: Math.random() * 25 + 20, // 20-45 seconds for slower, more graceful movement
    delay: Math.random() * 15,
    colorType: i % 2 === 0 ? 'orange' : 'navy', // Alternating between orange and navy
    borderRadius: `${Math.random() * 60 + 40}% ${Math.random() * 60 + 40}% ${Math.random() * 60 + 40}% ${Math.random() * 60 + 40}%`,
    rotationSpeed: Math.random() * 30 + 15, // 15-45 seconds for rotation
  }));

  const getGradientColors = (colorType) => {
    if (colorType === 'orange') {
      return {
        primary: '#F3904F',
        secondary: '#FF6B35',
        accent: '#FFB366'
      };
    } else {
      return {
        primary: '#3B4371',
        secondary: '#4A5568',
        accent: '#6B7280'
      };
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {blobs.map((blob) => {
        const colors = getGradientColors(blob.colorType);
        return (
          <motion.div
            key={blob.id}
            className="absolute"
            style={{
              width: blob.size,
              height: blob.size,
              borderRadius: blob.borderRadius,
              background: `radial-gradient(circle at 25% 25%, ${colors.accent}aa, ${colors.primary}66, ${colors.secondary}44)`,
              filter: 'blur(1px)',
              boxShadow: `
                inset 0 0 ${blob.size * 0.3}px ${colors.primary}33,
                0 0 ${blob.size * 0.5}px ${colors.primary}22,
                0 ${blob.size * 0.1}px ${blob.size * 0.3}px ${colors.primary}11
              `,
            }}
            initial={{
              x: blob.initialX,
              y: blob.initialY + 150,
              scale: 0,
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              x: [
                blob.initialX,
                blob.initialX + Math.sin(blob.id * 0.5) * 200,
                blob.initialX + Math.cos(blob.id * 0.7) * 300,
                blob.initialX + Math.sin(blob.id * 0.3) * 150,
                blob.initialX + Math.cos(blob.id * 0.9) * 250,
                blob.initialX,
              ],
              y: [
                blob.initialY + 150,
                blob.initialY - 100,
                blob.initialY - 300,
                blob.initialY - 500,
                blob.initialY - 700,
                blob.initialY - 900,
              ],
              scale: [0, 0.7, 1, 1.3, 0.9, 0],
              opacity: [0, 0.15, 0.25, 0.35, 0.2, 0],
              rotate: [0, 180, 360, 540, 720, 900],
              borderRadius: [
                blob.borderRadius,
                `${Math.random() * 70 + 30}% ${Math.random() * 70 + 30}% ${Math.random() * 70 + 30}% ${Math.random() * 70 + 30}%`,
                `${Math.random() * 80 + 20}% ${Math.random() * 80 + 20}% ${Math.random() * 80 + 20}% ${Math.random() * 80 + 20}%`,
                `${Math.random() * 60 + 40}% ${Math.random() * 60 + 40}% ${Math.random() * 60 + 40}% ${Math.random() * 60 + 40}%`,
                `${Math.random() * 90 + 10}% ${Math.random() * 90 + 10}% ${Math.random() * 90 + 10}% ${Math.random() * 90 + 10}%`,
                blob.borderRadius,
              ],
            }}
            transition={{
              duration: blob.duration,
              delay: blob.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
      
      {/* Additional smaller morphing blobs for more complexity */}
      {Array.from({ length: 12 }, (_, i) => {
        const smallBlob = {
          id: `small-${i}`,
          size: Math.random() * 60 + 30, // 30-90px
          initialX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
          initialY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          duration: Math.random() * 35 + 25, // 25-60 seconds
          delay: Math.random() * 20,
          colorType: Math.random() > 0.5 ? 'orange' : 'navy',
          borderRadius: `${Math.random() * 50 + 50}% ${Math.random() * 50 + 50}% ${Math.random() * 50 + 50}% ${Math.random() * 50 + 50}%`,
        };
        
        const colors = getGradientColors(smallBlob.colorType);
        
        return (
          <motion.div
            key={smallBlob.id}
            className="absolute"
            style={{
              width: smallBlob.size,
              height: smallBlob.size,
              borderRadius: smallBlob.borderRadius,
              background: `radial-gradient(ellipse at 30% 30%, ${colors.primary}88, ${colors.secondary}44, transparent)`,
              filter: 'blur(0.5px)',
            }}
            initial={{
              x: smallBlob.initialX,
              y: smallBlob.initialY + 100,
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: [
                smallBlob.initialX,
                smallBlob.initialX + Math.sin(i * 0.8) * 180,
                smallBlob.initialX + Math.cos(i * 1.2) * 220,
                smallBlob.initialX + Math.sin(i * 0.4) * 140,
                smallBlob.initialX,
              ],
              y: [
                smallBlob.initialY + 100,
                smallBlob.initialY - 150,
                smallBlob.initialY - 400,
                smallBlob.initialY - 650,
                smallBlob.initialY - 900,
              ],
              scale: [0, 0.8, 1.1, 0.9, 0],
              opacity: [0, 0.1, 0.2, 0.15, 0],
              borderRadius: [
                smallBlob.borderRadius,
                `${Math.random() * 60 + 40}% ${Math.random() * 60 + 40}% ${Math.random() * 60 + 40}% ${Math.random() * 60 + 40}%`,
                `${Math.random() * 80 + 20}% ${Math.random() * 80 + 20}% ${Math.random() * 80 + 20}% ${Math.random() * 80 + 20}%`,
                `${Math.random() * 70 + 30}% ${Math.random() * 70 + 30}% ${Math.random() * 70 + 30}% ${Math.random() * 70 + 30}%`,
                smallBlob.borderRadius,
              ],
            }}
            transition={{
              duration: smallBlob.duration,
              delay: smallBlob.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundBubbles; 