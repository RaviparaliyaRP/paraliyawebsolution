import type { Metadata } from 'next';
import BlogListing from '@/components/sections/BlogListing';

export const metadata: Metadata = {
  title: 'Blog - Web Development Tips & Insights | Paraliya Web Solution',
  description: 'Stay updated with the latest web development trends, tips, and insights. Learn about SEO, e-commerce, security, and modern web technologies.',
  keywords: 'web development blog, SEO tips, e-commerce guide, website security, web design trends, Paraliya Web Solution',
  openGraph: {
    title: 'Blog - Paraliya Web Solution',
    description: 'Stay updated with the latest web development trends, tips, and insights.',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <div className="pt-8">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-600">
          <a href="/" className="hover:text-accent-purple transition-colors duration-200">
            Home
          </a>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">Blog</span>
        </nav>
      </div>

      <BlogListing />
    </div>
  );
}
