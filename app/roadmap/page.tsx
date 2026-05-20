import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { RoadmapSection } from "@/components/roadmap-section";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Module & Roadmap von AMS Go: umgesetzte Features und geplante Releases von Gefährdungsbeurteilungen bis Gefahrstoffmanagement.",
  alternates: {
    canonical: "https://amsel.io/roadmap",
  },
  openGraph: {
    title: "Roadmap | AMS Go",
    description:
      "Die Roadmap zeigt umgesetzte sowie geplante Features und Module – von den ersten Releases bis zu den kommenden Quartalen.",
    url: "https://amsel.io/roadmap",
    locale: "de_DE",
  },
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  );
}
