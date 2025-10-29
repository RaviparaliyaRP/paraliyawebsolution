import Hero from '@/components/sections/Hero';
import ServicesPreview from '@/components/sections/ServicesPreview';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import Testimonials from '@/components/sections/Testimonials';
import BrandsCarousel from '@/components/sections/BrandsCarousel';
import FreeResources from '@/components/sections/FreeResources';
import CTASection from '@/components/sections/CTASection';

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
