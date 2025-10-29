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
      <AboutContent />
    </div>
  );
}
