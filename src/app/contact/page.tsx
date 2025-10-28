import type { Metadata } from 'next';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Paraliya Web Solution | Get Free Consultation',
  description: 'Get in touch with Paraliya Web Solution for your web development needs. Free consultation, quick response, and transparent pricing. Call +91 9898463251 or WhatsApp.',
  keywords: 'contact, web development consultation, Paraliya Web Solution, Ahmedabad, Gujarat',
  openGraph: {
    title: 'Contact Us - Paraliya Web Solution',
    description: 'Get in touch with Paraliya Web Solution for your web development needs. Free consultation and quick response.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="pt-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-600">
          <a href="/" className="hover:text-accent-purple transition-colors duration-200">
            Home
          </a>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">Contact</span>
        </nav>
      </div>

      <ContactForm />
    </div>
  );
}
