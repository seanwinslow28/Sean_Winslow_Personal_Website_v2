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
  const backgroundStyle = variant === 'connect' 
    ? {
        background: 'linear-gradient(135deg, rgba(248, 248, 255, 0.9) 0%, rgba(248, 248, 255, 0.7) 50%, rgba(248, 248, 255, 0.4) 100%), linear-gradient(90deg, #f8f8ff 0%, #ff6b35 100%)'
      }
    : {
        background: 'linear-gradient(135deg, #f8f8ff 0%, rgba(248, 248, 255, 0.9) 50%, rgba(248, 248, 255, 0.7) 100%), radial-gradient(ellipse 60px 40px at 85% 50%, #1a2b56 0%, #ffffff 70%)'
      };

  const MotionComponent = motion.a;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className={`
        relative px-6 py-3 rounded-full cursor-pointer
        text-base font-semibold text-black no-underline
        overflow-hidden border-2 border-gray-400
        backdrop-blur-sm
        ${className}
      `}
      style={backgroundStyle}
      initial={{ y: 0 }}
      whileHover={{ 
        y: -2,
        borderColor: '#909090',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
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