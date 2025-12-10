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
      title: "NPTEL Artificial Intelligence",
      issuer: "IIT Madras",
      date: "2025",
      description: "Comprehensive understanding of AI concepts, algorithms, and applications.",
      verified: true,
      href: "public\Mani_npterl certifcate.pdf"
    },
    {
      title: "IASc–INSA–NASI Research Fellow",
      issuer: "Indian Academy of Sciences",
      date: "2025",
      description: "Based on the project 'AUV Docking Classification Using Sonar Image Data'.",
      verified: true
      ,
      href: "public\insa_certificate.jpg"
    },
    {
      title: "Sparktank Hackathon (2025)",
      issuer: "VITB",
      date: "2025",
      description: "3rd Place - Developed “BharatBox,” an IoT-based machine monitoring solution (20,000 prize).",
      verified: true,
      href: "public\sparktank _pic.jpg"
    },
    {
      title: "Research Internship on AUV Docking Classification",
      issuer: "CSIR-CMERI",
      date: "2025",
      description: "Selected among top 1% nationwide for research internship at CSIR–CMERI.",
      verified: true,
      href: "public\mani_cmeri_certi (1).pdf"
    },
    
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
              key={`${cert.title}-${index}`}
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
              
              {cert.verified && cert.href && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title}`}
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">View Certificate</span>
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;