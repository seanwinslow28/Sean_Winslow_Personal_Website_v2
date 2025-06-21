import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SocialWidget = ({ platform, href, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    switch (platform) {
      case 'gmail':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case 'youtube':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      case 'github':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const getPlatformLabel = () => {
    switch (platform) {
      case 'gmail': return 'Gmail';
      case 'linkedin': return 'LinkedIn';
      case 'youtube': return 'YouTube';
      case 'github': return 'GitHub';
      default: return '';
    }
  };

  const getPlatformColors = () => {
    switch (platform) {
      case 'gmail':
        return {
          bg: '#EA4335',
          text: '#ffffff'
        };
      case 'linkedin':
        return {
          bg: '#0077B5',
          text: '#ffffff'
        };
      case 'youtube':
        return {
          bg: '#FF0000',
          text: '#ffffff'
        };
      case 'github':
        return {
          bg: '#333333',
          text: '#ffffff'
        };
      default:
        return {
          bg: '#6B7280',
          text: '#ffffff'
        };
    }
  };

  const colors = getPlatformColors();

  return (
    <motion.div
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm font-medium rounded-md pointer-events-none z-20"
        style={{
          fontFamily: 'Instrument Sans',
          backgroundColor: isHovered ? colors.bg : '#ffffff',
          color: isHovered ? colors.text : '#ffffff',
          boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)'
        }}
        initial={{ 
          top: 0,
          opacity: 0,
          visibility: 'hidden'
        }}
        animate={{
          top: isHovered ? -45 : 0,
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? 'visible' : 'hidden'
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          duration: 0.3
        }}
      >
        {getPlatformLabel()}
        
        {/* Tooltip Arrow */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45"
          style={{
            backgroundColor: isHovered ? colors.bg : '#ffffff',
            bottom: -3
          }}
        />
      </motion.div>

      {/* Icon Button */}
      <motion.a
        href={href}
        className="relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer text-gray-600"
        style={{
          backgroundColor: isHovered ? colors.bg : '#ffffff',
          color: isHovered ? colors.text : '#6B7280',
          boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
          textShadow: isHovered ? '0px -1px 0px rgba(0, 0, 0, 0.1)' : 'none'
        }}
        whileHover={{ 
          scale: 1.1,
          y: -2
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          duration: 0.2
        }}
        aria-label={getPlatformLabel()}
      >
        {/* Gradient background effect matching home page colors */}
        <div 
          className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(206, 250, 5, 0.1) 50%, rgba(234, 155, 1, 0.1) 100%)',
            opacity: isHovered ? 0.2 : 0
          }}
        />
        
        {/* Icon */}
        <div className="relative z-10">
          {getIcon()}
        </div>
      </motion.a>
    </motion.div>
  );
};

export default SocialWidget; 