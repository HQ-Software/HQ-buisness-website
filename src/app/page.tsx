// app/page.tsx
import HeroSection from "@/components/landing/HeroSection";
import IntroTextSection from "@/components/landing/IntroTextSection";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import VisualShowcaseSection from "@/components/landing/VisualShowcaseSection";
import PersonalizationTeaser from "@/components/landing/PersonalizationTeaser";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden bg-black">
      <HeroSection />
      <IntroTextSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <VisualShowcaseSection />
      <PersonalizationTeaser />
      <CTASection />
      <Footer />
    </main>
  );
}
