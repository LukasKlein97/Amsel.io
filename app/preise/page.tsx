import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PricingSection } from "@/components/pricing-section";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Transparente Preise für AMS Go: Basic, Pro, Business und Enterprise – Pläne für digitalen Arbeitsschutz pro Standort.",
  alternates: {
    canonical: "https://amsel.io/preise",
  },
  openGraph: {
    title: "Preise | AMS Go",
    description:
      "Wähle den Plan, der zu deinem Unternehmen passt – von Basic für kleine Teams bis Enterprise für Konzerne.",
    url: "https://amsel.io/preise",
    locale: "de_DE",
  },
};

export default function PreisePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
