import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: "Python for Everybody",
      issuer: "Youtube",
      date: "2023",
      description: "Comprehensive Python programming course covering data structures, web scraping, and databases.",
      verified: true
    },
    {
      title: "HTML & CSS Web Design",
      issuer: "FreecodeCamp",
      date: "2023",
      description: "Frontend web development fundamentals and responsive design principles.",
      verified: true
    },
    {
      title: "Git & GitHub Basics",
      issuer: "Youtube",
      date: "2024",
      description: "Version control systems, collaborative development, and open source contribution.",
      verified: true
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Youtube",
      date: "In Progress",
      description: "Advanced deep learning concepts, neural networks, and practical implementations.",
      verified: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-dark-surface">
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
            <span className="gradient-text">Certifications</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Continuous learning and skill development in technology and AI
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 15px 30px rgba(211, 47, 47, 0.1)"
              }}
              className="bg-dark-card p-6 rounded-xl border border-dark-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/20 p-3 rounded-full text-primary group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6" />
                </div>
                
                {cert.verified && (
                  <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium border border-green-500/30">
                    Verified
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-primary font-medium mb-2">
                {cert.issuer}
              </p>
              
              <div className="flex items-center text-gray-400 text-sm mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{cert.date}</span>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              {cert.verified && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">View Certificate</span>
                </motion.button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;