import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "C", level: 75 },
        { name: "Java", level: 70 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Technologies",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Supervised Learning", level: 85 },
        { name: "Unsupervised Learning", level: 80 },
        { name: "Deep Neural Networks", level: 75 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "NumPy", level: 80 },
        { name: "Pandas", level: 85 },
        { name: "Matplotlib", level: 75 }
      ],
      color: "from-orange-500 to-red-500"
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="skills" className="py-20 bg-dark-surface">
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
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Proficiency in various technologies and tools for AI/ML development
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(211, 47, 47, 0.1)"
              }}
              className="bg-dark-card p-6 rounded-xl border border-dark-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-full text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-dark-bg rounded-full h-2 overflow-hidden">
                      <motion.div
                        variants={progressVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        custom={skill.level}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-8"
          >
            Additional Technologies
          </motion.h3>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              'TensorFlow', 'Scikit-learn', 'OpenCV', 'Jupyter', 'Linux',
              'Docker', 'REST APIs', 'JSON', 'SQL', 'Data Visualization',
              'Statistical Analysis', 'Research Methodology'
            ].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgba(211, 47, 47, 0.2)',
                  borderColor: 'rgba(211, 47, 47, 0.5)'
                }}
                className="bg-dark-bg text-gray-300 px-4 py-2 rounded-full text-sm border border-dark-border hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;