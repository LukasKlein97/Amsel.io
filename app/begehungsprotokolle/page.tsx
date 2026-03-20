import type { Metadata } from "next";
import {
  CheckCircle,
  Camera,
  Smartphone,
  FileCheck,
  ClipboardList,
} from "lucide-react";
import { ModulePageLayout } from "@/components/module-page-layout";

export const metadata: Metadata = {
  title: "Begehungsprotokolle",
  description:
    "Mobile Begehungsprotokolle mit Checklisten, Fotos und Sofortzuweisung von Maßnahmen. Direkt vor Ort erfassen – ohne Medienbrüche.",
  alternates: {
    canonical: "https://amsel.io/begehungsprotokolle",
  },
  openGraph: {
    title: "Begehungsprotokolle | Amsel.io",
    description:
      "Mobile Checklisten, Fotodokumentation und Sofortzuweisung von Aufgaben direkt vom Werksgelände.",
    url: "https://amsel.io/begehungsprotokolle",
    locale: "de_DE",
  },
};

const benefits = [
  {
    title: "Mobil vor Ort",
    description:
      "Begehungen mit Smartphone oder Tablet durchführen – direkt am Arbeitsplatz, ohne Rückweg ins Büro.",
    icon: Smartphone,
  },
  {
    title: "Fotos & Dokumentation",
    description:
      "Mängel sofort fotografieren und anhängen. Automatisch in Ordnern abgelegt, revisionssicher nachvollziehbar.",
    icon: Camera,
  },
  {
    title: "Fertige Vorlagen",
    description:
      "Vorlagen mit Prüfpunkten nach Branche und Standort – von Arbeitsräumen bis Maschinensicherheit.",
    icon: ClipboardList,
  },
  {
    title: "Maßnahmen direkt zuweisen",
    description:
      "Festgestellte Mängel fließen direkt in den Aktionsplan. Verantwortliche, Fristen und Erinnerungen in einem System.",
    icon: CheckCircle,
  },
  {
    title: "Revisionssicher",
    description:
      "Alle Protokolle versioniert und archiviert – ideal für Audits und behördliche Nachweise.",
    icon: FileCheck,
  },
];

const outcomes = [
  "Kein Hin- und Hertragen zwischen Produktion und Büro",
  "Mängel und Maßnahmen bleiben transparent und nachverfolgbar",
  "Kürzere Reaktionszeiten durch direkte Zuweisung",
  "Revisionssichere Dokumentation für Audits und Nachweise",
];

export default function BegehungsprotokollePage() {
  return (
    <ModulePageLayout
      icon={CheckCircle}
      title="Begehungsprotokolle – mobil, strukturiert, nachvollziehbar"
      description="Begehungen sollten dort erfasst werden, wo sie stattfinden: vor Ort. Mit unserer mobilen App und vordefinierten Checklisten erfassen Sie Prüfpunkte, dokumentieren Mängel per Foto und weisen Maßnahmen direkt zu – ohne Medienbrüche und nachträgliches Übertragen."
      benefits={benefits}
      outcomes={outcomes}
      meta={{
        title: "Begehungsprotokolle | Amsel.io",
        description:
          "Mobile Begehungsprotokolle mit Checklisten, Fotos und Sofortzuweisung von Maßnahmen.",
        canonical: "https://amsel.io/begehungsprotokolle",
      }}
    />
  );
}
