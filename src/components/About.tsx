import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Users, Lightbulb, Zap } from 'lucide-react';

const About = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const strengths = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Learner & Creative Thinker",
      description: "Quick to adapt and find innovative solutions"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Strong in Python & AI Concepts",
      description: "Solid foundation in programming and machine learning"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration & Innovation",
      description: "Thrives in collaborative environments"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Curious About Robotics & Real-world AI",
      description: "Passionate about practical AI applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-surface">
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
            About <span className="gradient-text">Me</span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            I'm a B.Tech student in Information Technology at Vishnu Institute of Technology. 
            I'm deeply passionate about Artificial Intelligence, machine learning, and real-world 
            problem solving using deep learning. I enjoy building projects, working with data, 
            and constantly learning new things.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(211, 47, 47, 0.2)"
              }}
              className="bg-dark-card p-6 rounded-xl border border-dark-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-primary mb-4">
                {strength.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {strength.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;