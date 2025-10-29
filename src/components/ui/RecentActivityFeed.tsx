'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const RecentActivityFeed = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const messages = [
    {
      icon: '✅',
      text: 'PWS just completed a project for Fashion Boutique',
      time: '2 minutes ago',
    },
    {
      icon: '🎉',
      text: 'New client onboarded from Mumbai',
      time: '1 hour ago',
    },
    {
      icon: '✅',
      text: 'Priya from Ahmedabad requested a quote',
      time: '15 minutes ago',
    },
    {
      icon: '✅',
      text: 'Website delivered to Desai Consultancy',
      time: '3 hours ago',
    },
    {
      icon: '✅',
      text: 'Project launched for Restaurant Chain',
      time: '45 minutes ago',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true);
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 12000); // Show every 12 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Stay visible for 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, currentMessage]);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 0.95 }}
          exit={{ x: -400, opacity: 0 }}
          transition={{ duration: 0 }}
          className="fixed bottom-6 left-6 z-50 md:max-w-xs max-w-[280px]"
        >
          <div className="bg-white rounded-xl shadow-2xl p-4 border border-gray-200 relative">
            {/* Dismiss Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="flex items-start space-x-3">
              <div className="text-2xl">{messages[currentMessage].icon}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 leading-snug">
                  {messages[currentMessage].text}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {messages[currentMessage].time}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RecentActivityFeed;
