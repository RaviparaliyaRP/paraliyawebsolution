'use client';

import { motion } from 'framer-motion';
import { Monitor, ShoppingCart, Code, Check, ArrowRight, Clock } from 'lucide-react';
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
      timeline: '2-3 Weeks',
      timelinePhases: [
        { name: 'Week 1: Discovery & Design', progress: 60 },
        { name: 'Week 2: Development', progress: 100 },
        { name: 'Week 3: Testing & Launch', progress: 40 },
      ],
      deliveryDays: '14-21 days',
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
      timeline: '4-6 Weeks',
      timelinePhases: [
        { name: 'Week 1-2: Planning & Design', progress: 60 },
        { name: 'Week 3-4: Development', progress: 100 },
        { name: 'Week 5-6: Testing & Integration', progress: 60 },
      ],
      deliveryDays: '28-42 days',
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
      timeline: '6-12 Weeks',
      timelinePhases: [
        { name: 'Week 1-2: Requirements & Design', progress: 30 },
        { name: 'Week 3-8: Development', progress: 100 },
        { name: 'Week 9-12: Testing & Deployment', progress: 60 },
      ],
      deliveryDays: '42-84 days',
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
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-r from-accent-purple via-accent-blue to-purple-600 overflow-hidden">
        {/* Premium Background Patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Circular Shapes */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-[32rem] h-[32rem] bg-purple-400/30 rounded-full blur-3xl"></div>
          
          {/* Additional floating shapes */}
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
          
          {/* Mesh Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
              `
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 drop-shadow-lg"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/90 max-w-3xl mx-auto"
            >
              Comprehensive web development solutions designed to help your business thrive online. 
              From simple websites to complex applications, we've got you covered.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            const bgClass = index === 0 ? 'bg-white' : index === 1 ? 'bg-blue-50' : 'bg-white';
            
            return (
              <section key={service.id} id={service.id} className={`py-20 lg:py-24 ${bgClass}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
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

                  {/* Timeline Estimator */}
                  <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Clock className="w-8 h-8 text-accent-purple" />
                      <h4 className="text-xl font-display font-bold text-gray-900">
                        Estimated Timeline: {service.timeline}
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {service.timelinePhases.map((phase, idx) => (
                        <div key={idx}>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-semibold text-gray-900">{phase.name}</p>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${phase.progress}%` }}
                              transition={{ duration: 0.8, delay: idx * 0.2 }}
                              viewport={{ once: true }}
                              className="h-2 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 italic mt-4">
                      Typical delivery: {service.deliveryDays}
                    </p>
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
                </div>
              </section>
            );
          })}

      {/* Bottom CTA */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and find the perfect solution for your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group bg-white text-blue-600 hover:bg-gray-50">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDetailed;
