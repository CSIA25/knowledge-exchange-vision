
import React from 'react';
import { motion } from 'framer-motion';
import { Network, Award, Users, BookOpen, Zap } from 'lucide-react';

const features = [
  {
    icon: Network,
    title: "Global Network",
    description: "Connect with leading institutions worldwide"
  },
  {
    icon: Award,
    title: "Top Scholarships",
    description: "Access to exclusive funding opportunities"
  },
  {
    icon: Users,
    title: "Teacher Empowerment",
    description: "Professional development that transforms careers"
  },
  {
    icon: BookOpen,
    title: "Expert Consulting",
    description: "World-class guidance from education specialists"
  },
  {
    icon: Zap,
    title: "Rapid Results",
    description: "Fast-track your educational journey"
  }
];

export const WhyKnowledgeExchange = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Knowledge Exchange?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another education platform. We're your partners in transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-royal-blue to-electric-cyan rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-royal-blue to-electric-cyan text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-royal-blue/25 transition-all duration-300"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
