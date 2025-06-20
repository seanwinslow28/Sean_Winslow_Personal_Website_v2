import React from 'react';
import { motion } from 'framer-motion';
import SocialWidget from '../ui/SocialWidget';

const Contact = () => {
  const socialLinks = [
    { platform: 'gmail', href: 'mailto:your.email@gmail.com' },
    { platform: 'linkedin', href: 'https://linkedin.com/in/yourprofile' },
    { platform: 'youtube', href: 'https://youtube.com/@yourchannel' },
    { platform: 'github', href: 'https://github.com/yourusername' }
  ];

  return (
    <div>
      {/* Testimonials Section */}
      <section className="py-20 px-4" style={{ backgroundColor: 'rgba(248, 248, 255, 0.95)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-16 text-gray-900 leading-tight font-serif"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.h2>

          <motion.div
            className="bg-gray-100 rounded-2xl p-12 border border-gray-200 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-gray-600 text-lg mb-4">Video Testimonial</div>
            <div className="aspect-video bg-gray-50 rounded-xl flex items-center justify-center border border-gray-300">
              <div className="text-gray-500">📹 Video Placeholder</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4" style={{ backgroundColor: 'rgba(248, 248, 255, 0.95)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-16 text-gray-900 leading-tight font-serif"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <SocialWidget
                key={index}
                platform={link.platform}
                href={link.href}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 