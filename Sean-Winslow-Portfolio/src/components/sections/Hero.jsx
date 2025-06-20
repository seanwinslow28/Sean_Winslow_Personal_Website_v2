import React from 'react';
import Button from '../ui/Button';
import ExpandingButton from '../ui/ExpandingButton';
import { handleNavClick } from '../../utils/smoothScroll';

const Hero = () => {
  return (
    <section className="hero min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-20">
      <div className="container-custom text-center relative z-10 mt-8">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-serif">
            Discovering product solutions through{' '}
            <span className="gradient-text">creativity</span> and{' '}
            <span className="gradient-text">AI</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto italic font-serif">
            I'm an AI Product Manager exploring what's possible through left-brain analytics and right-brain development.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button href="#projects" variant="gradient" onClick={(e) => handleNavClick(e, '#projects')}>
            My Projects
          </Button>
          <Button href="#about" variant="gradient" onClick={(e) => handleNavClick(e, '#about')}>
            About me
          </Button>
          <ExpandingButton 
            text="Playground"
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
          />
        </div>
        
        {/* Hero Character Image */}
        <div className="mb-8">
          <img 
            src="/images/Headshot_Placeholder.png"
            alt="Sean Winslow"
            className="mx-auto rounded-2xl shadow-lg"
            style={{ width: '386px', height: '506px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 