import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Target, Users, Award, Zap } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: "3rd Place – Sparktank Hackathon (2025)",
      description: "Developed “BharatBox,” an IoT-based machine monitoring solution — won ₹20,000 prize.",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "IASc–INSA–NASI Research Fellow",
      description: "Selected among top 1% nationwide for research internship at CSIR–CMERI. Project on AUV Docking Classification Using Sonar Image Data.",
      color: "from-blue-400 to-purple-500",
      highlight: true
    },
    {
      title: "Top 3 – 'Samukuth' Coding Competition (ANITS)",
      description: "Secured Top 3 position in the Samukuth coding competition held at ANITS.",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-400 to-teal-500"
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

  return (
    <section id="achievements" className="py-20 bg-dark-bg">
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
            <span className="gradient-text">Achievements</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Recognition and milestones in my journey of learning and innovation
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={`${achievement.title}-${index}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(211, 47, 47, 0.15)"
              }}
              className={`relative bg-dark-card p-6 rounded-xl border border-dark-border hover:border-primary/50 transition-all duration-300 group overflow-hidden ${
                achievement.highlight ? 'ring-2 ring-primary/30' : ''
              }`}
            >
              {achievement.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  FEATURED
                </div>
              )}
              
              <div className="flex items-start space-x-4 mb-4">
                <div className={`bg-gradient-to-r ${achievement.color} p-3 rounded-full text-white group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                {achievement.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
              
              {/* Decorative gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "9.1+", label: "CGPA" },
            { number: "5+", label: "Projects" },
            { number: "4+", label: "Certifications" },
            { number: "1", label: "Research Fellowship" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;