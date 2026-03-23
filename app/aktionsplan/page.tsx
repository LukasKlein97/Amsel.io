import type { Metadata } from "next";
import {
  CheckCircle,
  Users,
  Bell,
  Calendar,
  Link2,
} from "lucide-react";
import { ModulePageLayout } from "@/components/module-page-layout";

export const metadata: Metadata = {
  title: "Aktionsplan",
  description:
    "Maßnahmen und Aufgaben zentral verwalten – mit Prioritäten, Fristen, Zuweisungen und Erinnerungen. Keine manuelle Nachverfolgung mehr.",
  alternates: {
    canonical: "https://amsel.io/aktionsplan",
  },
  openGraph: {
    title: "Aktionsplan | Amsel.io",
    description:
      "Maßnahmen zentral zuweisen, Fristen setzen, Erinnerungen senden – alles an einem Ort.",
    url: "https://amsel.io/aktionsplan",
    locale: "de_DE",
  },
};

const benefits = [
  {
    title: "Zuweisungen & Verantwortlichkeiten",
    description:
      "Maßnahmen direkt Personen zuweisen. Klar definiert: Wer macht was bis wann – für alle sichtbar.",
    icon: Users,
  },
  {
    title: "Fristen & Erinnerungen",
    description:
      "Deadlines setzen und automatische Erinnerungen nutzen. Schulungen, Prüfungen oder Maßnahmen – nichts geht unter.",
    icon: Calendar,
  },
  {
    title: "Verknüpfung aus Begehungen & GB",
    description:
      "Mängel aus Begehungsprotokollen und Gefährdungsbeurteilungen fließen automatisch ein – keine doppelte Erfassung.",
    icon: Link2,
  },
  {
    title: "Prioritäten & Übersicht",
    description:
      "Offene Aufgaben filtern, priorisieren und teamübergreifend im Blick behalten.",
    icon: CheckCircle,
  },
  {
    title: "Keine manuelle Nachverfolgung",
    description:
      "Statt E-Mails, Excel oder Post-its: Eine zentrale Quelle für alle Maßnahmen und deren Status.",
    icon: Bell,
  },
];

const outcomes = [
  "Klarheit: Wer ist für welche Maßnahme verantwortlich?",
  "Weniger überfällige Maßnahmen durch automatische Erinnerungen",
  "Keine Suchen mehr in E-Mails oder Tabellen",
  "Transparenz für Führungskräfte und Arbeitssicherheit",
];

export default function AktionsplanPage() {
  return (
    <ModulePageLayout
      icon={CheckCircle}
      title="Aktionsplan – Maßnahmen zentral im Griff"
      description="Maßnahmen aus Begehungen, Gefährdungsbeurteilungen oder Schulungen landen oft in E-Mails, Excel oder im Kopf. Der Aktionsplan von Amsel.io bündelt sie an einem Ort: Zuweisungen, Fristen, Erinnerungen – und alles bleibt für die Beteiligten sichtbar und nachverfolgbar."
      benefits={benefits}
      outcomes={outcomes}
      heroImage="/images/aktionsplan-app-screenshot.png"
      meta={{
        title: "Aktionsplan | Amsel.io",
        description:
          "Maßnahmen und Aufgaben zentral verwalten – mit Prioritäten, Fristen und Erinnerungen.",
        canonical: "https://amsel.io/aktionsplan",
      }}
    />
  );
}
