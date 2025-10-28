'use client';

import { Star, CheckCircle, Shield, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustBadges = () => {
  const badges = [
    {
      icon: Star,
      mainText: 'Top Rated Agency',
      subText: '4.8★ Rating',
      color: 'text-yellow-500',
    },
    {
      icon: CheckCircle,
      mainText: 'Verified Business',
      subText: 'Since 2022',
      color: 'text-green-500',
    },
    {
      icon: Shield,
      mainText: 'Secure Payments',
      subText: 'SSL Encrypted',
      color: 'text-blue-500',
    },
    {
      icon: MessageCircle,
      mainText: 'WhatsApp Verified',
      subText: 'Business Account',
      color: 'text-green-600',
    },
  ];

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                    <Icon className={`w-6 h-6 ${badge.color}`} />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                    {badge.mainText}
                  </h4>
                  <p className="text-xs text-gray-600">{badge.subText}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
