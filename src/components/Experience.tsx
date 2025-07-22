import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <section id="experience" className="py-20 bg-dark-surface">
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
            <span className="gradient-text">Experience</span>
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(211, 47, 47, 0.1)"
            }}
            className="bg-dark-card p-8 rounded-xl border border-dark-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 bg-primary/20 p-2 rounded-full">
                <img
                  src="./cmerilogo.png"
                  alt="CMERI Logo"
                  width ='200'
                  className="w-12 h-12 object-contain rounded-full"
                 />
                </div>
              
              <div className="flex-grow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Summer Research Intern
                    </h3>
                    <p className="text-primary font-semibold text-lg mb-2">
                      CMERI–CSIR
                    </p>
                    <div className="flex items-center text-gray-400 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>IASc-INSA-NASI Fellowship</span>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 w-fit"
                  >
                    <span>Research Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Autonomous Underwater Docking Using Sonar-Based CNN Classification
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Developed ML models to predict Autonomous Underwater Vehicle (AUV) docking 
                    using Python and real-world sonar datasets. Focused on deep learning accuracy 
                    and navigational prediction to enhance underwater vehicle autonomy.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Machine Learning', 'Deep Learning', 'Sonar Data', 'Computer Vision', 'Research'].map((tech) => (
                    <span 
                      key={tech}
                      className="bg-dark-bg text-gray-300 px-3 py-1 rounded-full text-sm border border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;