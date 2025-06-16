import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <main className="text-center min-h-screen bg-gradient-to-br from-[#2A2E74] to-[#5C2C90] text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-20"
      >
        <h1 className="text-4xl font-bold">Sean Winslow</h1>
        <p className="text-xl mt-2">AI Product Manager</p>
        <div className="mt-6 space-x-4">
          <a href="#about" className="hover:underline">About Me</a>
          <a href="#projects" className="hover:underline">Portfolio</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </motion.div>
    </main>
  );
}
