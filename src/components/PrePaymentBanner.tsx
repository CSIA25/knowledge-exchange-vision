
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const PrePaymentBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-royal-blue to-electric-cyan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Access Premium Services with Confidence
          </h2>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Pre-pay and secure your spot in our exclusive programs. Join thousands of satisfied clients worldwide.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            {[
              "Guaranteed Service Quality",
              "Priority Support Access",
              "Exclusive Program Benefits"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-royal-blue px-8 py-4 rounded-full font-bold text-lg flex items-center space-x-2 mx-auto hover:shadow-2xl transition-all duration-300"
          >
            <span>Pre-Pay Now</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
