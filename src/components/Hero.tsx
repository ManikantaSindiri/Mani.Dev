import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold"
              whileHover={{ scale: 1.02 }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">
                Manikanta Swaroop
              </span>
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 font-medium"
            >
              Aspiring Machine Learning Engineer | AI Explorer | Coder
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Passionate about building intelligent systems and exploring the future of AI.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
             href="/mani_resume.pdf"  // Path to the resume in public folder
             download
             whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(211, 47, 47, 0.5)" }}
             whileTap={{ scale: 0.95 }}
             className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 glow-border"
             >
              <Download size={20} />
              Download Resume
            </motion.a>

            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
            >
              View My Projects
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6 pt-8"
          >
            <motion.a
              href="mailto:manikantaswaroopsindiri@gmail.com?subject=Hello%20Manikanta&body=Hi%20Manikanta,%0D%0A%0D%0AI%20would%20like%20to%20connect%20with%20you."
              whileHover={{ scale: 1.2, color: "#D32F2F" }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-primary transition-colors duration-200"
              title="Send Email"
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sindiri-manikanta-swaroop-504284301"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#0077B5" }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              title="Connect on LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/ManikantaSindiri"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#ffffff" }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-white transition-colors duration-200"
              title="View GitHub Profile"
            >
              <Github size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-20"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-6 h-6 bg-primary rounded-full opacity-20"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-20 w-3 h-3 bg-primary rounded-full opacity-20"
      />
    </section>
  );
};

export default Hero;