import { motion } from 'framer-motion';
import Card from '../ui/Card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Product Strategy',
      description: 'Developed comprehensive product roadmaps for AI-powered solutions, resulting in 40% faster time-to-market.',
      image: 'Project Image',
      link: '#',
      gradient: 'from-purple-600 via-pink-600 to-purple-800'
    },
    {
      id: 2,
      title: 'ML Model Integration',
      description: 'Led cross-functional teams to integrate machine learning models into existing products, improving user engagement by 60%.',
      image: 'Project Image',
      link: '#',
      gradient: 'from-slate-600 to-slate-800'
    },
    {
      id: 3,
      title: 'Data Analytics Platform',
      description: 'Built analytics dashboard that enabled data-driven decisions, increasing conversion rates by 35%.',
      image: 'Project Image',
      link: '#',
      gradient: 'from-slate-600 to-slate-800'
    },
    {
      id: 4,
      title: 'User Experience Research',
      description: 'Conducted extensive UX research for AI interfaces, leading to 50% reduction in user onboarding time.',
      image: 'Project Image',
      link: '#',
      gradient: 'from-slate-600 to-slate-800'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                gradient={project.gradient}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 