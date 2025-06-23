import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { handleNavClick } from '../../utils/smoothScroll';

const Header = () => {

  const navItems = [
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Connect' },
  ];

  return (
    <motion.header
      className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Far Left */}
          <motion.div
            className="text-2xl font-bold"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span style={{ 
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
            }}>Sean</span> <span style={{ 
              color: '#CEFA05',
              textShadow: '0 2px 4px rgba(206, 250, 5, 0.3)'
            }}>Winslow</span>
          </motion.div>

          {/* Navigation - Far Right */}
          <nav className="hidden md:flex items-center space-x-2 text-base font-semibold">
            {navItems.map((item, index) => {
                             const getNavItemColor = () => {
                 if (item.label === 'Projects' || item.label === 'About' || item.label === 'Connect') {
                   return '#CEFA05'; // Lime green
                 }
                 return '#ffffff'; // Default white
               };

              return (
                <div key={item.href} className="flex items-center">
                                     <motion.a
                     href={item.href}
                     onClick={(e) => handleNavClick(e, item.href)}
                     className="hover:opacity-80 transition-all duration-200 cursor-pointer"
                     style={{ 
                       color: getNavItemColor(),
                       textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                     }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2,
                      rotate: [0, -2, 2, 0],
                      textShadow: `0px 0px 8px ${getNavItemColor()}80`,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 10,
                      rotate: {
                        duration: 0.3,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    {item.label}
                  </motion.a>
                  {index < navItems.length - 1 && (
                    <span className="mx-2 text-white/40">/</span>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile menu button - Far Right */}
          <div className="md:hidden">
            <motion.button
              onClick={() => {}} // Add mobile menu functionality later
              className="p-3 text-white/80 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 