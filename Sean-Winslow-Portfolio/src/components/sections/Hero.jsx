import React, { useState } from 'react';
import Button from '../ui/Button';
import ExpandingButton from '../ui/ExpandingButton';
import TiltedCard from '../ui/TiltedCard';
import UnicornStudioBackground from '../ui/UnicornStudioBackground';
import LoadingScreen from '../ui/LoadingScreen';
import { handleNavClick } from '../../utils/smoothScroll';

const Hero = () => {
  const [isBackgroundLoading, setIsBackgroundLoading] = useState(true);

  const handleLoadingChange = (loading) => {
    setIsBackgroundLoading(loading);
  };

  const handleLoadingComplete = () => {
    setIsBackgroundLoading(false);
  };

  return (
    <>
      <LoadingScreen 
        isLoading={isBackgroundLoading} 
        onLoadingComplete={handleLoadingComplete}
      />
      <section className="hero min-h-screen flex items-center justify-center relative py-20 px-6 lg:px-12">
        <UnicornStudioBackground onLoadingChange={handleLoadingChange} />
        <div className="container mx-auto max-w-7xl relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left side - Text content */}
            <div className="text-left lg:pr-8">
              <h1 className="text-black mb-8" style={{ 
                fontFamily: 'Instrument Sans',
                fontWeight: 600,
                lineHeight: '1.1', 
                letterSpacing: '-0.02em',
                marginBottom: '2rem'
              }}>
                <div className="block mb-1" style={{ 
                  fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
                  lineHeight: '1.0',
                  letterSpacing: '-0.01em'
                }}>
                  AI&ML
                </div>
                <div 
                  className="block"
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    lineHeight: '1.0',
                    letterSpacing: '-0.01em'
                  }}
                >
                  Creative Solutions
                </div>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-800 max-w-xl italic mb-12" style={{ 
                fontFamily: 'Instrument Sans',
                lineHeight: '1.6',
                letterSpacing: '0.02em',
                wordSpacing: '0.05em'
              }}>
                I'm an AI Product Manager exploring what's possible through left-brain analytics and right-brain development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <Button href="#projects" variant="blue" onClick={(e) => handleNavClick(e, '#projects')}>
                  My Projects
                </Button>
                <Button href="#about" variant="lime" onClick={(e) => handleNavClick(e, '#about')}>
                  About Me
                </Button>
                <ExpandingButton 
                  text="Playground"
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, '#contact')}
                />
              </div>
            </div>
            
            {/* Right side - Photo */}
            <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
              <TiltedCard
                imageSrc="/images/Hero_Page_Image.jpg"
                altText="Sean Winslow - AI Product Manager"
                captionText="Move your mouse to interact"
                containerHeight="506px"
                containerWidth="386px"
                imageHeight="506px"
                imageWidth="386px"
                scaleOnHover={1.05}
                rotateAmplitude={12}
                showMobileWarning={false}
                showTooltip={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero; 