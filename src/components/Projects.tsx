import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, ExternalLink, Github, Zap, Brain, Waves } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    
    {
      title: "AUV Docking Classification",
      description: "Training CNN models on sonar image data to identify dock orientation in underwater environments for autonomous navigation systems.",
      tech: ["Python", "CNN", "Computer Vision", "Sonar Data"],
      icon: <Waves className="w-6 h-6" />,
      status: "Completed",
      color: "from-green-500 to-teal-600"
    },
    {
      title: " TilesShowroom Website",
      description: "Developed a user Friendly website , To choose and Select the home tiles with various categories and filters.",
      tech: ["React", "JavaScripyt", "Tailwind CSS","AI Integration"],
      icon: <Zap className="w-6 h-6" />,
      status: "Ongoing",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "CNN-based Image  Classification on Outfit Selection",
      description: "Advanced deep learning model for classifying underwater objects using sonar imagery with high accuracy and real-time processing capabilities.",
      tech: ["TensorFlow", "CNN", "Image Processing"],
      icon: <Brain className="w-6 h-6" />,
      status: "Ongoing",
      color: "from-orange-500 to-red-600"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Ongoing':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Planned':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Exploring the intersection of AI, machine learning, and real-world applications
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(211, 47, 47, 0.15)"
              }}
              className="bg-dark-card p-6 rounded-xl border border-dark-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/20 p-3 rounded-full text-primary group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="bg-dark-bg text-gray-300 px-3 py-1 rounded-full text-sm border border-dark-border group-hover:border-primary/30 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">Code</span>
                </motion.button>
                
                {project.status === 'Completed' && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Demo</span>
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;