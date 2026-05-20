import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { UeberUnsSection } from "@/components/ueber-uns-section";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "AMS Go: Unsere Geschichte von der Gründung bis zur L-Bank-Förderung, das Gründerteam und unsere Partner im digitalen Arbeitsschutz.",
  alternates: {
    canonical: "https://amsel.io/ueber-uns",
  },
  openGraph: {
    title: "Über uns | AMS Go",
    description:
      "Erfahren Sie mehr über AMS Go, unsere Gründer und Partner – von der ersten Idee bis zum produktiven Einsatz.",
    url: "https://amsel.io/ueber-uns",
    locale: "de_DE",
  },
};

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <UeberUnsSection />
      </main>
      <Footer />
    </div>
  );
}
