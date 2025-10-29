'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200'
            : 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* LEFT SIDE: Phone + CTA Button */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              {/* Phone Number */}
              <a
                href="tel:+919898463251"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all duration-300 text-sm group"
              >
                <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-medium whitespace-nowrap">+91 9898463251</span>
              </a>

              {/* Primary CTA Button */}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 transform flex items-center justify-center whitespace-nowrap"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* CENTER: Navigation Links */}
            <nav className="hidden lg:flex items-center justify-center flex-1 px-8">
              <div className="flex items-center gap-8">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative font-medium text-sm tracking-tight transition-all duration-300 flex items-center group ${
                        isActive
                          ? 'text-blue-600 border-b-2 border-blue-600 pb-0.5'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                      {!isActive && (
                        <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* RIGHT SIDE: Company Name + Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group flex-shrink-0"
            >
              <span className="hidden sm:block text-base lg:text-lg font-semibold text-gray-900 whitespace-nowrap tracking-tight">
                Paraliya Web Solution
              </span>
              <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                <Image
                  src="/images/pws/pws-logo.png"
                  alt="Paraliya Web Solution Logo"
                  width={40}
                  height={40}
                  priority
                  fetchPriority="high"
                  className="w-full h-full object-contain transition-transform duration-300"
                />
              </div>
            </Link>

            {/* MOBILE: Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300 flex-shrink-0"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU: Premium Slide-in Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white/95 backdrop-blur-lg shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 group"
                  >
                    <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src="/images/pws/pws-logo.png"
                        alt="PWS Logo"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">PWS</span>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 px-4 py-6">
                  <div className="space-y-1">
                    {navigation.map((item, index) => {
                      const isActive = pathname === item.href;
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-4 py-3 rounded-lg font-medium text-base transition-all duration-300 ${
                              isActive
                                ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                            }`}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                {/* Mobile CTA Section */}
                <div className="p-6 border-t border-gray-200 space-y-4">
                  <motion.a
                    href="tel:+919898463251"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium text-sm">+91 9898463251</span>
                  </motion.a>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.3 }}
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Get Free Consultation
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;