import React from 'react';
import { motion } from 'framer-motion';

const NavWidget = ({ 
  children, 
  href = "#", 
  onClick, 
  variant = 'default',
  className = "",
  ...props
}) => {
  const getBackgroundStyle = () => {
    switch (variant) {
      case 'connect':
        return {
          background: 'linear-gradient(135deg, #F3904F 0%, #3B4371 100%)'
        };
      default:
        return {
          background: 'linear-gradient(135deg, #F3904F 0%, #3B4371 100%)'
        };
    }
  };

  const backgroundStyle = getBackgroundStyle();

  const MotionComponent = motion.a;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className={`
        relative px-6 py-3 rounded-full cursor-pointer
        text-base font-semibold text-white no-underline
        overflow-hidden border-2 border-white/30
        backdrop-blur-sm
        ${className}
      `}
      style={backgroundStyle}
      initial={{ y: 0 }}
      whileHover={{ 
        y: -2,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        boxShadow: '0 8px 25px rgba(243, 144, 79, 0.3)',
        scale: 1.05
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 25 
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default NavWidget; 