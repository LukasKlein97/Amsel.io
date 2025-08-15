import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { PreviewAppSection } from "@/components/preview-app-section";
import { AISection } from "@/components/ai-section";
import { SolutionsSection } from "@/components/solutions-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PreviewAppSection />
        <AISection />
        <SolutionsSection />
        {/* <imPricingSection /> */}
      </main>
      <Footer />
    </div>
  );
}
