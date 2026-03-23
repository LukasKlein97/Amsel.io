import type { Metadata } from "next";
import {
  Beaker,
  FileText,
  Sparkles,
  Shield,
  FolderOpen,
} from "lucide-react";
import { ModulePageLayout } from "@/components/module-page-layout";

export const metadata: Metadata = {
  title: "Gefahrstoffmanagement",
  description:
    "Gefahrstoffe revisionssicher verwalten, Sicherheitsdatenblätter per KI auslesen und Freigaben steuern.",
  alternates: {
    canonical: "https://amsel.io/gefahrstoffmanagement",
  },
  openGraph: {
    title: "Gefahrstoffmanagement | Amsel.io",
    description:
      "Gefahrstoffe und SDB digital verwalten – mit KI-Extraktion und Freigaben.",
    url: "https://amsel.io/gefahrstoffmanagement",
    locale: "de_DE",
  },
};

const benefits = [
  {
    title: "SDB digital verwalten",
    description:
      "Sicherheitsdatenblätter zentral ablegen, durchsuchen und mit Gefahrstoffen verknüpfen.",
    icon: FileText,
  },
  {
    title: "KI-Extraktion",
    description:
      "KI liest relevante Informationen aus Sicherheitsdatenblättern aus und überführt sie ins System – mit Quellenangabe.",
    icon: Sparkles,
  },
  {
    title: "Revisionssicher dokumentieren",
    description:
      "Alle Änderungen und Versionen nachvollziehbar – für Audits und behördliche Nachweise.",
    icon: Shield,
  },
  {
    title: "Freigaben & Zuordnung",
    description:
      "Gefahrstoffe nach Standort, Abteilung oder Einsatzgebiet filtern und Freigaben steuern.",
    icon: Beaker,
  },
  {
    title: "Ordnerstruktur & Archiv",
    description:
      "Automatische Ablage in strukturierten Ordnern – für schnellen Zugriff und Übersicht.",
    icon: FolderOpen,
  },
];

const outcomes = [
  "Kein manuelles Abtippen von SDB-Inhalten mehr",
  "Zentrale, durchsuchbare Gefahrstoff-Dokumentation",
  "Schnellere Prüfungen und Freigaben",
  "Audit-reife Nachweisführung",
];

export default function GefahrstoffmanagementPage() {
  return (
    <ModulePageLayout
      icon={Beaker}
      title="Gefahrstoffmanagement – SDB, KI-Extraktion, Freigaben"
      description="Gefahrstoffe und Sicherheitsdatenblätter erfordern Sorgfalt und Nachvollziehbarkeit. Mit Amsel.io verwalten Sie Gefahrstoffe revisionssicher, lassen relevante SDB-Inhalte per KI extrahieren und halten Freigaben und Zuordnungen im Griff. In Entwicklung – mit Fokus auf praktischen Nutzen im Alltag."
      benefits={benefits}
      outcomes={outcomes}
      heroImage="/images/gefahrstoffmanagement-app-screenshot.png"
      meta={{
        title: "Gefahrstoffmanagement | Amsel.io",
        description:
          "Gefahrstoffe revisionssicher verwalten, SDB per KI auslesen und Freigaben steuern.",
        canonical: "https://amsel.io/gefahrstoffmanagement",
      }}
      beta
    />
  );
}
