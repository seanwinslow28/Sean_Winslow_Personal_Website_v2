import React from "react";

const InteractiveHoverButton = React.forwardRef(
  ({ text = "Button", className = "", href, onClick, ...props }, ref) => {
    const Component = href ? "a" : "button";
    
    return (
      <Component
        ref={ref}
        href={href}
        onClick={onClick}
        className={`group relative w-40 cursor-pointer overflow-hidden rounded-full border-2 border-gray-300 p-3 text-center font-semibold transition-all duration-300 hover:border-gray-400 ${className}`}
        style={{
          background: 'linear-gradient(135deg, #3B4371 0%, #4A4A7A 20%, #6B5A7F 40%, #A56A6F 70%, #F3904F 100%)'
        }}
        {...props}
      >
        <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-white font-medium">
          {text}
        </span>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          <span className="font-medium">{text}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        <div 
          className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]"
          style={{
            background: 'linear-gradient(135deg, #F3904F 0%, #A56A6F 30%, #6B5A7F 60%, #4A4A7A 80%, #3B4371 100%)'
          }}
        />
      </Component>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton; 