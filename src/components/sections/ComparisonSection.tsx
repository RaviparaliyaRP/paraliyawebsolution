'use client';

import { motion } from 'framer-motion';
import { Users, MessageCircle, Target, MapPin, AlertTriangle, Check } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: 'Response Time',
      others: '24-48 hours',
      paraliya: 'Within 4 hours',
    },
    {
      feature: 'Pricing',
      others: 'Hidden costs, unclear',
      paraliya: 'Transparent, upfront',
    },
    {
      feature: 'Timeline',
      others: 'Often delayed',
      paraliya: '2-6 weeks guaranteed',
    },
    {
      feature: 'Post-Launch Support',
      others: 'Extra charges',
      paraliya: 'Free for 1-3 months',
    },
    {
      feature: 'Communication',
      others: 'Email only',
      paraliya: 'Phone/WhatsApp/Email',
    },
    {
      feature: 'Revisions',
      others: 'Limited (2-3)',
      paraliya: 'Unlimited till satisfied',
    },
    {
      feature: 'Local Presence',
      others: 'Remote/outsourced',
      paraliya: 'Ahmedabad-based',
    },
    {
      feature: 'Technology',
      others: 'Outdated templates',
      paraliya: 'Modern frameworks',
    },
    {
      feature: 'Payment Terms',
      others: '100% upfront',
      paraliya: '50% advance, flexible',
    },
    {
      feature: 'Client Portal',
      others: 'No tracking',
      paraliya: 'Live project updates',
    },
  ];

  const differentiators = [
    {
      icon: Users,
      color: 'text-blue-500',
      title: 'Personal Touch',
      description: "We're not a faceless agency. You work directly with founders Ravi and Shreekant. Your project isn't outsourced to juniors.",
    },
    {
      icon: MessageCircle,
      color: 'text-green-500',
      title: 'Real-Time Communication',
      description: "WhatsApp, phone, email - reach us however you prefer. No waiting days for responses.",
    },
    {
      icon: Target,
      color: 'text-purple-500',
      title: 'Result-Focused',
      description: "We don't just build websites, we build assets that drive business growth. Your success = our success.",
    },
    {
      icon: MapPin,
      color: 'text-orange-500',
      title: 'Local Advantage',
      description: "Based in Ahmedabad. Need a face-to-face meeting? We're here. Support a local business while getting world-class work.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white shadow-sm">
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
            Why Choose Paraliya Over Other Agencies?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            An honest comparison to help you make the right decision
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left font-bold text-gray-900 border-b-2 border-gray-200">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900 border-b-2 border-gray-200">
                    Other Agencies
                  </th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900 border-b-2 border-gray-200 bg-blue-50">
                    Paraliya Web Solution
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900 border-b border-gray-200">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-gray-600 border-b border-gray-200">
                      {row.others}
                    </td>
                    <td className="px-6 py-4 text-gray-900 border-b border-gray-200 bg-blue-50">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{row.paraliya}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View - Cards */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((row) => (
              <Card key={row.feature} variant="elevated" className="p-4">
                <h4 className="font-bold text-gray-900 mb-3">{row.feature}</h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-500">Other Agencies:</p>
                    <p className="text-gray-700">{row.others}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Paraliya Web Solution:</p>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <p className="text-gray-900 font-medium">{row.paraliya}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* What Makes Us Different */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            What Makes Us Different?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card variant="elevated" hover className="p-6 h-full">
                    <Icon className={`w-8 h-8 ${item.color} mb-4`} />
                    <h4 className="text-xl font-display font-bold text-gray-900 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Honest Disclaimer Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="border-2 border-orange-400 bg-yellow-50 rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900">
                We're NOT for everyone
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Not Right Fit */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4">
                  We might NOT be the right fit if:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-gray-700">
                      You need a website in 3-4 days (we prioritize quality)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-gray-700">
                      You want the absolute cheapest option (we're affordable, not cheapest)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span className="text-gray-700">
                      You need 24/7 support (we work Mon-Sat, 10 AM-7 PM)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right Fit */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4">
                  We ARE the right fit if:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">
                      You value quality and reliability
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">
                      You want transparent, honest communication
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">
                      You're building for long-term business growth
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">
                      You want a partner, not just a vendor
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl font-semibold text-gray-900 mb-4">
            Still not sure? Let's talk.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg" className="focus:outline-none">
              Schedule Free Consultation
            </Button>
          </Link>
          <p className="text-sm text-gray-600 mt-3">
            No pressure, just honest advice.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
