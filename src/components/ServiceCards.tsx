
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { BookOpen, Award, Users } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: "School Consulting",
    description: "Expert guidance for educational institutions to enhance their programs and achieve excellence.",
    color: "from-royal-blue to-electric-cyan"
  },
  {
    icon: Award,
    title: "Scholarship Programs",
    description: "Connect students with global scholarship opportunities and funding for their educational journey.",
    color: "from-electric-cyan to-warm-yellow"
  },
  {
    icon: Users,
    title: "Skill-Based Training",
    description: "Professional development programs designed to empower educators and students worldwide.",
    color: "from-warm-yellow to-royal-blue"
  }
];

export const ServiceCards = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to transform education and unlock global opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={400}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold transition-all duration-300`}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
