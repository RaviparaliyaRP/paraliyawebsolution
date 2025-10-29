'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Card from '@/components/ui/Card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Paraliya Web Solution delivered exactly what we needed. The website is fast, looks professional, and our customers love it. Worth every rupee!",
      author: "Rajesh Patel",
      position: "Owner",
      company: "Patel Trading Company",
      rating: 5,
      avatar: "RP",
    },
    {
      quote: "Professional team, clear communication, and delivered on time. Our online sales have doubled since the new website launch.",
      author: "Priya Sharma",
      position: "CEO",
      company: "Sharma Textiles",
      rating: 5,
      avatar: "PS",
    },
    {
      quote: "Best decision for our business. They understood our requirements and created a website that truly represents our brand.",
      author: "Amit Desai",
      position: "Founder",
      company: "Desai Consultancy",
      rating: 5,
      avatar: "AD",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
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
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" hover className="p-8 h-full">
                <div className="flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-accent-purple/30" />
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed flex-1">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-accent-blue rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-50 px-6 py-3 rounded-full">
            <div className="flex items-center">
              {renderStars(5)}
            </div>
            <span className="text-gray-600 font-medium">
              4.8/5 from 50+ happy clients
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
