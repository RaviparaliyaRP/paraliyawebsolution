import type { Metadata } from 'next';
import AboutContent from '@/components/sections/AboutContent';

export const metadata: Metadata = {
  title: 'About Us - Paraliya Web Solution | Web Development Team in Ahmedabad',
  description: 'Learn about Paraliya Web Solution - a passionate web development team in Ahmedabad. Founded in 2022, we help businesses thrive online with affordable, high-quality web solutions.',
  keywords: 'about Paraliya Web Solution, web development team, Ahmedabad, Gujarat, Ravi Paraliya, Shreekant Paraliya',
  openGraph: {
    title: 'About Us - Paraliya Web Solution',
    description: 'Learn about Paraliya Web Solution - a passionate web development team in Ahmedabad helping businesses thrive online.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="pt-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-600">
          <a href="/" className="hover:text-accent-purple transition-colors duration-200">
            Home
          </a>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">About Us</span>
        </nav>
      </div>

      <AboutContent />
    </div>
  );
}
