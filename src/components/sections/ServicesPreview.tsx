'use client';

import { motion } from 'framer-motion';
import { Monitor, ShoppingCart, Code, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';

const ServicesPreview = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Business Websites',
      description: 'Build professional websites that establish your online presence and drive growth. Perfect for small to medium businesses.',
      features: [
        'Responsive Design',
        'SEO Optimized',
        'Fast Loading',
        'Custom Features',
      ],
      price: '₹25,000',
      href: '/services#business',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Launch your online store with secure payment integration and inventory management. Sell nationwide with confidence.',
      features: [
        'Payment Gateway Integration',
        'Product Management',
        'Order Tracking System',
        'Mobile Shopping Experience',
      ],
      price: '₹50,000',
      href: '/services#ecommerce',
    },
    {
      icon: Code,
      title: 'Custom Web Applications',
      description: 'Tailored solutions for your unique business needs with scalable architecture. Built for growth and efficiency.',
      features: [
        'API Integration',
        'Cloud Hosting',
        'Database Design',
        'Admin Dashboards',
      ],
      price: '₹1,00,000',
      href: '/services#custom',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            What We Do Best
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" hover className="p-8 h-full">
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-blue rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-4 text-center">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 text-center leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6 flex-1">
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-accent-purple rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <Badge variant="default" size="lg" className="w-full justify-center">
                        Starting from {service.price}
                      </Badge>
                    </div>

                    {/* CTA */}
                    <Link
                      href={service.href}
                      className="group flex items-center justify-center text-accent-purple hover:text-accent-blue font-semibold transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center text-accent-purple hover:text-accent-blue font-semibold text-lg group transition-colors duration-200"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
