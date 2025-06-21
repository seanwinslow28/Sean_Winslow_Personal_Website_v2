import { motion } from 'framer-motion';

const Button = ({ children, href, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-block text-center';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 hover:scale-105 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-100 text-gray-800 border-2 border-gray-300 hover:bg-gray-200 hover:border-gray-400',
    tertiary: 'bg-blue-50 text-blue-600 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-300',
    blue: 'text-white hover:scale-105 shadow-lg hover:shadow-xl',
    orange: 'text-white hover:scale-105 shadow-lg hover:shadow-xl',
    lime: 'text-black hover:scale-105 shadow-lg hover:shadow-xl',
    gradient: 'gradient-button',
    gradientVariant: 'gradient-button gradient-button-variant'
  };

  const getButtonStyle = () => {
    switch (variant) {
      case 'blue':
        return {
          backgroundColor: 'rgba(59, 130, 246, 0.8)',
          borderColor: 'rgba(59, 130, 246, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        };
      case 'orange':
        return {
          backgroundColor: '#EA9B01',
          borderColor: '#EA9B01',
          boxShadow: '0 4px 15px rgba(234, 155, 1, 0.3)'
        };
      case 'lime':
        return {
          backgroundColor: '#CEFA05',
          borderColor: '#CEFA05',
          boxShadow: '0 4px 15px rgba(206, 250, 5, 0.3)'
        };
      default:
        return {};
    }
  };

  const classes = variant === 'gradient' || variant === 'gradientVariant' 
    ? `${variants[variant]} ${className}` 
    : `${baseClasses} ${variants[variant]} ${className}`;

  const customStyle = getButtonStyle();

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        style={customStyle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      style={customStyle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button; 