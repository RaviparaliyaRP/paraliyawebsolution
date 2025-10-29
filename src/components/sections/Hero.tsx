'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Clock, Heart } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Hero Lottie Animation Component
const HeroLottieAnimation = () => {
  // OPTION 1: Using a public LottieFiles URL
  // Find free animations at: https://lottiefiles.com/free
  // Search: "web development", "coding", "website builder"
  // Copy the URL from the animation page and paste below:
  const lottieUrl = 'https://lottie.host/embed/8a0d0f5f-5c4a-4e3a-9b8c-7d6e5f4a3b2c/X8QK9YQKqJ.json';
  
  // OPTION 2: Using a local JSON file
  // 1. Download JSON from LottieFiles
  // 2. Save to: /public/lottie/hero-animation.json
  // 3. Uncomment line below and use animationData instead of URL
  
  const [animationData, setAnimationData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Load animation from URL
    fetch(lottieUrl)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load animation');
        return res.json();
      })
      .then(data => {
        setAnimationData(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [lottieUrl]);

  // Loading fallback
  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-32 h-32 bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 rounded-2xl animate-pulse flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-blue rounded-xl"></div>
        </div>
      </div>
    );
  }

  // Error fallback with logo
  if (!animationData) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-full h-full max-w-[600px]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 via-accent-blue/20 to-purple-600/20 rounded-3xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-accent-purple to-accent-blue rounded-2xl mx-auto mb-4 flex items-center justify-center p-4">
                <Image
                  src="/images/pws/pws-logo.png"
                  alt="Paraliya Web Solution"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm font-medium">Modern Web Solutions</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Lottie animation
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%', maxWidth: '600px' }}
      />
    </div>
  );
};

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
                  className="w-5 h-5 bg-green-500 rounded-full"
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

          {/* Right Side - Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex items-center justify-center"
          >
            <div className="w-full max-w-lg mx-auto">
              {/* Lottie Animation Container */}
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
                <HeroLottieAnimation />
              </div>

              {/* Team Photos as Floating Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-4 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg p-1"
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
                className="absolute top-3/4 -right-4 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg p-1"
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
