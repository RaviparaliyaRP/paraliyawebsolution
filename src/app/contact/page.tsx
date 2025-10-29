import type { Metadata } from 'next';
import ContactForm from '@/components/sections/ContactForm';
import LiveChatStatus from '@/components/ui/LiveChatStatus';

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
      {/* Hero Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let's discuss your project and bring your ideas to life
            </p>
          </div>
        </div>
      </section>

      {/* Live Chat Availability Status */}
      <div className="bg-blue-50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LiveChatStatus />
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
