'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Star } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const PortfolioShowcase = () => {
  const projects = [
    {
      id: 'restaurant-chain',
      title: 'Local Restaurant Chain Website',
      category: 'Restaurant',
      description: 'Modern responsive website with integrated online ordering system for a local restaurant chain.',
      challenge: 'Outdated website with no online ordering system',
      solution: 'Modern responsive website with integrated ordering',
      results: '45% increase in online orders within 2 months',
      techStack: ['React', 'Node.js', 'Stripe Payment', 'MongoDB'],
      image: '/api/placeholder/600/400',
      testimonial: {
        quote: "The new website transformed our business. Online orders increased dramatically!",
        author: "Restaurant Owner",
        rating: 5,
      },
    },
    {
      id: 'fashion-boutique',
      title: 'Fashion Boutique Online Store',
      category: 'E-Commerce',
      description: 'Full e-commerce website with inventory management for a fashion boutique.',
      challenge: 'No online presence, losing customers to competitors',
      solution: 'Full e-commerce website with inventory management',
      results: '₹5L+ revenue in first 3 months',
      techStack: ['Next.js', 'MongoDB', 'Razorpay', 'Tailwind CSS'],
      image: '/api/placeholder/600/400',
      testimonial: {
        quote: "Professional team, delivered exactly what we needed. Sales have doubled!",
        author: "Boutique Owner",
        rating: 5,
      },
    },
    {
      id: 'consulting-firm',
      title: 'Consulting Firm Portfolio',
      category: 'Corporate',
      description: 'Premium portfolio website with case studies for a consulting firm.',
      challenge: 'Needed professional website to attract corporate clients',
      solution: 'Premium portfolio website with case studies',
      results: '3x increase in consultation bookings',
      techStack: ['Next.js', 'Tailwind CSS', 'Sanity CMS', 'Framer Motion'],
      image: '/api/placeholder/600/400',
      testimonial: {
        quote: "Best decision for our business. The website truly represents our brand.",
        author: "Consulting Firm CEO",
        rating: 5,
      },
    },
    {
      id: 'healthcare-clinic',
      title: 'Healthcare Clinic Website',
      category: 'Healthcare',
      description: 'Professional website with appointment booking system for a healthcare clinic.',
      challenge: 'Manual appointment booking causing scheduling conflicts',
      solution: 'Automated booking system with calendar integration',
      results: '60% reduction in scheduling conflicts',
      techStack: ['React', 'Express.js', 'PostgreSQL', 'Calendar API'],
      image: '/api/placeholder/600/400',
      testimonial: {
        quote: "The booking system streamlined our operations significantly.",
        author: "Clinic Manager",
        rating: 5,
      },
    },
    {
      id: 'education-platform',
      title: 'Online Education Platform',
      category: 'Education',
      description: 'Learning management system with video streaming and progress tracking.',
      challenge: 'Needed scalable platform for online courses',
      solution: 'Custom LMS with video streaming and analytics',
      results: '500+ students enrolled in first month',
      techStack: ['Next.js', 'Node.js', 'AWS', 'Video.js'],
      image: '/api/placeholder/600/400',
      testimonial: {
        quote: "The platform exceeded our expectations. Students love the interface!",
        author: "Education Director",
        rating: 5,
      },
    },
    {
      id: 'real-estate',
      title: 'Real Estate Agency Portal',
      category: 'Real Estate',
      description: 'Property listing website with advanced search and filtering capabilities.',
      challenge: 'Outdated property listing system',
      solution: 'Modern portal with advanced search and virtual tours',
      results: '40% increase in property inquiries',
      techStack: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps API'],
      image: '/api/placeholder/600/400',
      testimonial: {
        quote: "Our clients love the new search features. Inquiries have increased significantly.",
        author: "Real Estate Agent",
        rating: 5,
      },
    },
  ];

  const categories = ['All', 'Restaurant', 'E-Commerce', 'Corporate', 'Healthcare', 'Education', 'Real Estate'];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 lg:py-24 bg-white">
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
            Our Recent Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results for real businesses. See how we've helped our clients achieve their goals.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === 'All' ? 'default' : 'secondary'}
              size="md"
              className="cursor-pointer hover:bg-accent-purple hover:text-white transition-colors duration-200"
            >
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" hover className="overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <span className="text-2xl font-bold text-accent-purple">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <Badge variant="default" size="sm">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Challenge, Solution, Results */}
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Challenge:</span>
                      <p className="text-sm text-gray-600">{project.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Solution:</span>
                      <p className="text-sm text-gray-600">{project.solution}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">Results:</span>
                      <p className="text-sm text-green-600 font-medium">{project.results}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      {renderStars(project.testimonial.rating)}
                    </div>
                    <blockquote className="text-sm text-gray-700 italic mb-2">
                      "{project.testimonial.quote}"
                    </blockquote>
                    <cite className="text-xs text-gray-500">
                      — {project.testimonial.author}
                    </cite>
                  </div>

                  {/* CTA */}
                  <button className="w-full flex items-center justify-center text-accent-purple hover:text-accent-blue font-semibold text-sm transition-colors duration-200 group">
                    View Case Study
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">2 Weeks</div>
              <div className="text-gray-600">Average Delivery</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
