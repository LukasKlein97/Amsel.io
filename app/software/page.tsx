import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PreviewWebSection } from "@/components/preview-web-section";
import { PreviewAppSection } from "@/components/preview-app-section";
import { AISection } from "@/components/ai-section";
import { SolutionsSection } from "@/components/solutions-section";

export const metadata: Metadata = {
  title: "Software",
  description:
    "AMS Go als Web-App, Mobile App, mit KI-Features und nahtloser Integration – alle Software-Lösungen für digitalen Arbeitsschutz auf einen Blick.",
  alternates: {
    canonical: "https://amsel.io/software",
  },
  openGraph: {
    title: "Software | AMS Go",
    description:
      "Web-App, Mobile App, KI-Features und Integration – die komplette AMS Go Software für Arbeitssicherheit.",
    url: "https://amsel.io/software",
    locale: "de_DE",
  },
};

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <PreviewWebSection />
        <PreviewAppSection />
        <AISection />
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  );
}
