import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SocialWidget from '../ui/SocialWidget';
import { isMobile } from '../../utils/performance';

const Contact = () => {
  const socialLinks = [
    { platform: 'gmail', href: 'mailto:sean.winslow28@gmail.com' },
    { platform: 'linkedin', href: 'https://www.linkedin.com/in/sean-winslow-204390a5' },
    { platform: 'youtube', href: 'https://youtube.com/@seanpwinslow?si=JaNdTOW61oiv1qRE' },
    { platform: 'github', href: 'https://github.com/seanwinslow28' }
  ];

  const mobile = isMobile();

  // Desktop animations only
  const desktopAnimations = {
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8 },
      viewport: { once: true }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.8 },
      viewport: { once: true }
    },
    fadeInUpDelayed: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, delay: 0.2 },
      viewport: { once: true }
    }
  };

  // Mobile: Use regular div with smooth intersection observer
  const MobileComponent = ({ children, className, style, delay = 0 }) => {
    const ref = useRef(null);

    useEffect(() => {
      if (!mobile || !ref.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add a small delay to make it feel more natural
              setTimeout(() => {
                entry.target.classList.add('mobile-visible');
              }, delay);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2, // Trigger when 20% visible (more gradual)
          rootMargin: '0px 0px -100px 0px' // Start earlier but require more visibility
        }
      );

      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [delay]);

    return (
      <div ref={ref} className={`${className} mobile-fade-in-smooth`} style={style}>
        {children}
      </div>
    );
  };

  // Desktop: Use Framer Motion
  const DesktopH2 = ({ children, className, style, animationType }) => (
    <motion.h2 className={className} style={style} {...desktopAnimations[animationType]}>
      {children}
    </motion.h2>
  );

  const DesktopDiv = ({ children, className, animationType }) => (
    <motion.div className={className} {...desktopAnimations[animationType]}>
      {children}
    </motion.div>
  );

  const H2Component = mobile ? MobileComponent : DesktopH2;
  const DivComponent = mobile ? MobileComponent : DesktopDiv;

  return (
    <div>
      {/* Testimonials Section */}
      <section className="py-20 px-4" style={{ backgroundColor: 'rgba(248, 248, 255, 0.95)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <H2Component
            className="text-4xl md:text-6xl mb-16 text-gray-900 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
            animationType="fadeInUp"
            delay={100}
          >
            Testimonials
          </H2Component>

          <DivComponent
            className="bg-gray-100 rounded-2xl p-12 border border-gray-200 max-w-4xl mx-auto"
            animationType="scaleIn"
            delay={250}
          >
            <div className="text-gray-600 text-lg mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Video Testimonial</div>
            <div className="aspect-video bg-gray-50 rounded-xl flex items-center justify-center border border-gray-300">
              <div className="text-gray-500">📹 Video Placeholder</div>
            </div>
          </DivComponent>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4" style={{ backgroundColor: 'rgba(248, 248, 255, 0.95)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <H2Component
            className="text-4xl md:text-6xl mb-16 text-gray-900 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
            animationType="fadeInUp"
            delay={100}
          >
            Let's Connect
          </H2Component>

          <DivComponent
            className="flex justify-center gap-6"
            animationType="fadeInUpDelayed"
            delay={250}
          >
            {socialLinks.map((link, index) => (
              <SocialWidget
                key={index}
                platform={link.platform}
                href={link.href}
              />
            ))}
          </DivComponent>
        </div>
      </section>
    </div>
  );
};

export default Contact; 