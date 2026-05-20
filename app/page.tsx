import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ModuleSection } from "@/components/features-section";
import { ZeitRechnerSection } from "@/components/zeit-rechner-section";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Analytics />
        <HeroSection />
        <ModuleSection />
        <ZeitRechnerSection />
      </main>
      <Footer />
    </div>
  );
}
