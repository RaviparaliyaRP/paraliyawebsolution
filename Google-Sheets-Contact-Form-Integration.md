'use client';

import { useState } from 'react';

export default function ContactForm() {
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle checkbox for contact method
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      contactMethod: checked
        ? [...prev.contactMethod, value]
        : prev.contactMethod.filter(method => method !== value)
    }));
  };

  const handleSubmit = async (e) => {
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
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submission', {
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

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
        <p className="text-gray-600">Fill out the form below and we'll get back to you within 4 hours</p>
      </div>
      
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

      <form onSubmit={handleSubmit} className="space-y-5">
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
            placeholder="e.g., Rajesh Patel"
          />
        </div>

        {/* Email */}
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
            placeholder="rajesh@example.com"
          />
        </div>

        {/* Phone */}
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
            placeholder="9876543210"
          />
          <p className="text-xs text-gray-500 mt-1">10 digits without +91 or 0</p>
        </div>

        {/* Company (Optional) */}
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
            placeholder="Your Company Pvt Ltd"
          />
        </div>

        {/* Service */}
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none appearance-none bg-white cursor-pointer"
          >
            <option value="">-- Select a service --</option>
            <option value="Business Website">Business Website</option>
            <option value="E-Commerce Store">E-Commerce Store</option>
            <option value="Custom Web Application">Custom Web Application</option>
            <option value="Website Redesign">Website Redesign</option>
            <option value="Maintenance & Support">Maintenance & Support</option>
            <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Budget - FIXED */}
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none appearance-none bg-white cursor-pointer"
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
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none resize-none"
            placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
          />
          <p className="text-xs text-gray-500 mt-1">Minimum 20 characters</p>
        </div>

        {/* Contact Method - FIXED */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Preferred Contact Method
          </label>
          <div className="space-y-3">
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                value="Email"
                checked={formData.contactMethod.includes('Email')}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer"
              />
              <span className="ml-3 text-gray-700 group-hover:text-purple-600 transition-colors">Email</span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                value="Phone"
                checked={formData.contactMethod.includes('Phone')}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer"
              />
              <span className="ml-3 text-gray-700 group-hover:text-purple-600 transition-colors">Phone Call</span>
            </label>
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                value="WhatsApp"
                checked={formData.contactMethod.includes('WhatsApp')}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer"
              />
              <span className="ml-3 text-gray-700 group-hover:text-purple-600 transition-colors">WhatsApp</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            ' Send Message'
          )}
        </button>

        <div className="text-center space-y-2 mt-6">
          <p className="text-sm text-gray-600">
            We respond within <strong>4 hours</strong> during business hours
          </p>
          <p className="text-xs text-gray-500">
            By submitting, you agree to our privacy policy
          </p>
        </div>
      </form>

      {/* Alternative Contact Options */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center mb-4">Or reach us directly:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://wa.me/919898463251?text=Hi, I'm interested in your web development services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <a 
            href="tel:+919898463251"
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}

//NOTE for cursor ai:
Prompt for you for integration google sheet:

Create a contact form component for Next.js 14 (App Router) with:
- All fields from the content.md file
- Integration with Google Sheets using Apps Script URL: https://script.google.com/macros/s/AKfycbzs-8WKPOaCmJhbZ497Y4CTm-ndpXvHriwXQfBR5OGf4myVyTvppmfbz27s-BILM7bx/exec
- Tailwind CSS styling matching the purple theme
- Form validation with error messages
- Loading state during submission
- Success/error notifications
- Mobile responsive design
- Accessibility features (ARIA labels)

Use the ContactForm code structure provided but adapt styling to match the portfolio design.