import React from 'react';

const Container = ({ 
  children, 
  className = '', 
  maxWidth = 'default',
  padding = true,
  ...props 
}) => {
  const baseClasses = 'container';
  const maxWidthClasses = {
    small: 'container-sm',
    default: 'container-default',
    large: 'container-lg',
    xl: 'container-xl',
    full: 'container-full'
  };
  const paddingClass = padding ? 'container-padding' : '';

  const classes = `${baseClasses} ${maxWidthClasses[maxWidth]} ${paddingClass} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Container; 