import type { Metadata } from "next";
import {
  FileText,
  Users,
  History,
  Search,
  ShieldCheck,
} from "lucide-react";
import { ModulePageLayout } from "@/components/module-page-layout";

export const metadata: Metadata = {
  title: "Betriebsanweisungen",
  description:
    "Betriebsanweisungen digital erstellen, verwalten und Mitarbeitern zugänglich machen. Versionierung für lückenlose Dokumentation.",
  alternates: {
    canonical: "https://amsel.io/betriebsanweisungen",
  },
  openGraph: {
    title: "Betriebsanweisungen | Amsel.io",
    description:
      "Betriebsanweisungen digital verwalten – mit Versionierung und einfachem Zugriff für alle.",
    url: "https://amsel.io/betriebsanweisungen",
    locale: "de_DE",
  },
};

const benefits = [
  {
    title: "Zentral verwalten",
    description:
      "Alle Betriebsanweisungen an einem Ort – durchsuchbar, filterbar und für berechtigte Mitarbeiter zugänglich.",
    icon: FileText,
  },
  {
    title: "Versionierung",
    description:
      "Änderungen nachvollziehbar dokumentieren. Jede Version bleibt archiviert – ideal für Audits und Nachweise.",
    icon: History,
  },
  {
    title: "Schneller Zugriff",
    description:
      "Mitarbeiter finden Betriebsanweisungen über Webapp und mobile App – ohne in Ordnern zu suchen.",
    icon: Search,
  },
  {
    title: "KI-Erstellung",
    description:
      "Betriebsanweisungen mit KI-Unterstützung erstellen – schneller, einheitlicher und rechtssicher formuliert.",
    icon: ShieldCheck,
  },
  {
    title: "Abteilungen & Standorte",
    description:
      "Betriebsanweisungen nach Abteilung oder Standort filtern – so bleibt die Übersicht auch in großen Betrieben.",
    icon: Users,
  },
];

const outcomes = [
  "Keine verstreuten Word-Dateien oder Ordnerstrukturen mehr",
  "Immer die aktuelle Version – ohne manuelles Aktualisieren",
  "Schnellere Erstellung durch KI und Vorlagen",
  "Einfacher Zugriff für Mitarbeiter – auch mobil",
];

export default function BetriebsanweisungenPage() {
  return (
    <ModulePageLayout
      icon={FileText}
      title="Betriebsanweisungen – zentral, versioniert, schnell auffindbar"
      description="Betriebsanweisungen gehören zum Alltag des Arbeitsschutzes – und landen oft in verstreuten Ordnern oder E-Mails. Mit Amsel.io verwalten Sie sie zentral, versionieren Änderungen und stellen sie Ihren Mitarbeitern einfach zugänglich – inklusive KI-Unterstützung bei der Erstellung."
      benefits={benefits}
      outcomes={outcomes}
      meta={{
        title: "Betriebsanweisungen | Amsel.io",
        description:
          "Betriebsanweisungen digital erstellen, verwalten und Mitarbeitern zugänglich machen.",
        canonical: "https://amsel.io/betriebsanweisungen",
      }}
    />
  );
}
