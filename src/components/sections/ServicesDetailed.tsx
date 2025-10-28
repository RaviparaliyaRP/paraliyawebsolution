'use client';

import { motion } from 'framer-motion';
import { Monitor, ShoppingCart, Code, Check, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const ServicesDetailed = () => {
  const services = [
    {
      id: 'business',
      icon: Monitor,
      category: 'Business Websites',
      title: 'Professional Business Websites',
      description: 'Perfect for small to medium businesses looking to establish professional online presence. We create websites that not only look great but also drive real business results.',
      price: '₹25,000',
      features: [
        'Up to 10 custom pages',
        'Mobile responsive design',
        'Contact form integration',
        'Google Maps integration',
        'Basic SEO setup',
        'Social media links',
        '1 month free support',
      ],
      idealFor: [
        'Restaurants & Cafes',
        'Consultants & Agencies',
        'Local Service Providers',
        'Professional Services',
      ],
      ctaText: 'Get Started with Business Website',
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      category: 'E-Commerce',
      title: 'E-Commerce Solutions',
      description: 'Complete online store solution to sell your products nationwide. From product listings to secure payments, we handle everything you need to run a successful online business.',
      price: '₹50,000',
      features: [
        'Product catalog management',
        'Shopping cart & checkout',
        'Payment gateway (Razorpay/Stripe)',
        'Order management system',
        'Customer accounts',
        'Inventory tracking',
        'Mobile app-like experience',
        '2 months free support',
      ],
      idealFor: [
        'Retail Stores',
        'Fashion Brands',
        'Handicraft Sellers',
        'Electronics Shops',
      ],
      ctaText: 'Launch Your Online Store',
    },
    {
      id: 'custom',
      icon: Code,
      category: 'Custom Development',
      title: 'Custom Web Applications',
      description: 'Tailored solutions for complex business requirements. We build scalable applications that grow with your business, whether it\'s a booking system, management portal, or SaaS product.',
      price: '₹1,00,000',
      features: [
        'Custom functionality',
        'Database architecture',
        'API development',
        'Admin dashboard',
        'User authentication',
        'Third-party integrations',
        'Cloud deployment',
        '3 months free support',
      ],
      idealFor: [
        'SaaS Products',
        'Booking Systems',
        'Management Portals',
        'Industry-specific Tools',
      ],
      ctaText: 'Discuss Your Custom Project',
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
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
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive web development solutions designed to help your business thrive online. 
            From simple websites to complex applications, we've got you covered.
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="mb-6">
                    <Badge variant="default" size="md" className="mb-4">
                      {service.category}
                    </Badge>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="inline-flex items-center bg-gradient-to-r from-accent-purple to-accent-blue text-white px-6 py-3 rounded-lg">
                      <span className="text-lg font-semibold">Starting from {service.price}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-display font-bold text-gray-900 mb-4">
                      What's Included
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-8">
                    <h4 className="text-xl font-display font-bold text-gray-900 mb-4">
                      Ideal For
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.idealFor.map((item) => (
                        <Badge key={item} variant="secondary" size="sm">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href="/contact">
                    <Button size="lg" className="group">
                      {service.ctaText}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </div>

                {/* Visual */}
                <div className={!isEven ? 'lg:col-start-1' : ''}>
                  <Card variant="elevated" className="p-8 lg:p-12">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-accent-purple to-accent-blue rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-xl font-display font-bold text-gray-900 mb-4">
                        {service.category}
                      </h4>
                      <div className="space-y-4 text-left">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">Starting Price</div>
                          <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-2">Key Features</div>
                          <div className="space-y-1">
                            {service.features.slice(0, 3).map((feature) => (
                              <div key={feature} className="flex items-center space-x-2 text-sm text-gray-700">
                                <div className="w-1.5 h-1.5 bg-accent-purple rounded-full"></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                            {service.features.length > 3 && (
                              <div className="text-sm text-gray-500 mt-2">
                                +{service.features.length - 3} more features
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
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
          className="text-center mt-20 pt-16 border-t border-gray-200"
        >
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-4">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and find the perfect solution for your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDetailed;
