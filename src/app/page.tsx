import Header from '@/components/Header';
import FlareUpLoopSection from '@/components/FlareUpLoopSection';
import ResearchFindings from '@/components/ResearchFindings';
import FrictionSection from '@/components/FrictionSection';
import FatigueSection from '@/components/FatigueSection';
import ProductIntroSection from '@/components/ProductIntroSection';
import ProductShowcaseSection from '@/components/ProductShowcaseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import ApplicationSection from '@/components/ApplicationSection';
import MediaFeedbacksSection from '@/components/MediaFeedbacksSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <FlareUpLoopSection />
      <ResearchFindings />
      <FrictionSection />
      <FatigueSection />
      <ProductIntroSection />
      <ProductShowcaseSection />
      <TestimonialsSection />
      <PricingSection />
      <BeforeAfterSection />
      <ApplicationSection />
      <MediaFeedbacksSection />
      <Footer />
    </main>
  );
} 