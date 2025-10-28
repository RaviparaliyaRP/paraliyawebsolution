'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Card from '@/components/ui/Card';

const CredentialsSection = () => {
  const certifications = [
    {
      name: 'Meta Front-End Developer',
      platform: 'Coursera',
      status: 'Certified',
    },
    {
      name: 'Full-Stack Web Development',
      platform: 'Udemy',
      status: 'Certified',
    },
    {
      name: 'React - The Complete Guide',
      platform: 'Udemy',
      status: 'Certified',
    },
    {
      name: 'Node.js Certification',
      platform: 'freeCodeCamp',
      status: 'Certified',
    },
    {
      name: 'Modern JavaScript (ES6+)',
      platform: 'Udemy',
      status: 'Certified',
    },
  ];

  const awards = [
    {
      name: 'Top Rated Agency',
      rating: '⭐⭐⭐⭐⭐',
      platform: 'Fiverr',
      status: 'Level 2 Seller',
    },
    {
      name: '5-Star Rated Developer',
      platform: 'Upwork',
      status: '20+ Projects',
    },
    {
      name: '100% Job Success Score',
      platform: 'Upwork',
      status: 'Active',
    },
    {
      name: 'Rising Talent Badge',
      platform: 'Freelancer',
      status: '2024',
    },
    {
      name: "Client's Choice Award",
      platform: 'Based on Reviews',
      status: '2024',
    },
  ];

  const memberships = [
    {
      name: 'Gujarat IT Association',
      status: 'Active Member',
      period: 'Since 2022',
    },
    {
      name: 'Ahmedabad Web Developers Network',
      status: 'Contributing Member',
      period: 'Since 2023',
    },
    {
      name: 'Indian Web Design Community',
      platform: 'LinkedIn Group',
      period: '10,000+ Members',
    },
    {
      name: 'Freelancer India Network',
      status: 'Verified Member',
      period: 'Since 2022',
    },
    {
      name: 'Startup Gujarat Registered',
      status: 'Recognized Startup',
      period: '2023',
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
            Our Credentials & Recognition
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building trust through certified expertise and industry recognition
          </p>
        </motion.div>

        {/* Content Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: Professional Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" className="p-6 h-full">
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>

                {/* Heading */}
                <h3 className="text-xl font-display font-bold text-gray-900 mb-6 text-center">
                  Professional Certifications
                </h3>

                {/* Certifications List */}
                <div className="space-y-4 mb-6 flex-1">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm">
                          {cert.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {cert.platform}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-accent-purple hover:text-accent-blue font-semibold text-sm transition-colors duration-200 group"
                  >
                    View All Certificates
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Column 2: Awards & Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" className="p-6 h-full">
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>

                {/* Heading */}
                <h3 className="text-xl font-display font-bold text-gray-900 mb-6 text-center">
                  Awards & Recognition
                </h3>

                {/* Awards List */}
                <div className="space-y-4 mb-6 flex-1">
                  {awards.map((award, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <p className="font-semibold text-gray-900 text-sm">
                          {award.name}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500 ml-6">
                        <span>{award.platform}</span>
                        <span>{award.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-accent-purple hover:text-accent-blue font-semibold text-sm transition-colors duration-200 group"
                  >
                    View Profile
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Column 3: Industry Memberships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" className="p-6 h-full">
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </div>

                {/* Heading */}
                <h3 className="text-xl font-display font-bold text-gray-900 mb-6 text-center">
                  Industry Memberships
                </h3>

                {/* Memberships List */}
                <div className="space-y-4 mb-6 flex-1">
                  {memberships.map((membership, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm">
                          {membership.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {membership.status} • {membership.period}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-accent-purple hover:text-accent-blue font-semibold text-sm transition-colors duration-200 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
