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
      <section className="relative py-16 lg:py-20 bg-gradient-to-r from-accent-purple via-accent-blue to-purple-600 overflow-hidden">
        {/* Premium Background Patterns */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Circular Shapes */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-[32rem] h-[32rem] bg-purple-400/30 rounded-full blur-3xl"></div>
          
          {/* Additional floating shapes */}
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
          
          {/* Mesh Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
              `
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 drop-shadow-lg">
              Get In Touch
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
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
