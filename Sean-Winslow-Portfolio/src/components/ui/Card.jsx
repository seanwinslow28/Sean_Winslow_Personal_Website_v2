import { motion } from 'framer-motion';
import Button from './Button';

const Card = ({ title, description, image, link, gradient = 'from-slate-600 to-slate-800' }) => {
  return (
    <motion.div
      className={`bg-gradient-to-br ${gradient} rounded-2xl p-8 shadow-xl border border-gray-200 card-hover relative overflow-hidden`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
      
      <div className="relative z-10">
        <div className="w-full h-48 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 border border-white/30">
          <span className="text-white/90 font-medium">{image}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-white/90 mb-6 leading-relaxed">{description}</p>
        
        <Button href={link} variant="primary" className="w-full">
          View Details
        </Button>
      </div>
    </motion.div>
  );
};

export default Card; 