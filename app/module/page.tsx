import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ModulePageContent } from "@/components/module-page-content";

export const metadata: Metadata = {
  title: "Module",
  description:
    "Alle AMS Go Module auf einen Blick: Gefährdungsbeurteilungen, Betriebsanweisungen, Begehungsprotokolle, Aktionsplan, Besuchermanagement und Gefahrstoffmanagement.",
  alternates: {
    canonical: "https://amsel.io/module",
  },
  openGraph: {
    title: "Module | AMS Go",
    description:
      "Digitale Module für Arbeitssicherheit – von Gefährdungsbeurteilungen bis Gefahrstoffmanagement.",
    url: "https://amsel.io/module",
    locale: "de_DE",
  },
};

export default function ModulePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative overflow-hidden pt-24 text-foreground">
        <ModulePageContent />
      </main>
      <Footer />
    </div>
  );
}
