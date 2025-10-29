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
      <BlogListing />
    </div>
  );
}
