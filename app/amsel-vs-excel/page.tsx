import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  Smartphone,
  FileCheck,
  FileText,
  Users,
  Bell,
  Shield,
  Sparkles,
  Database,
  Key,
  XCircle,
  FileSpreadsheet,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Amsel.io vs Excel – Warum spezialisierte Software für Arbeitssicherheit",
  description:
    "Vergleich: Amsel.io vs Excel für Arbeitssicherheit. Mobile Begehungen, revisionssichere Dokumentation, automatische Zuweisungen und KI – statt verstreuter Tabellen und manueller Nachverfolgung.",
  alternates: {
    canonical: "https://Amsel.io/amsel-vs-excel",
  },
  openGraph: {
    title: "Amsel.io vs Excel | Digitale Arbeitssicherheit",
    description:
      "Hauptvorteile von Amsel.io gegenüber Excel: mobil, revisionssicher, zentral, mit KI – für Ihren Arbeitsschutz.",
    url: "https://Amsel.io/amsel-vs-excel",
    locale: "de_DE",
  },
};

const comparisonPoints = [
  {
    icon: Smartphone,
    title: "Mobile Nutzung vor Ort",
    amsel:
      "Web + iOS/Android-App: Begehungen, Checklisten und Fotos direkt am Arbeitsplatz erfassen –  keine Medienbrüche",
    excel:
      "Nur Desktop. Begehungen erfordern Papier/Ausdruck und nachträgliches Übertragen in die Tabelle.",
  },
  {
    icon: FileCheck,
    title: "Revisionssichere Dokumentation",
    amsel:
      "Vollständige Historie und Audit-Trail. Alle Änderungen sind nachvollziehbar – ideal für Audits und behördliche Nachweise.",
    excel:
      "Keine echte Versionsverwaltung. Dateien können überschrieben werden, Änderungshistorie ist begrenzt.",
  },
  {
    icon: Users,
    title: "Zentrale Datenquelle & Echtzeit",
    amsel:
      "Eine Quelle für alle: Gefährdungsbeurteilungen, Begehungen und Aktionspläne sind für alle Beteiligten aktuell sichtbar.",
    excel:
      "Verstreute Dateien, E-Mail-Versand, Risiko veralteter Kopien. Wer hat welche Version?",
  },
  {
    icon: Bell,
    title: "Automatische Zuweisungen, Fristen & Erinnerungen",
    amsel:
      "Maßnahmen direkt zuweisen – plus Erinnerungen, wenn Schulungen fällig oder Maßnahmen überfällig sind. Keine manuelle Nachverfolgung nötig.",
    excel:
      "Manuelle Nachverfolgung, To-dos in E-Mail oder anderen Tools. Wer macht was bis wann? Schulungs- und Maßnahmen-Fristen selbst im Blick behalten.",
  },
  {
    icon: Shield,
    title: "Speziell für Arbeitssicherheit",
    amsel:
      "Module für Gefährdungsbeurteilungen, Begehungsprotokolle, Betriebsanweisungen, Gefahrstoffe – von uns auf Ihre Branche abgestimmt.",
    excel:
      "Universelle Tabellen. Jede Liste, jedes Formular muss manuell aufgesetzt und gepflegt werden.",
  },
  {
    icon: Sparkles,
    title: "KI-Unterstützung",
    amsel:
      "KI generiert Gefährdungsfaktoren, Betriebsanweisungen und liest Sicherheitsdatenblätter automatisch aus.",
    excel: "Keine KI-Funktionen für Arbeitsschutz – alles manuell.",
  },
  {
    icon: FileText,
    title: "Extraktion von Sicherheitsdatenblättern",
    amsel:
      "Automatisch: KI liest alle relevanten Informationen aus SDB aus und überführt sie direkt ins System – mit Quellenangabe für jede Information.",
    excel: "Manuell: Daten aus jedem Sicherheitsdatenblatt abschreiben und in Tabellen übertragen – zeitaufwendig und fehleranfällig.",
  },
  {
    icon: Database,
    title: "DSGVO & Hosting",
    amsel:
      "DSGVO-konform, gehostet in Deutschland, ISO-zertifizierte Rechenzentren – geprüfte Mobile Apps.",
    excel:
      "Abhängig von Nutzung (Cloud vs. lokal). Bei Microsoft 365: Daten können außerhalb der EU liegen.",
  },
  {
    icon: Key,
    title: "Integration & Zugriff",
    amsel:
      "Single Sign-On, APIs und nahtlose Einbindung in bestehende Systeme – ein Login für alles.",
    excel:
      "Wenig direkte Integration in Prozesse. Dateien müssen separat verwaltet und geteilt werden.",
  },
] as const;

export default function AmselVsExcelPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 -z-10"
          style={{ backgroundColor: "#000000" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-900/25 via-transparent to-black" />
        <div className="absolute -top-32 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 lg:pt-44">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-orange-200/90">
            <FileSpreadsheet className="h-3.5 w-3.5" aria-hidden />
            Amsel.io vs Excel
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-[3rem]">
            Excel vs Amsel.io: Warum spezialisierte Software für
            Arbeitssicherheit sinnvoll ist
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-orange-50/85 md:text-xl">
            Viele Unternehmen starten mit Excel und Tabellen für
            Gefährdungsbeurteilungen, Begehungen oder Aktionspläne. Das geht –
            aber es kostet Zeit, Nerven und birgt Risiken. Hier die
            Hauptvorteile von Amsel.io.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="group">
              <Link href="#contact">
                Beratung anfragen
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Comparison Table / Cards */}
        <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Hauptvorteile im Überblick
          </h2>
          <p className="mt-3 max-w-2xl text-orange-50/80">
            Amsel.io ist für digitalen Arbeitsschutz gebaut – von der mobilen
            Begehung bis zur revisionssicheren Dokumentation.
          </p>

          <div className="mt-10 space-y-6">
            {comparisonPoints.map((item) => (
              <Card
                key={item.title}
                className="overflow-hidden border-white/10 bg-white/[0.04] text-white shadow-lg shadow-orange-950/20 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-orange-500/10">
                      <item.icon className="h-5 w-5 text-orange-300" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-6 pt-0 md:grid-cols-2">
                  <div className="flex gap-3 rounded-xl border border-orange-400/25 bg-orange-500/10 p-4">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-orange-400"
                      aria-hidden
                    />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-orange-200/90">
                        Amsel.io
                      </p>
                      <p className="mt-1 text-sm text-orange-50/90 md:text-base">
                        {item.amsel}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <XCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-white/40"
                      aria-hidden
                    />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                        Excel / Tabellen
                      </p>
                      <p className="mt-1 text-sm text-orange-50/70 md:text-base">
                        {item.excel}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary Banner */}
        <div className="border-y border-white/10 bg-white/[0.03] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-8 rounded-2xl border border-orange-400/30 bg-gradient-to-br from-orange-500/15 via-black/40 to-black/60 p-8 shadow-xl shadow-orange-950/25 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Weniger manuell, mehr fürs Wesentliche
                </h2>
                <p className="mt-3 max-w-xl text-orange-50/85">
                  Mit Amsel.io sparen Sie Zeit bei der Erfassung und
                  Nachverfolgung – und haben gleichzeitig eine revisionssichere,
                  zentrale Basis für Audits und behördliche Nachweise.
                </p>
              </div>
              <Button asChild size="lg" className="shrink-0">
                <Link href="#contact">
                  Projekt anfragen
                  <span className="ml-1 inline-block">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Bereit für den Wechsel von Excel?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-orange-50/80">
            Wir zeigen Ihnen gern, wie Amsel.io in Ihre bestehenden Prozesse
            passt – und wo Sie am meisten Zeit und Aufwand einsparen.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link href="#contact">Gespräch vereinbaren</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
