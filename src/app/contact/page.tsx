import type { Metadata } from 'next';
import ContactHero from '@/components/sections/ContactHero';
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
    <div>
      {/* Hero Section */}
      <ContactHero />

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
