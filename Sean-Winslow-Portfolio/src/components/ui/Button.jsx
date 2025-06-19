import { motion } from 'framer-motion';

const Button = ({ children, href, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-block text-center';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 hover:scale-105 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-100 text-gray-800 border-2 border-gray-300 hover:bg-gray-200 hover:border-gray-400',
    tertiary: 'bg-blue-50 text-blue-600 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-300',
    gradient: 'gradient-button',
    gradientVariant: 'gradient-button gradient-button-variant'
  };

  const classes = variant === 'gradient' || variant === 'gradientVariant' 
    ? `${variants[variant]} ${className}` 
    : `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button; 