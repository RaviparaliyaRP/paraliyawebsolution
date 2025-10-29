'use client';

import { motion } from 'framer-motion';
import { CheckSquare, Search, Calculator, Download } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const FreeResources = () => {
  const resources = [
    {
      icon: CheckSquare,
      iconColor: 'text-blue-500',
      badge: 'FREE DOWNLOAD',
      title: 'Website Launch Checklist',
      description: 'Complete step-by-step checklist to ensure your website launches successfully.',
      features: [
        'Pre-launch checklist',
        'Technical setup guide',
        'Post-launch actions',
      ],
      fileInfo: 'PDF • 5 pages',
      downloadLink: '/downloads/Paraliya-Website-Launch-Checklist.pdf',
    },
    {
      icon: Search,
      iconColor: 'text-green-500',
      badge: 'FREE DOWNLOAD',
      title: 'SEO Starter Guide',
      description: 'Learn how to rank higher on Google with this beginner-friendly SEO guide.',
      features: [
        'Keyword research tips',
        'On-page optimization',
        'Local SEO tactics',
      ],
      fileInfo: 'PDF • 8 pages',
      downloadLink: '/downloads/Paraliya-SEO-Starter-Guide.pdf',
    },
    {
      icon: Calculator,
      iconColor: 'text-purple-500',
      badge: 'FREE DOWNLOAD',
      title: 'Website Cost Guide',
      description: 'Transparent pricing breakdown. Know what to expect before you invest.',
      features: [
        'Service-wise pricing',
        'Add-ons cost breakdown',
        'Hidden costs revealed',
      ],
      fileInfo: 'PDF • 4 pages',
      downloadLink: '/downloads/Paraliya-Website-Cost-Guide.pdf',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-accent-blue uppercase tracking-wider mb-2">
            FREE RESOURCES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Download Our Free Guides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert insights to help you make informed decisions
          </p>
        </motion.div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  variant="elevated"
                  hover
                  className="h-full flex flex-col bg-white rounded-xl shadow-lg p-6"
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className={`w-12 h-12 ${resource.iconColor}`} />
                  </div>

                  {/* Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      {resource.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 flex-grow">
                    {resource.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {resource.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* File Info */}
                  <p className="text-sm text-gray-500 mb-4">{resource.fileInfo}</p>

                  {/* Download Button */}
                  <a
                    href={resource.downloadLink}
                    download
                    className="block w-full"
                  >
                    <Button
                      variant="primary"
                      size="large"
                      className="w-full justify-center focus:outline-none"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Free
                    </Button>
                  </a>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
