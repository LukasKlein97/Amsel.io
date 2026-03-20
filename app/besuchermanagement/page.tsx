import type { Metadata } from "next";
import {
  UserPlus,
  Smartphone,
  Shield,
  Trash2,
  ClipboardCheck,
} from "lucide-react";
import { ModulePageLayout } from "@/components/module-page-layout";

export const metadata: Metadata = {
  title: "Besuchermanagement",
  description:
    "Besucher und Externe erfassen, verwalten und mit Sicherheitsunterweisungen verknüpfen. DSGVO-konforme automatische Löschung.",
  alternates: {
    canonical: "https://amsel.io/besuchermanagement",
  },
  openGraph: {
    title: "Besuchermanagement | Amsel.io",
    description:
      "Besucher erfassen, abmelden und datenschutzkonform automatisch löschen.",
    url: "https://amsel.io/besuchermanagement",
    locale: "de_DE",
  },
};

const benefits = [
  {
    title: "Schnelle Erfassung",
    description:
      "Besucher und Externe mit wenigen Klicks erfassen – in der Webapp oder über das Tablet als Besucherterminal.",
    icon: UserPlus,
  },
  {
    title: "Besucherterminal",
    description:
      "Mobile App als Selbstbedienung auf dem Tablet: Besucher melden sich selbst an, Begleitperson wird hinterlegt.",
    icon: Smartphone,
  },
  {
    title: "Abmeldung & Übersicht",
    description:
      "Wer ist noch auf dem Gelände? Abmeldung per Klick – oder automatisch über konfigurierbare Zeiträume.",
    icon: ClipboardCheck,
  },
  {
    title: "DSGVO-konforme Löschung",
    description:
      "Besucherdaten werden nach Ablauf einer konfigurierbaren Frist automatisch gelöscht – datenschutzkonform.",
    icon: Trash2,
  },
  {
    title: "Sicherheitsunterweisungen",
    description:
      "Besucher mit erforderlichen Unterweisungen und Zugangsberechtigungen verknüpfen.",
    icon: Shield,
  },
];

const outcomes = [
  "Kein manuelles Ausfüllen von Papierlisten mehr",
  "Transparenz: Wer ist aktuell auf dem Gelände?",
  "Automatische Löschung – DSGVO-konform",
  "Einfache Integration in bestehende Abläufe",
];

export default function BesuchermanagementPage() {
  return (
    <ModulePageLayout
      icon={UserPlus}
      title="Besuchermanagement – erfassen, abmelden, datenschutzkonform"
      description="Besucher und Externe gehören zum Betriebsalltag – und ihre Erfassung sollte schnell, übersichtlich und datenschutzkonform sein. Mit Amsel.io erfassen Sie Besucher digital, optional über ein Tablet-Terminal, und die Daten werden nach Ablauf einer Frist automatisch gelöscht."
      benefits={benefits}
      outcomes={outcomes}
      meta={{
        title: "Besuchermanagement | Amsel.io",
        description:
          "Besucher erfassen, verwalten und mit Sicherheitsunterweisungen verknüpfen.",
        canonical: "https://amsel.io/besuchermanagement",
      }}
      beta
    />
  );
}
