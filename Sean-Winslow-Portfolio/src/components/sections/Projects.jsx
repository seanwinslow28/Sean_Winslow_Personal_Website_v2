import React, { useState } from 'react';

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const projects = [
    {
      id: 1,
      title: "AI Content Generator",
      description: "An intelligent content creation platform that leverages GPT models to generate high-quality marketing copy, blog posts, and social media content with brand voice consistency.",
      tags: ["React", "OpenAI API", "Node.js", "Product Strategy"],
      link: "#"
    },
    {
      id: 2,
      title: "ML Analytics Dashboard", 
      description: "A comprehensive analytics platform that uses machine learning to predict user behavior patterns and provide actionable insights for product optimization and growth strategies.",
      tags: ["Python", "TensorFlow", "D3.js", "Data Analysis"],
      link: "#"
    },
    {
      id: 3,
      title: "Smart Recommendation Engine",
      description: "A personalized recommendation system that combines collaborative filtering with deep learning to deliver highly relevant product suggestions and improve user engagement metrics.",
      tags: ["PyTorch", "AWS", "Redis", "A/B Testing"],
      link: "#"
    }
  ];

  const handleMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setMousePosition({ x: 0, y: 0 });
  };

  const getRotation = (cardId) => {
    if (hoveredCard !== cardId) return { rotateX: 0, rotateY: 0 };
    
    const rotateX = -(mousePosition.y / 250) * 2;
    const rotateY = (mousePosition.x / 180) * 1;
    return { rotateX, rotateY };
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-20 px-5" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
            My Projects
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project) => {
            const rotation = getRotation(project.id);
            const isHovered = hoveredCard === project.id;
            
            return (
              <div
                key={project.id}
                className="relative w-full h-[500px] rounded-[32px] overflow-hidden bg-white/20 backdrop-blur-md border border-white/30 cursor-pointer transition-all duration-500 ease-out"
                style={{
                  transform: `translateY(${isHovered ? '-10px' : '0px'}) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
                  transformStyle: 'preserve-3d',
                  boxShadow: isHovered 
                    ? '0 -15px 120px 15px rgba(78, 99, 255, 0.25), 0 10px 30px 0 rgba(0, 0, 0, 0.4)'
                    : '0 -10px 100px 10px rgba(78, 99, 255, 0.15), 0 0 10px 0 rgba(0, 0, 0, 0.3)'
                }}
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Glass reflection overlay */}
                <div 
                  className="absolute inset-0 z-30 pointer-events-none transition-opacity duration-400"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)',
                    backdropFilter: 'blur(2px)',
                    opacity: isHovered ? 0.7 : 0.5
                  }}
                />

                {/* Dark background - made transparent */}
                <div 
                  className="absolute inset-0 z-0"
                  style={{
                    background: 'rgba(0, 0, 0, 0.05)'
                  }}
                />

                {/* Light pink and blue gradient glow from bottom */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-2/3 z-20 transition-all duration-400"
                  style={{
                    background: `
                      radial-gradient(ellipse at bottom right, rgba(147, 197, 253, 0.4) -10%, rgba(79, 70, 229, 0) 70%),
                      radial-gradient(ellipse at bottom left, rgba(251, 182, 206, 0.4) -10%, rgba(79, 70, 229, 0) 70%)
                    `,
                    filter: 'blur(40px)',
                    opacity: isHovered ? 0.9 : 0.8,
                    transform: `translateY(${isHovered ? '-5px' : '0px'})`
                  }}
                />

                {/* Central light pink-blue glow */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-2/3 z-20 transition-all duration-400"
                  style={{
                    background: 'radial-gradient(circle at bottom center, rgba(244, 114, 182, 0.4) -20%, rgba(79, 70, 229, 0) 60%)',
                    filter: 'blur(45px)',
                    opacity: isHovered ? 0.85 : 0.75,
                    transform: `translateY(${isHovered ? '10%' : '10%'})`
                  }}
                />

                {/* Enhanced bottom border glow */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 z-25 transition-all duration-400"
                  style={{
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.05) 100%)',
                    boxShadow: isHovered
                      ? '0 0 20px 4px rgba(147, 197, 253, 0.6), 0 0 30px 6px rgba(251, 182, 206, 0.5), 0 0 40px 8px rgba(244, 114, 182, 0.3)'
                      : '0 0 15px 3px rgba(147, 197, 253, 0.5), 0 0 25px 5px rgba(251, 182, 206, 0.4), 0 0 35px 7px rgba(244, 114, 182, 0.25)',
                    opacity: isHovered ? 1 : 0.9
                  }}
                />

                {/* Card content */}
                <div className="relative flex flex-col h-full p-8 z-40">
                  {/* Image placeholder */}
                  <div 
                    className="w-full h-44 rounded-2xl mb-5 relative overflow-hidden border border-white/10 flex items-center justify-center transition-transform duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                      transform: `scale(${isHovered ? 1.02 : 1})`
                    }}
                  >
                    <span className="text-gray-600 text-sm font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Project Preview
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 
                      className="text-2xl text-black mb-3"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        letterSpacing: '-0.01em',
                        lineHeight: 1.2,
                        textShadow: isHovered ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
                      }}
                    >
                      {project.title}
                    </h3>

                    <p 
                      className="text-sm text-gray-800 mb-5 leading-relaxed"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 400,
                        textShadow: isHovered ? '0 1px 2px rgba(0,0,0,0.05)' : 'none'
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 rounded-full text-xs font-medium text-gray-800 transition-colors duration-300"
                          style={{
                            fontFamily: 'Montserrat, sans-serif',
                            background: isHovered ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <a 
                      href={project.link}
                      className="inline-flex items-center text-black text-sm font-medium mt-auto opacity-90 hover:opacity-100 transition-all duration-300"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        filter: isHovered ? 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.3))' : 'none'
                      }}
                    >
                      Learn More
                      <svg 
                        className="ml-2 w-4 h-4 transition-transform duration-300"
                        style={{
                          transform: `translateX(${isHovered ? '4px' : '0px'})`
                        }}
                        viewBox="0 0 16 16" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M1 8H15M15 8L8 1M15 8L8 15" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects; 