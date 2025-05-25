
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/10 via-electric-cyan/5 to-warm-yellow/10">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-royal-blue/20 rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              animate={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-royal-blue via-electric-cyan to-royal-blue bg-clip-text text-transparent">
              Global Education.
            </span>
            <br />
            <span className="text-gray-800">Reimagined.</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Empowering teachers, students, and institutions worldwide through premium consulting, scholarships, and transformative training programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={400}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-royal-blue to-electric-cyan text-white px-12 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-royal-blue/25 transition-all duration-300 animate-pulse-glow"
              >
                Get Started Today
              </motion.button>
            </Tilt>
          </motion.div>

          
          <motion.div
            className="flex justify-center space-x-12 pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              { number: "30+", label: "Countries Served" },
              { number: "10K+", label: "Students Helped" },
              { number: "500+", label: "Institutions" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-royal-blue">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-electric-cyan to-royal-blue rounded-full opacity-20"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-warm-yellow to-electric-cyan rounded-full opacity-20"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
};
