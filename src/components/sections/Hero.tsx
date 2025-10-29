'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Clock, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import DotLottieReact to avoid SSR issues and improve initial load
const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then(mod => mod.DotLottieReact), 
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 rounded-2xl animate-pulse" />
      </div>
    )
  }
);

// Hero Lottie Animation Component - Lazy loaded when in viewport
const HeroLottieAnimation = () => {
  const [isInView, setIsInView] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center">
      {isInView ? (
        <DotLottieReact
          src="https://lottie.host/68aefee0-3489-4686-9e7f-4da2b41e0bb7/g7BpKVNEgI.json"
          loop
          autoplay
          style={{ width: '100%', height: '100%', maxWidth: '600px' }}
        />
      ) : (
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 rounded-2xl animate-pulse" />
      )}
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-accent-purple via-accent-blue to-purple-600">
      {/* Premium Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Circular Shapes */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-[32rem] h-[32rem] bg-purple-400/30 rounded-full blur-3xl"></div>
        
        {/* Additional floating shapes */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        
        {/* Mesh Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
            `
          }}
        ></div>
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
              <Badge variant="default" size="md" className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                <Star className="w-4 h-4 fill-current" />
                <span>Trusted by 50+ Businesses Across India</span>
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg"
            >
              Transform your business with{' '}
              <span className="text-white">
                Paraliya Web Solution - PWS
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
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
              <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-3 shadow-lg">
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
                <span className="text-base font-medium text-white">
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
                    className="font-semibold text-white"
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
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-white/90"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>2-Week Average Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>100% Client Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>4.8★ Average Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full flex items-center justify-center"
          >
            <div className="w-full max-w-lg mx-auto">
              {/* Lottie Animation Container */}
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
                <HeroLottieAnimation />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Bar Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-white/20"
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
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/90">{stat.label}</div>
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
