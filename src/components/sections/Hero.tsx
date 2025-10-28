'use client';

import { motion } from 'framer-motion';
import { Star, CheckCircle, Clock, Heart } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';

const Hero = () => {
  const trustStats = [
    {
      icon: CheckCircle,
      number: '50+',
      label: 'Projects Completed',
    },
    {
      icon: Star,
      number: '4.8★',
      label: 'Average Rating',
    },
    {
      icon: Clock,
      number: '2 Weeks',
      label: 'Average Delivery',
    },
    {
      icon: Heart,
      number: '100%',
      label: 'Client Satisfaction',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Badge variant="default" size="md" className="inline-flex items-center space-x-2">
                <Star className="w-4 h-4 fill-current" />
                <span>Trusted by 50+ Businesses Across India</span>
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight"
            >
              Transform Your Business with{' '}
              <span className="text-gradient">Custom Web Solutions</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              We build fast, modern websites that turn visitors into customers. 
              Professional web development services in Ahmedabad.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Our Work
                </Button>
              </Link>
            </motion.div>

            {/* Live Project Counter Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-5 py-3 shadow-sm">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                ></motion.div>
                <span className="text-base font-medium text-gray-700">
                  Currently working on{' '}
                  <motion.span
                    key="counter"
                    animate={{ 
                      opacity: [1, 0.7, 1] 
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="font-semibold text-accent-purple"
                  >
                    3
                  </motion.span>
                  {' '}active projects
                </span>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>2-Week Average Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>100% Client Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>4.8★ Average Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Visual - Abstract Gradient Shape */}
              <div className="relative w-full h-96 lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple via-accent-blue to-purple-600 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue via-accent-purple to-blue-600 rounded-3xl transform -rotate-6 opacity-30"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-accent-purple to-accent-blue rounded-3xl flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="w-28 h-28 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm p-4">
                      <Image
                        src="/images/pws/pws-logo.png"
                        alt="Paraliya Web Solution Logo"
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Modern Web Solutions</h3>
                    <p className="text-white/80">Built for Performance & Growth</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center"
              >
                <Star className="w-8 h-8 text-yellow-500 fill-current" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center"
              >
                <CheckCircle className="w-10 h-10 text-green-500" />
              </motion.div>

              {/* Team Photos as Floating Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-8 w-16 h-16 bg-white rounded-full shadow-lg p-1"
              >
                <Image
                  src="/images/team/ravi.jpg"
                  alt="Ravi Paraliya"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-3/4 -right-8 w-16 h-16 bg-white rounded-full shadow-lg p-1"
              >
                <Image
                  src="/images/team/shreekant.jpg"
                  alt="Shreekant Paraliya"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Bar Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <Icon className="w-8 h-8 text-accent-purple" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
