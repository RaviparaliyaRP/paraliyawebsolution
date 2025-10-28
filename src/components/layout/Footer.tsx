import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import TrustBadges from '@/components/sections/TrustBadges';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About Us', href: '/about' },
    { name: 'Get Instant Quote', href: '/get-quote' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Business Websites', href: '/services#business' },
    { name: 'E-Commerce', href: '/services#ecommerce' },
    { name: 'Custom Development', href: '/services#custom' },
    { name: 'Website Maintenance', href: '/services#maintenance' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/17U7tqwCG6/',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/paraliyawebsolution?igsh=MTZpbnl2aGZ2bjJuZQ==',
      icon: Instagram,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/raviparaliyarp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: Linkedin,
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/RaviParaliya14?t=NIKmcQz62qa_SrSkOfm3bA&s=09',
      icon: Twitter,
    },
  ];

  return (
    <>
      <TrustBadges />
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-20 h-20">
                <Image
                  src="/images/pws/footer-logo.png"
                  alt="Paraliya Web Solution Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-display font-bold">
                Paraliya Web Solution
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Building digital solutions since 2022. We help businesses thrive online with affordable, high-quality web solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent-purple transition-colors duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent-purple mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:paraliyaravi80@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  paraliyaravi80@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent-purple mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919898463251"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  +91 9898463251
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-purple mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Ahmedabad, Gujarat, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Paraliya Web Solution. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
