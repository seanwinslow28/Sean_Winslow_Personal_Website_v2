import React from 'react';

const ExpandingButton = ({ text = "Playground", href = "#", onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a href={href} onClick={handleClick}>
      <button className="group relative inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full font-medium border-2 transition-all duration-300 hover:w-40"
        style={{
          color: '#1e3a8a', // Navy blue for text and arrow
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, #CEFA05 50%, #EA9B01 100%)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 15px rgba(206, 250, 5, 0.2)'
        }}
        onMouseEnter={(e) => {
          e.target.style.borderColor = '#CEFA05';
          e.target.style.boxShadow = '0 6px 20px rgba(206, 250, 5, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          e.target.style.boxShadow = '0 4px 15px rgba(206, 250, 5, 0.2)';
        }}
      >
        <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-4 group-hover:opacity-100" style={{ background: 'transparent' }}>
          {text}
        </div>
        <div className="absolute right-4">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5">
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd">
            </path>
          </svg>
        </div>
      </button>
    </a>
  );
};

export default ExpandingButton; 