import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  Car,
  CheckCircle2,
  Clock,
  Factory,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Automotive & Zulieferindustrie",
  description:
    "Digitale Arbeitssicherheit für Automobilhersteller und Zulieferer. Erfolgreich bei Knipping im Einsatz – weniger Aufwand, mehr Zeit für das Wesentliche.",
  alternates: {
    canonical: "https://Amsel.io/automotive",
  },
  openGraph: {
    title: "Automotive & Zulieferindustrie | Amsel.io",
    description:
      "Arbeitssicherheitssoftware für die Automobilbranche – mit messbarem Mehrwert im Alltag, u. a. bei Knipping.",
    url: "https://Amsel.io/automotive",
    locale: "de_DE",
  },
};

const focusAreas = [
  {
    title: "Produktion & Montage",
    description:
      "Begehungen und Gefährdungsbeurteilungen direkt an Linie und Arbeitsplatz – inklusive Fotos, Maßnahmen und Nachverfolgung.",
    icon: Factory,
  },
  {
    title: "Logistik & Flurförderung",
    description:
      "Klar strukturierte Checks für Lager, Verkehrswege und Stapler – damit Routine sicher bleibt und nichts untergeht.",
    icon: Building2,
  },
  {
    title: "Compliance & Nachweis",
    description:
      "Revisionssichere Dokumentation und einheitliche Standards über Teams und Standorte hinweg.",
    icon: ShieldCheck,
  },
];

const outcomes = [
  "Weniger manuelle Nacharbeit und Suchen in E-Mail, Papier und Tabellen",
  "Schnellere Erstellung und Aktualisierung von Beurteilungen und Protokollen",
  "Mehr Transparenz: wer macht was, und bis wann?",
  "Bessere Einbindung von Führungskräften und Arbeitssicherheit im Tagesgeschäft",
];

/** Auszug nach [knipping.de](https://knipping.de/) */
const knippingStatsCompact = [
  { value: "170", detail: "Mio. €", label: "UMSATZ P.A." },
  { value: "975", detail: "", label: "Mitarbeiter*innen" },
] as const;

export default function AutomotivePage() {
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
            <Car className="h-3.5 w-3.5" aria-hidden />
            Automotive
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-[3rem]">
            Arbeitssicherheit, die Tempo und Präzision in der Automobilbranche
            schafft
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-orange-50/85 md:text-xl">
            Ob OEM, Zulieferer oder spezialisierte Fertigung: Wo Schichtbetrieb,
            Varianten und Termindruck den Alltag prägen, muss Arbeitssicherheit
            digital, mobil und verlässlich sein – ohne zusätzliche Büroarbeit.
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

        <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Wo wir Unternehmen im Bereich Automotive entlasten
          </h2>
          <p className="mt-3 max-w-2xl text-orange-50/80">
            Unsere Module sind darauf ausgelegt, dass Sicherheitsfachkräfte,
            Produktion und Verwaltung dieselbe Wahrheit teilen – vom ersten
            Hinweis bis zur abgeschlossenen Maßnahme.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {focusAreas.map((item) => (
              <Card
                key={item.title}
                className="border-white/10 bg-white/[0.04] text-white shadow-lg shadow-orange-950/20 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-orange-500/10">
                    <item.icon className="h-5 w-5 text-orange-300" />
                  </div>
                  <CardTitle className="text-lg text-white">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-orange-50/75">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="border-y border-white/10 bg-white/[0.03] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="mb-8 flex max-w-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-orange-950/25 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-x-6 sm:p-5">
                  <a
                    href="https://knipping.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="KNIPPING Kunststofftechnik – Website öffnen"
                    className="group flex min-w-0 shrink-0 flex-row items-center gap-3 rounded-xl transition-colors hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/70 sm:gap-4"
                  >
                    <Image
                      src="/partners/knipping-mark.png"
                      alt=""
                      width={512}
                      height={512}
                      className="h-11 w-11 shrink-0 rounded-lg object-cover ring-1 ring-white/10 transition group-hover:ring-orange-400/25 sm:h-12 sm:w-12"
                      sizes="48px"
                      aria-hidden
                    />
                    <span className="text-xl font-bold tracking-wide text-white sm:text-2xl">
                      KNIPPING
                    </span>
                  </a>

                  <div
                    className="hidden h-9 w-px shrink-0 bg-white/10 sm:block"
                    aria-hidden
                  />

                  <dl className="flex flex-wrap items-end gap-x-5 gap-y-2 sm:gap-x-6">
                    {knippingStatsCompact.map((item) => (
                      <div key={item.label} className="min-w-0">
                        <dt className="text-[10px] font-medium uppercase tracking-[0.2em] text-orange-200/65">
                          {item.label}
                        </dt>
                        <dd className="mt-0.5 flex flex-wrap items-baseline gap-x-1 tabular-nums">
                          <span className="text-base font-semibold text-white sm:text-lg">
                            {item.value}
                          </span>
                          {item.detail ? (
                            <span className="text-xs text-orange-50/55">
                              {item.detail}
                            </span>
                          ) : null}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-200/95">
                  Referenz aus der Praxis
                </span>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
                  Erfolgreich eingeführt bei Knipping
                </h2>
                <p className="mt-4 text-lg text-orange-50/85">
                  Bei der Firma Knipping ist unsere Software bereits produktiv
                  im Einsatz. Das Team arbeitet heute schneller und
                  strukturierter: wiederkehrende Aufgaben lassen sich digital
                  abbilden, Informationen liegen zentral vor – statt in
                  verstreuten Ordnern und Listen.
                </p>
                <p className="mt-4 text-orange-50/80">
                  Das Ergebnis im Alltag:{" "}
                  <strong className="font-semibold text-white">
                    spürbar weniger Zeitaufwand
                  </strong>{" "}
                  für Administration und Nachweise, bei gleichzeitig klarerem
                  Fokus auf die eigentliche Arbeitssicherheit vor Ort.
                </p>
              </div>

              <Card className="border-white/10 bg-black/40 text-white shadow-xl shadow-orange-950/30">
                <CardHeader>
                  <div className="flex items-center gap-2 text-orange-200/90">
                    <Clock className="h-5 w-5" aria-hidden />
                    <span className="text-sm font-medium uppercase tracking-wide">
                      Zeitgewinn & Klarheit
                    </span>
                  </div>
                  <CardTitle className="text-xl text-white">
                    Was Automotive-Teams typischerweise gewinnen
                  </CardTitle>
                  <CardDescription className="text-orange-50/75">
                    Konkret bedeutet das für viele Betriebe weniger Reibung
                    zwischen Werkshalle und Büro – und mehr Ruhe bei Audits und
                    internen Abstimmungen.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  {outcomes.map((line) => (
                    <div key={line} className="flex gap-3 text-orange-50/90">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-orange-400/90"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-orange-50/80">
            Wir zeigen Ihnen gern anhand Ihrer Prozesse, wie Amsel.io in
            Produktion und Verwaltung zusammenspielt – inklusive Erfahrungen aus
            Projekten wie bei Knipping.
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
