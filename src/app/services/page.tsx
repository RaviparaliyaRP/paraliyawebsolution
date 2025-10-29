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
      <ServicesDetailed />
    </div>
  );
}
