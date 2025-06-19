import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NavWidget from '../ui/NavWidget';
import { handleNavClick } from '../../utils/smoothScroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#projects', label: 'Projects', variant: 'default' },
    { href: '#about', label: 'About', variant: 'default' },
    { href: '#contact', label: 'Connect', variant: 'connect' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Far Left */}
          <motion.div
            className="text-2xl font-bold font-display"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sean <span className="gradient-text">Winslow</span>
          </motion.div>

          {/* Navigation - Far Right */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <NavWidget
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                variant={item.variant}
              >
                {item.label}
              </NavWidget>
            ))}
          </nav>

          {/* Mobile menu button - Far Right */}
          <div className="md:hidden">
            <NavWidget
              href="#"
              onClick={() => {}} // Add mobile menu functionality later
              className="p-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </NavWidget>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 