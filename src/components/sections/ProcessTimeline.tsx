'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Palette, Code, Rocket } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const ProcessTimeline = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Discovery',
      description: 'We understand your business goals, target audience, and project requirements through detailed consultation.',
      duration: '1-2 Days',
    },
    {
      number: '02',
      icon: Palette,
      title: 'Design',
      description: 'Our team creates modern, user-friendly designs with your brand identity in mind. You\'ll see mockups before development starts.',
      duration: '3-5 Days',
    },
    {
      number: '03',
      icon: Code,
      title: 'Development',
      description: 'Clean, efficient code brings your vision to life with latest technologies. Regular updates keep you in the loop.',
      duration: '7-10 Days',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We ensure smooth deployment and provide ongoing maintenance support. Your success is our priority.',
      duration: 'Ongoing',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, transparent process from idea to launch
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <Card variant="elevated" className="p-8 text-center relative z-10 bg-white">
                    {/* Step Number */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-blue rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-6 mt-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-accent-purple" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Duration */}
                    <Badge variant="secondary" size="sm">
                      {step.duration}
                    </Badge>
                  </Card>

                  {/* Mobile Timeline Connector */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8 mb-8">
                      <div className="w-0.5 h-8 bg-gray-300"></div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Ready to start your project? Let's discuss your requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-accent-purple to-accent-blue text-white px-8 py-4 rounded-lg font-semibold hover:shadow-brand-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
