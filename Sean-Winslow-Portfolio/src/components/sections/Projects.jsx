import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Product Strategy Platform',
      description: 'Developed comprehensive product roadmaps for AI-powered solutions, resulting in 40% faster time-to-market and $2M revenue increase.',
      technologies: ['AI Strategy', 'Product Management', 'Data Analytics'],
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
      description: 'Built comprehensive analytics dashboard that enabled data-driven decisions, increasing conversion rates by 35% and improved user insights.',
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
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-orange-600 p-1 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                {/* Roseanna Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content Container */}
                <div className="relative bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-8 h-full min-h-[550px] flex flex-col">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-orange-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>

                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl mb-6 flex items-center justify-center group-hover:from-blue-200 group-hover:to-orange-200 transition-all duration-500">
                    <div className="text-blue-700 group-hover:text-blue-800 transition-colors duration-500">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-900 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-500">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed min-h-[80px] flex items-start">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6 min-h-[60px] flex items-start">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-orange-200 group-hover:text-blue-800 transition-all duration-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <button className="w-full bg-gradient-to-r from-blue-900 to-orange-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-800 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        View Project
                        <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                    </div>
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
          <button className="bg-gradient-to-r from-blue-900 to-orange-600 text-white font-semibold py-3 px-8 rounded-xl hover:from-blue-800 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 