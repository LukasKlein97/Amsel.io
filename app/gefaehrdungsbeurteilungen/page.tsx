import type { Metadata } from "next";
import {
  FileText,
  Shield,
  Sparkles,
  FolderOpen,
  CheckCircle2,
} from "lucide-react";
import { ModulePageLayout } from "@/components/module-page-layout";

export const metadata: Metadata = {
  title: "Gefährdungsbeurteilungen",
  description:
    "Gefährdungsbeurteilungen strukturiert erfassen, versionieren und mit Maßnahmen verzahnen. Mobil nutzbar, revisionssicher.",
  alternates: {
    canonical: "https://amsel.io/gefaehrdungsbeurteilungen",
  },
  openGraph: {
    title: "Gefährdungsbeurteilungen | Amsel.io",
    description:
      "Gefährdungsbeurteilungen digital und mobil – mit KI-Unterstützung und nahtloser Verknüpfung zum Aktionsplan.",
    url: "https://amsel.io/gefaehrdungsbeurteilungen",
    locale: "de_DE",
  },
};

const benefits = [
  {
    title: "Strukturierte Erfassung",
    description:
      "Gefährdungsfaktoren nach Kategorien und Branchen – vom Gefährdungsfaktoren-Katalog bis zur individuellen Anpassung.",
    icon: FileText,
  },
  {
    title: "KI-Unterstützung",
    description:
      "KI schlägt Gefährdungsfaktoren vor und unterstützt beim Formulieren von Ist-Zustand und Maßnahmen.",
    icon: Sparkles,
  },
  {
    title: "Mobile Nutzung",
    description:
      "Beurteilungen direkt am Arbeitsplatz durchführen – mit Fotos für den Ist-Zustand und nahtloser Rückbindung zur Webapp.",
    icon: Shield,
  },
  {
    title: "Verknüpfung mit Aktionsplan",
    description:
      "Festgestellte Mängel erscheinen direkt im Aktionsplan. Maßnahmen zuweisen, Fristen setzen, Erinnerungen nutzen.",
    icon: CheckCircle2,
  },
  {
    title: "Versionierung & Archiv",
    description:
      "Alle Revisionen revisionssicher abgelegt – Bilder und Unterlagen automatisch in Ordnern einsortiert.",
    icon: FolderOpen,
  },
];

const outcomes = [
  "Schnellere Erstellung durch Vorlagen und KI-Hilfe",
  "Transparenz: Wer bearbeitet was, und bis wann?",
  "Weniger Doppelarbeit und manuelle Nachverfolgung",
  "Audit-reife Dokumentation jederzeit abrufbar",
];

export default function GefaehrdungsbeurteilungenPage() {
  return (
    <ModulePageLayout
      icon={FileText}
      title="Gefährdungsbeurteilungen – digital, strukturiert, mit KI"
      description="Gefährdungsbeurteilungen sind das Rückgrat des Arbeitsschutzes. Mit Amsel.io erfassen Sie Gefährdungsfaktoren strukturiert, nutzen Vorlagen und KI-Vorschläge, dokumentieren den Ist-Zustand inklusive Fotos und verknüpfen alles nahtlos mit Ihrem Aktionsplan."
      benefits={benefits}
      outcomes={outcomes}
      heroImage="/images/gbu-app-screenshot.png"
      meta={{
        title: "Gefährdungsbeurteilungen | Amsel.io",
        description:
          "Gefährdungsbeurteilungen strukturiert erfassen, versionieren und mit Maßnahmen verzahnen.",
        canonical: "https://amsel.io/gefaehrdungsbeurteilungen",
      }}
    />
  );
}
