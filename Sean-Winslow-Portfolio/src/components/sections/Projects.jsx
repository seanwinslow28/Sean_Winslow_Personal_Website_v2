import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Strategy Dashboard',
      description: 'Developed a comprehensive analytics platform that increased product decision accuracy by 45% and reduced time-to-insight by 60%.',
      technologies: ['Product Strategy', 'AI/ML', 'Analytics'],
      status: 'Live',
      link: '#',
      type: 'featured'
    },
    {
      id: 2,
      title: 'ML Model Integration Suite',
      description: 'Led cross-functional teams to integrate machine learning models into existing products, improving user engagement by 60%.',
      technologies: ['Machine Learning', 'API Integration', 'Team Leadership'],
      status: 'In Progress',
      link: '#',
      type: 'featured'
    },
    {
      id: 3,
      title: 'Data Analytics Dashboard',
      description: 'Built comprehensive analytics dashboard that enabled data-driven decisions, increasing conversion rates by 35%.',
      technologies: ['Data Visualization', 'React', 'D3.js'],
      status: 'Live',
      link: '#',
      type: 'featured'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-gray-900 leading-tight font-serif"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="group"
            >
              {/* Project Card with Roseanna Gradient Background */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tl from-[#F3904F] to-[#3B4371] p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 h-[580px] flex flex-col">
                
                {/* Icon Placeholder */}
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/30 rounded-xl"></div>
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col text-white">
                  <h3 className="text-2xl font-bold mb-6 leading-tight h-16 flex items-start">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/90 mb-8 leading-relaxed text-base h-24 overflow-hidden">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8 h-12 flex items-start">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Project Button */}
                  <div className="mt-auto">
                    <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold py-4 px-6 rounded-2xl hover:bg-white hover:text-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                      View Project
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Projects Teaser */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Want to see more of my work?
          </p>
          <button className="bg-gradient-to-r from-[#F3904F] to-[#3B4371] text-white font-semibold py-4 px-8 rounded-2xl hover:from-[#F3904F]/90 hover:to-[#3B4371]/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 