import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Bachelor of Technology (Information Technology)",
      institution: "Vishnu Institute of Technology",
      period: "2023 - Present",
      grade: "CGPA: 9.0",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      period: "2021 - 2023",
      grade: "92%",
      icon: <Award className="w-6 h-6" />
    },
    {
      degree: "Secondary School Certificate",
      institution: "Goutham High School",
      period: "2021",
      grade: "CGPA: 10.0",
      icon: <Award className="w-6 h-6" />
    }
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
    <section id="education" className="py-20 bg-dark-bg">
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
            <span className="gradient-text">Education</span>
          </motion.h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative mb-8 last:mb-0"
            >
              <div className="flex items-start space-x-4 bg-dark-card p-6 rounded-xl border border-dark-border hover:border-primary/50 transition-all duration-300">
                <div className="flex-shrink-0 bg-primary/20 p-3 rounded-full text-primary">
                  {edu.icon}
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-400 text-sm">
                    <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {edu.grade}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-8 bg-primary/30"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;