
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, TrendingUp } from 'lucide-react';

export const GlobalImpact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <Globe className="w-16 h-16 text-electric-cyan" />
            </motion.div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Global Impact Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Helping thousands across 30+ countries achieve their educational dreams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-royal-blue to-electric-cyan rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Countries Reached</h3>
                <p className="text-gray-300">Active programs across six continents</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-electric-cyan to-warm-yellow rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Success Rate</h3>
                <p className="text-gray-300">95% student satisfaction and achievement</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              {[
                { number: "15K+", label: "Students Trained" },
                { number: "500+", label: "Institutions" },
                { number: "$2M+", label: "Scholarships Secured" },
                { number: "50+", label: "Countries" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-electric-cyan">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-royal-blue/20 to-electric-cyan/20 rounded-2xl overflow-hidden">
              {/* Simulated World Map with Dots */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-60">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-electric-cyan rounded-full"
                      style={{
                        left: `${Math.random() * 90}%`,
                        top: `${Math.random() * 90}%`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold mb-2">Live Global Network</h3>
                <p className="text-gray-300 text-sm">
                  Real-time connections across our international education community
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
