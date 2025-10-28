import Hero from '@/components/sections/Hero';
import ServicesPreview from '@/components/sections/ServicesPreview';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProcessTimeline />
      <Testimonials />
      <CTASection />
    </>
  );
}
