'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Loader2 } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    contactMethod: []
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle text/select inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle checkbox for contact method
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      contactMethod: checked
        ? [...prev.contactMethod, value]
        : prev.contactMethod.filter(method => method !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzs-8WKPOaCmJhbZ497Y4CTm-ndpXvHriwXQfBR5OGf4myVyTvppmfbz27s-BILM7bx/exec';
      
      // Format data for Google Sheets
      const submitData = {
        ...formData,
        contactMethod: formData.contactMethod.join(', ') || 'Email' // Default to email if none selected
      };

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData)
      });

      // Success message
      setStatus({
        type: 'success',
        message: '✅ Thank you! We will contact you within 4 hours during business hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        contactMethod: []
      });

      // Optional: Track conversion with Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submission', {
          event_category: 'Contact',
          event_label: submitData.service
        });
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        type: 'error',
        message: '⚠️ Something went wrong. Please contact us via WhatsApp or call directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'paraliyaravi80@gmail.com',
      href: 'mailto:paraliyaravi80@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9898463251',
      href: 'tel:+919898463251',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 9898463251',
      href: 'https://wa.me/919898463251?text=Hi, I\'m interested in your web development services',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Ahmedabad, Gujarat, India',
      href: null,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card variant="elevated" className="p-8">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 4 hours during business hours.
              </p>

              {status.message && (
                <div 
                  className={`p-4 rounded-lg mb-6 animate-fade-in ${
                    status.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                  role="alert"
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all outline-none"
                    placeholder="e.g., Rajesh Patel"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all outline-none"
                      placeholder="rajesh@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      title="Please enter 10 digit mobile number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all outline-none"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company/Business Name <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all outline-none"
                    placeholder="Your Company Pvt Ltd"
                  />
                </div>

                {/* Service & Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all outline-none appearance-none bg-white cursor-pointer"
                    >
                      <option value="">-- Select a service --</option>
                      <option value="Business Website">Business Website</option>
                      <option value="E-Commerce Store">E-Commerce Store</option>
                      <option value="Custom Web Application">Custom Web Application</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Maintenance & Support">Maintenance & Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Budget <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all outline-none appearance-none bg-white cursor-pointer"
                    >
                      <option value="">-- Select budget range --</option>
                      <option value="Under ₹5,000">Under ₹5,000</option>
                      <option value="₹5,000 - ₹15,000">₹5,000 - ₹15,000</option>
                      <option value="₹15,000 - ₹25,000">₹15,000 - ₹25,000</option>
                      <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                      <option value="₹1,00,000+">₹1,00,000+</option>
                      <option value="Not Sure Yet">Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={20}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum 20 characters</p>
                </div>

                {/* Contact Method */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="space-y-3">
                    {['Email', 'Phone', 'WhatsApp'].map((method) => (
                      <label key={method} className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          value={method}
                          checked={formData.contactMethod.includes(method)}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-accent-purple border-gray-300 rounded focus:ring-2 focus:ring-accent-purple cursor-pointer"
                        />
                        <span className="ml-3 text-gray-700 group-hover:text-accent-purple transition-colors">
                          {method === 'Phone' ? 'Phone Call' : method}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  loading={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">
                    We respond within <strong>4 hours</strong> during business hours
                  </p>
                  <p className="text-xs text-gray-500">
                    By submitting, you agree to our privacy policy
                  </p>
                </div>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-accent-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent-purple" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{info.label}</div>
                        <div className="text-gray-600 text-sm">{info.value}</div>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={info.label} className="p-2">
                      {content}
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Business Hours */}
            <Card variant="elevated" className="p-6">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Monday - Saturday</span>
                  <span className="text-gray-600">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </Card>

            {/* Quick Contact */}
            <div className="space-y-3">
              <a
                href="https://wa.me/919898463251?text=Hi, I'm interested in your web development services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
              <a
                href="tel:+919898463251"
                className="flex items-center justify-center w-full bg-accent-blue text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
