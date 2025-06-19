import React from 'react';

const StarBorder = ({ 
  as: Component = "button", 
  className = "", 
  color = "#ffffff", 
  speed = "6s", 
  children, 
  ...props 
}) => {
  const defaultColor = color;

  return (
    <Component 
      className={`group relative z-0 inline-block py-[1px] overflow-hidden rounded-[16px] cursor-pointer ${className}`}
      {...props}
    >
      {/* Blue gradient background - very opaque */}
      <div 
        className="absolute inset-0 rounded-[16px] -z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 67, 113, 0.95) 0%, rgba(74, 74, 122, 0.95) 50%, rgba(107, 90, 127, 0.95) 100%)'
        }}
      />

      {/* Shimmer effect container */}
      <div className="absolute inset-0 overflow-hidden rounded-[16px] z-0">
        {/* Shimmer spark */}
        <div className="absolute inset-0 animate-shimmer-slide">
          {/* Shimmer rotating gradient */}
          <div 
            className="animate-spin-around absolute -inset-full w-[200%] h-[200%]"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, ${defaultColor} 60deg, transparent 120deg)`,
              filter: 'blur(1px)',
            }}
          />
        </div>
      </div>
      
      {/* Button content - semi-transparent overlay */}
      <div className="relative z-10 text-white text-center text-sm py-2.5 px-4 rounded-[16px] bg-white/5 border border-white/10">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder; 