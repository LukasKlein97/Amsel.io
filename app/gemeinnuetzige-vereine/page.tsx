import type { Metadata } from "next";
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
  CheckCircle2,
  HeartHandshake,
  PartyPopper,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gemeinnützige Vereine – 90 % Rabatt",
  description:
    "Sonderkonditionen für gemeinnützige Vereine: bis zu 90 % Rabatt auf Amsel.io. Digitale Arbeitssicherheit für Ehrenamt, Vereinsheim und Veranstaltungen – fair und überschaubar.",
  alternates: {
    canonical: "https://Amsel.io/gemeinnuetzige-vereine",
  },
  openGraph: {
    title: "Gemeinnützige Vereine – 90 % Rabatt | Amsel.io",
    description:
      "Arbeitssicherheit für Vereine mit stark reduzierten Kosten. Beantragen Sie die Sonderkondition für Ihren gemeinnützigen Verein.",
    url: "https://Amsel.io/gemeinnuetzige-vereine",
    locale: "de_DE",
  },
};

const focusAreas = [
  {
    title: "Vereinsheim & Anlagen",
    description:
      "Begehungen, Gefährdungsbeurteilungen und Maßnahmen für Keller, Küche, Sanitär und Außenbereich – dokumentiert und nachvollziehbar für den Vorstand.",
    icon: ShieldCheck,
  },
  {
    title: "Events & Gruppen",
    description:
      "Klare Abläufe für Aufbau, Verkehrssicherung und temporäre Nutzung – damit Feste, Trainings und Aktionstage sicher und gut organisiert bleiben.",
    icon: PartyPopper,
  },
  {
    title: "Ehrenamt & Übergaben",
    description:
      "Wissen bleibt im Verein: einheitliche Strukturen statt Zettelwirtschaft, damit neue Verantwortliche schneller einsteigen können.",
    icon: Users,
  },
];

const benefits = [
  "Weniger Aufwand für Protokolle, Listen und Nachweise – mehr Zeit für den eigentlichen Vereinszweck",
  "Mobile Nutzung vor Ort: Fotos, Hinweise und Aufgaben direkt aus der Halle oder vom Platz",
  "Transparente Nachverfolgung: Was ist offen, wer kümmert sich, bis wann?",
  "Skalierbare Kosten dank 90 % Rabatt – speziell für anerkannt gemeinnützige Organisationen",
];

export default function GemeinnuetzigeVereinePage() {
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
            <HeartHandshake className="h-3.5 w-3.5" aria-hidden />
            Gemeinnützig
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-[3rem]">
            90 % Rabatt auf die Software – Arbeitssicherheit, die Vereine
            wirklich entlastet
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-orange-50/85 md:text-xl">
            Sport, Kultur, Hilfe oder Bildung: Wo Ehrenamtliche Verantwortung
            tragen, darf Arbeitssicherheit nicht an Bürokratie scheitern.
            Gemeinnützige Vereine erhalten unsere Lösung zu stark reduzierten
            Konditionen – digital, mobil und planbar.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="group">
              <Link href="#contact">
                Rabatt beantragen
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Wo Vereine mit Amsel.io starten
          </h2>
          <p className="mt-3 max-w-2xl text-orange-50/80">
            Die gleichen Bausteine wie in Unternehmen – nur auf den
            Vereinsalltag zugeschnitten: weniger Insellösungen, mehr Klarheit
            für Vorstand, Beauftragte und aktive Mitglieder.
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
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-200/95">
                  Sonderkondition
                </span>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
                  Für wen gilt der 90 %-Rabatt?
                </h2>
                <p className="mt-4 text-lg text-orange-50/85">
                  Der reduzierte Preis richtet sich an{" "}
                  <strong className="font-semibold text-white">
                    anerkannt gemeinnützige Vereine und Organisationen
                  </strong>{" "}
                  im Sinne der deutschen Gemeinnützigkeitsregelung. In der Regel
                  reicht ein Nachweis (z.&nbsp;B. Freistellungsbescheid oder
                  vergleichbare Anerkennung) – Details klären wir mit Ihnen im
                  Gespräch.
                </p>
                <p className="mt-4 text-orange-50/80">
                  So bleibt mehr Budget für Sportgeräte, Projekte und
                  Mitgliederarbeit – statt für doppelte Verwaltung.
                </p>
              </div>

              <Card className="border-white/10 bg-black/40 text-white shadow-xl shadow-orange-950/30">
                <CardHeader>
                  <div className="flex items-center gap-2 text-orange-200/90">
                    <HeartHandshake className="h-5 w-5" aria-hidden />
                    <span className="text-sm font-medium uppercase tracking-wide">
                      Mehr Wirkung mit weniger Overhead
                    </span>
                  </div>
                  <CardTitle className="text-xl text-white">
                    Was Vereine typischerweise gewinnen
                  </CardTitle>
                  <CardDescription className="text-orange-50/75">
                    Arbeitssicherheit muss nicht „zu groß“ wirken: strukturiert,
                    aber ohne zusätzliche Bürotage.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  {benefits.map((line) => (
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
            Rabatt für Ihren Verein sichern
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-orange-50/80">
            Schreiben Sie uns kurz, wer Sie sind und welche gemeinnützige
            Rechtsform Sie haben. Wir melden uns mit den nächsten Schritten und
            einem unverbindlichen Überblick.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group">
              <Link href="#contact">
                Jetzt anfragen
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
