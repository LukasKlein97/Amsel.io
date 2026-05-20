import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Shield,
  Sparkles,
  FolderOpen,
  CheckCircle2,
  Users,
  History,
  Search,
  ShieldCheck,
  CheckCircle,
  Camera,
  Smartphone,
  FileCheck,
  ClipboardList,
  Bell,
  Calendar,
  Link2,
  UserPlus,
  Trash2,
  ClipboardCheck,
  Beaker,
} from "lucide-react";

export type ModuleData = {
  sectionId: string;
  icon: LucideIcon;
  title: string;
  badge?: string;
  description: string;
  benefits: Array<{ title: string; description: string; icon: LucideIcon }>;
  outcomes: string[];
  heroImage?: string;
  beta?: boolean;
};

export const modules: ModuleData[] = [
  {
    sectionId: "gefaehrdungsbeurteilungen",
    icon: FileText,
    title: "Gefährdungsbeurteilungen – digital, strukturiert, mit KI",
    description:
      "Gefährdungsbeurteilungen sind das Rückgrat des Arbeitsschutzes. Mit AMS Go erfasst du Gefährdungsfaktoren strukturiert, nutzt Vorlagen und KI-Vorschläge, dokumentierst den Ist-Zustand inklusive Fotos und verknüpfst alles nahtlos mit deinem Aktionsplan.",
    benefits: [
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
    ],
    outcomes: [
      "Schnellere Erstellung durch Vorlagen und KI-Hilfe",
      "Transparenz: Wer bearbeitet was, und bis wann?",
      "Weniger Doppelarbeit und manuelle Nachverfolgung",
      "Audit-reife Dokumentation jederzeit abrufbar",
    ],
    heroImage: "/images/gbu-app-screenshot.png",
  },
  {
    sectionId: "betriebsanweisungen",
    icon: FileText,
    title: "Betriebsanweisungen – zentral, versioniert, schnell auffindbar",
    description:
      "Betriebsanweisungen gehören zum Alltag des Arbeitsschutzes – und landen oft in verstreuten Ordnern oder E-Mails. Mit AMS Go verwaltest du sie zentral, versionierst Änderungen und stellst sie deinen Mitarbeitern einfach zugänglich – inklusive KI-Unterstützung bei der Erstellung.",
    benefits: [
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
    ],
    outcomes: [
      "Keine verstreuten Word-Dateien oder Ordnerstrukturen mehr",
      "Immer die aktuelle Version – ohne manuelles Aktualisieren",
      "Schnellere Erstellung durch KI und Vorlagen",
      "Einfacher Zugriff für Mitarbeiter – auch mobil",
    ],
    heroImage: "/images/betriebsanweisungen-app-screenshot.png",
  },
  {
    sectionId: "begehungsprotokolle",
    icon: CheckCircle,
    title: "Begehungsprotokolle – mobil, strukturiert, nachvollziehbar",
    description:
      "Begehungen sollten dort erfasst werden, wo sie stattfinden: vor Ort. Mit unserer mobilen App und vordefinierten Checklisten erfasst du Prüfpunkte, dokumentierst Mängel per Foto und weist Maßnahmen direkt zu – ohne Medienbrüche und nachträgliches Übertragen.",
    benefits: [
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
    ],
    outcomes: [
      "Kein Hin- und Hertragen zwischen Produktion und Büro",
      "Mängel und Maßnahmen bleiben transparent und nachverfolgbar",
      "Kürzere Reaktionszeiten durch direkte Zuweisung",
      "Revisionssichere Dokumentation für Audits und Nachweise",
    ],
    heroImage: "/images/begehungsprotokolle-app-screenshot.png",
  },
  {
    sectionId: "aktionsplan",
    icon: CheckCircle,
    title: "Aktionsplan – Maßnahmen zentral im Griff",
    description:
      "Maßnahmen aus Begehungen, Gefährdungsbeurteilungen oder Schulungen landen oft in E-Mails, Excel oder im Kopf. Der Aktionsplan von AMS Go bündelt sie an einem Ort: Zuweisungen, Fristen, Erinnerungen – und alles bleibt für die Beteiligten sichtbar und nachverfolgbar.",
    benefits: [
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
    ],
    outcomes: [
      "Klarheit: Wer ist für welche Maßnahme verantwortlich?",
      "Weniger überfällige Maßnahmen durch automatische Erinnerungen",
      "Keine Suchen mehr in E-Mails oder Tabellen",
      "Transparenz für Führungskräfte und Arbeitssicherheit",
    ],
    heroImage: "/images/aktionsplan-app-screenshot.png",
  },
  {
    sectionId: "besuchermanagement",
    icon: UserPlus,
    title: "Besuchermanagement – erfassen, abmelden, datenschutzkonform",
    description:
      "Besucher und Externe gehören zum Betriebsalltag – und ihre Erfassung sollte schnell, übersichtlich und datenschutzkonform sein. Mit AMS Go erfasst du Besucher digital, optional über ein Tablet-Terminal, und die Daten werden nach Ablauf einer Frist automatisch gelöscht.",
    benefits: [
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
    ],
    outcomes: [
      "Kein manuelles Ausfüllen von Papierlisten mehr",
      "Transparenz: Wer ist aktuell auf dem Gelände?",
      "Automatische Löschung – DSGVO-konform",
      "Einfache Integration in bestehende Abläufe",
    ],
    heroImage: "/images/besuchermanagement-app-screenshot.png",
  },
  {
    sectionId: "gefahrstoffmanagement",
    icon: Beaker,
    title: "Gefahrstoffmanagement – SDB, KI-Extraktion, Freigaben",
    description:
      "Gefahrstoffe und Sicherheitsdatenblätter erfordern Sorgfalt und Nachvollziehbarkeit. Mit AMS Go verwaltest du Gefahrstoffe revisionssicher, lässt relevante SDB-Inhalte per KI extrahieren und hältst Freigaben und Zuordnungen im Griff. In Entwicklung – mit Fokus auf praktischen Nutzen im Alltag.",
    benefits: [
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
    ],
    outcomes: [
      "Kein manuelles Abtippen von SDB-Inhalten mehr",
      "Zentrale, durchsuchbare Gefahrstoff-Dokumentation",
      "Schnellere Prüfungen und Freigaben",
      "Audit-reife Nachweisführung",
    ],
    heroImage: "/images/gefahrstoffmanagement-app-screenshot.png",
  },
];

export const moduleNavItems = modules.map((module) => ({
  name: module.badge ?? module.title.split(" – ")[0] ?? module.title,
  section: module.sectionId,
}));
