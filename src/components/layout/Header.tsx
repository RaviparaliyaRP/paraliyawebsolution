'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Get Quote', href: '/get-quote' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 relative overflow-hidden ${
        isScrolled
          ? 'bg-gradient-to-r from-accent-purple via-accent-blue to-purple-600 shadow-2xl'
          : 'bg-gradient-to-r from-accent-purple via-accent-blue to-purple-600/95 backdrop-blur-sm'
      }`}
    >
      {/* Premium Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Circular Shapes */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        
        {/* Mesh Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
            `
          }}
        ></div>
      </div>

      {/* Content with relative z-index */}
      <div className="relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-14 h-14 lg:w-16 lg:h-16">
              <Image
                src="/images/pws/pws-logo.png"
                alt="Paraliya Web Solution Logo"
                width={64}
                height={64}
                priority
                fetchPriority="high"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg lg:text-xl font-display font-bold text-white drop-shadow-sm">
                Paraliya Web Solution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white font-medium transition-colors duration-200 relative group focus:outline-none"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919898463251"
              className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-200 focus:outline-none"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 9898463251</span>
            </a>
            <Link
              href="/contact"
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:text-white/80 hover:bg-white/10 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-br from-accent-purple/95 to-accent-blue/95 backdrop-blur-md border-t border-white/20 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-white hover:text-white/80 font-medium py-2 transition-colors duration-200 focus:outline-none"
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-white/20 space-y-3">
                <a
                  href="tel:+919898463251"
                  className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors duration-200 py-2 focus:outline-none"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+91 9898463251</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-white/30 hover:shadow-xl transition-all duration-300 focus:outline-none"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
