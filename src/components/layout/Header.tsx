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
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <div className="w-full h-full bg-brand-dark rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-sm lg:text-base">PWS</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg lg:text-xl font-display font-bold text-gray-900">
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
                className="text-gray-700 hover:text-accent-purple font-medium transition-colors duration-200 relative group focus:outline-none"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-purple transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919898463251"
              className="flex items-center space-x-2 text-gray-700 hover:text-accent-purple transition-colors duration-200 focus:outline-none"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 9898463251</span>
            </a>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-brand-lg transition-all duration-300 transform hover:scale-105 focus:outline-none"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-accent-purple hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
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
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-accent-purple font-medium py-2 transition-colors duration-200 focus:outline-none"
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="tel:+919898463251"
                  className="flex items-center space-x-2 text-gray-700 hover:text-accent-purple transition-colors duration-200 py-2 focus:outline-none"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+91 9898463251</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-gradient-to-r from-accent-purple to-accent-blue text-white text-center px-6 py-3 rounded-lg font-semibold hover:shadow-brand-lg transition-all duration-300 focus:outline-none"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
