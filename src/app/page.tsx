import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';

// Lazy load below-the-fold components
const ServicesPreview = dynamic(() => import('@/components/sections/ServicesPreview'), {
  loading: () => <div className="min-h-[400px]" />,
});
const ProcessTimeline = dynamic(() => import('@/components/sections/ProcessTimeline'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <div className="min-h-[400px]" />,
});
const BrandsCarousel = dynamic(() => import('@/components/sections/BrandsCarousel'), {
  loading: () => <div className="min-h-[400px]" />,
});
const FreeResources = dynamic(() => import('@/components/sections/FreeResources'), {
  loading: () => <div className="min-h-[400px]" />,
});
const CTASection = dynamic(() => import('@/components/sections/CTASection'), {
  loading: () => <div className="min-h-[400px]" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProcessTimeline />
      <Testimonials />
      <BrandsCarousel />
      <FreeResources />
      <CTASection />
    </>
  );
}
