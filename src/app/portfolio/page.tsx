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
    <div>
      <PortfolioShowcase />
    </div>
  );
}
