import type { Metadata } from 'next';
import PortfolioShowcase from '@/components/sections/PortfolioShowcase';

export const metadata: Metadata = {
  title: 'Portfolio - Our Recent Web Development Projects | Paraliya Web Solution',
  description: 'Explore our portfolio of successful web development projects. From business websites to e-commerce stores and custom applications. Real results for real businesses.',
  keywords: 'portfolio, web development projects, case studies, business websites, e-commerce, custom applications, Paraliya Web Solution',
  openGraph: {
    title: 'Portfolio - Paraliya Web Solution',
    description: 'Explore our portfolio of successful web development projects. Real results for real businesses.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <div className="pt-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-600">
          <a href="/" className="hover:text-accent-purple transition-colors duration-200">
            Home
          </a>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">Portfolio</span>
        </nav>
      </div>

      <PortfolioShowcase />
    </div>
  );
}
