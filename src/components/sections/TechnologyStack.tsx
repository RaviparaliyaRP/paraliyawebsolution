'use client';

import { motion } from 'framer-motion';
import { Code, Server, Wrench, Plug, CheckCircle } from 'lucide-react';
import Card from '@/components/ui/Card';

const TechnologyStack = () => {
  const categories = [
    {
      icon: Code,
      iconColor: 'text-blue-500',
      name: 'Frontend',
      technologies: [
        'React 18',
        'Next.js 14',
        'Tailwind CSS 3.4',
        'TypeScript 5.3',
        'HTML5 / CSS3',
      ],
    },
    {
      icon: Server,
      iconColor: 'text-green-500',
      name: 'Backend',
      technologies: [
        'Node.js 20',
        'Express.js 4.18',
        'Python 3.12',
        'MongoDB 7.0',
        'PostgreSQL 16',
      ],
    },
    {
      icon: Wrench,
      iconColor: 'text-orange-500',
      name: 'Tools & Platforms',
      technologies: [
        'Git & GitHub',
        'VS Code',
        'Figma',
        'Vercel / Netlify',
        'Cloudflare',
      ],
    },
    {
      icon: Plug,
      iconColor: 'text-purple-500',
      name: 'Integrations',
      technologies: [
        'Razorpay / Stripe',
        'Google Analytics',
        'WhatsApp Business',
        'SendGrid / Mailgun',
        'RESTful APIs',
      ],
    },
    {
      icon: CheckCircle,
      iconColor: 'text-red-500',
      name: 'Best Practices',
      technologies: [
        'Responsive Design',
        'SEO Optimization',
        'Performance Tuning',
        'Security Standards',
        'Accessibility (WCAG)',
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Technologies We Use
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building with modern, industry-standard tools and frameworks
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  variant="elevated"
                  hover
                  className="h-full p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon */}
                  <Icon className={`w-8 h-8 md:w-10 md:h-10 ${category.iconColor} mb-4`} />

                  {/* Category Name */}
                  <h3 className="font-display font-bold text-gray-900 text-base md:text-lg mb-3">
                    {category.name}
                  </h3>

                  {/* Technologies List */}
                  <ul className="space-y-1">
                    {category.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="text-xs md:text-sm text-gray-600 leading-relaxed flex items-start"
                      >
                        <span className="text-gray-400 mr-2 mt-1">•</span>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-12"
        >
          <p className="text-sm md:text-base text-gray-600 italic">
            We stay updated with the latest technologies to deliver modern, efficient solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;
