import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ModuleSection } from "@/components/features-section";
import { PreviewWebSection } from "@/components/preview-web-section";
import { PreviewAppSection } from "@/components/preview-app-section";
import { AISection } from "@/components/ai-section";
import { ZeitRechnerSection } from "@/components/zeit-rechner-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { SolutionsSection } from "@/components/solutions-section";
import { PricingSection } from "@/components/pricing-section";
import { PartnersSection } from "@/components/partners-section";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Analytics />
        <HeroSection />
        <ModuleSection />
        <PreviewWebSection />
        <PreviewAppSection />
        <AISection />
        <ZeitRechnerSection />
        <RoadmapSection />
        <SolutionsSection />
        <PricingSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}
