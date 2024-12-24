import { Hero } from '@/components/landing-page/sections/hero';
import { Features } from '@/components/landing-page/sections/features';
import { HowItWorks } from '@/components/landing-page/sections/how-it-works';
import { Testimonials } from '@/components/landing-page/sections/testimonials';
import { MobilePreview } from '@/components/landing-page/sections/mobile-preview';
import { Pricing } from '@/components/landing-page/sections/pricing';
import { Newsletter } from '@/components/landing-page/sections/newsletter';
import { Navbar } from '@/components/landing-page/navbar';
import { Footer } from '@/components/landing-page/footer';

export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <MobilePreview />
      <Testimonials />
      <Pricing />
      {/* WIP: integrate this functionality */}
      {/* <Newsletter /> */}
      <Footer />
    </>
  );
}