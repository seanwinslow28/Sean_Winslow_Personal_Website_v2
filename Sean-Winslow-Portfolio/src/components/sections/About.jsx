import React from 'react';
import { motion } from 'framer-motion';
import ImageSwiper from '../ui/ImageSwiper';
import { getAssetPath } from '../../utils/assetPath';

const About = () => {
  return (
    <section id="about" className="py-20 px-4" style={{ backgroundColor: 'rgba(248, 248, 255, 0.95)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl text-center mb-16 text-gray-900 leading-tight"
          style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
              I'm Sean Winslow. A creative professional from New York, transitioning from visual storytelling to AI Product Management. With a background in illustration, animation, and photography, I believe I bring a unique perspective to AI development.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
              My goal is to recapture those moments of exploring new products that would make me feel like my world has changed. The impossible suddenly seems possible. What used to take hours, now takes minutes. By understanding what AI can do and what people actually need it to do, I want to help users reclaim their time and unlock new possibilities.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
              As I dive deeper into LLM prompting, technical design, and vibe coding, I'm discovering this completely new artistic playground. I'm passionate about collaborating with developers, engineers, and designers to help build AI products that amplify imagination rather than replace it.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center relative -mt-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ImageSwiper
              images={[
                'images/About_Me_4.png',
                'images/About_Me_2.png',
                'images/About_Me_3.png',
                'images/About_Me_1.png',
                'images/About_Me_5.png',
                'images/About_Me_6.png',
                'images/About_Me_7.png',
                'images/About_Me_8.png',
                'images/About_Me_9.png'
              ].map(img => getAssetPath(img)).join(',')}
              cardWidth={360}
              cardHeight={480}
              className="mx-auto"
            />
            
            {/* Swipe indicator */}
            <motion.div
              className="absolute right-[-80px] top-1/2 transform -translate-y-1/2 flex items-center space-x-2 text-black"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -8, 0],
                x: [0, -4, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{
                y: [0, -12, 0],
                x: [0, -6, 0],
                transition: { duration: 0.6, repeat: Infinity }
              }}
              style={{
                transition: "all 0.3s ease"
              }}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="rotate-180"
              >
                <path 
                  d="M9 18l6-6-6-6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span 
                className="text-lg font-medium select-none"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
              >
                Swipe me
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 