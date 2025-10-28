'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-accent-purple via-accent-blue to-purple-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Grow Your Business Online?
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and create something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-accent-purple hover:bg-gray-50 hover:shadow-xl w-full sm:w-auto"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            <a
              href="tel:+919898463251"
              className="inline-flex items-center text-white hover:text-white/80 font-semibold text-lg transition-colors duration-200 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </a>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>No Hidden Costs</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Quick Response</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
