import React from 'react';
import { motion } from 'framer-motion';
import ImageSwiper from '../ui/ImageSwiper';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-gray-900 leading-tight font-serif"
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
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate AI Product Manager with over 5 years of experience bridging the gap between cutting-edge technology and user-centered design. My unique approach combines analytical rigor with creative problem-solving to deliver products that truly make a difference.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in translating complex AI capabilities into intuitive user experiences. Whether it's machine learning algorithms, natural language processing, or computer vision, I help teams build products that feel magical to users while being technically sound.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My background spans both technical implementation and strategic planning, allowing me to work effectively with engineering teams while maintaining focus on business outcomes and user value.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ImageSwiper
              images="/images/About_Me_1.png,/images/About_Me_2.png,/images/About_Me_3.png,/images/About_Me_4.png"
              cardWidth={300}
              cardHeight={400}
              className="mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 