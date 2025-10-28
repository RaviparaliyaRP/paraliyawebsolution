import type { Metadata } from 'next';
import ServicesDetailed from '@/components/sections/ServicesDetailed';

export const metadata: Metadata = {
  title: 'Web Development Services - Business Websites, E-Commerce & Custom Apps | Paraliya Web Solution',
  description: 'Professional web development services in Ahmedabad. Business websites from ₹25,000, E-commerce stores from ₹50,000, Custom applications from ₹1,00,000. Free consultation.',
  keywords: 'web development services, business website, e-commerce development, custom web applications, Ahmedabad, Gujarat, website design',
  openGraph: {
    title: 'Web Development Services - Paraliya Web Solution',
    description: 'Professional web development services in Ahmedabad. Business websites, E-commerce stores, and Custom applications.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-600">
          <a href="/" className="hover:text-accent-purple transition-colors duration-200">
            Home
          </a>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">Services</span>
        </nav>
      </div>

      <ServicesDetailed />
    </div>
  );
}
