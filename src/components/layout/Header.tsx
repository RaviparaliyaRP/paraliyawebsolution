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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2.5 sm:space-x-3 group flex-shrink-0">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0">
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
              <span className="text-base sm:text-lg lg:text-xl font-display font-bold text-gray-900 whitespace-nowrap">
                Paraliya Web Solution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 px-4 xl:px-8 min-w-0">
            <div className="flex items-center space-x-3 xl:space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm xl:text-base text-gray-700 hover:text-accent-purple font-medium transition-colors duration-200 relative group focus:outline-none px-1.5 xl:px-2 py-1 whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-1.5 xl:left-2 right-1.5 xl:right-2 h-0.5 bg-accent-purple scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-center"></span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Desktop CTA Section */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0 min-w-0">
            <a
              href="tel:+919898463251"
              className="hidden xl:flex items-center space-x-2 text-gray-700 hover:text-accent-purple transition-colors duration-200 focus:outline-none group px-2 py-1 flex-shrink-0"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium text-sm whitespace-nowrap">+91 9898463251</span>
            </a>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent-purple to-accent-blue text-white px-3 xl:px-5 2xl:px-6 py-2 rounded-lg font-semibold text-xs xl:text-sm 2xl:text-base hover:shadow-brand-lg transition-all duration-300 transform hover:scale-105 focus:outline-none whitespace-nowrap flex-shrink-0"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-accent-purple hover:bg-gray-100 transition-colors duration-200 focus:outline-none flex-shrink-0 ml-auto"
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
            <div className="px-4 py-6">
              {/* Mobile Navigation Links */}
              <nav className="space-y-1 mb-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-700 hover:text-accent-purple hover:bg-gray-50 font-medium py-3 px-3 rounded-lg transition-all duration-200 focus:outline-none"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              {/* Mobile CTA Section */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a
                  href="tel:+919898463251"
                  className="flex items-center justify-center space-x-2 text-gray-700 hover:text-accent-purple transition-colors duration-200 py-3 px-3 rounded-lg hover:bg-gray-50 focus:outline-none"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
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
