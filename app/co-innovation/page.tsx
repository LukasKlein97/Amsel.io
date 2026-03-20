import type { Metadata } from "next";
import Link from "next/link";
import { CoInnovationHero } from "@/components/co-innovation/co-innovation-hero";
import {
  FloatingOrb,
  ParallaxBackground,
  ParallaxSection,
} from "@/components/co-innovation/parallax-layers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
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
  CircleDollarSign,
  Euro,
  ExternalLink,
  FileStack,
  Lightbulb,
  MapPin,
  Scale,
  Route,
  Users,
} from "lucide-react";

const OFFICIAL_PROGRAM_URL =
  "https://wm.baden-wuerttemberg.de/de/innovation/innovationsgutscheine/innovationsgutschein-mittelstand-trifft-start-ups";

export const metadata: Metadata = {
  title: "Co-Innovation – Innovationsgutschein Mittelstand trifft Start-ups",
  description:
    "Kooperieren Sie mit Amsel.io über den Innovationsgutschein „Mittelstand trifft Start-ups“: bis zu 20.000 € Zuschuss (50 %) für innovative Erweiterungen unserer Software – für KMU in Baden-Württemberg.",
  alternates: {
    canonical: "https://Amsel.io/co-innovation",
  },
  openGraph: {
    title:
      "Co-Innovation – Innovationsgutschein Mittelstand trifft Start-ups | Amsel.io",
    description:
      "Wir suchen Co-Innovationspartner in BW: Förderung mit bis zu 20.000 €, wir unterstützen beim Antrag.",
    url: "https://Amsel.io/co-innovation",
    locale: "de_DE",
  },
};

const eligibilityTiles = [
  {
    icon: Users,
    label: "Mitarbeitende",
    value: "bis 250",
    hint: "Vollzeitäquivalente – maximale Unternehmensgröße",
  },
  {
    icon: CircleDollarSign,
    label: "Vorjahresumsatz",
    value: "bis 50 Mio. €",
    hint: "Obergrenze im Vorjahr (Alternative zur Bilanzsumme)",
  },
  {
    icon: Scale,
    label: "Vorjahresbilanzsumme",
    value: "bis 43 Mio. €",
    hint: "Obergrenze im Vorjahr (Alternative zum Umsatz)",
  },
  {
    icon: MapPin,
    label: "Standort",
    value: "Baden-Württemberg",
    hint: "Niederlassung oder Betriebsstätte im Land",
  },
] as const;

const coInnovationRoadmapSteps = [
  { step: 1, text: "Erstgespräch" },
  { step: 2, text: "Angebot von uns" },
  {
    step: 3,
    text: "Umsetzung der individuellen Anpassung und/oder Einführung der Software",
  },
  {
    step: 4,
    text: "Wir kümmern uns parallel um den Innovationsgutschein",
  },
  { step: 5, text: "Auszahlung durch das Land" },
] as const;

const partnerBenefits = [
  "Gemeinsam definieren wir ein innovatives Vorhaben: neue Funktionen, die Ihren Alltag in Arbeitssicherheit und Compliance wirklich entlasten.",
  "Sie bleiben strategischer Sparringspartner – wir liefern Produkt, Umsetzung und enge Abstimmung mit Ihren Prozessen.",
  "Transparente Planung von Umfang, Meilensteinen und abrechenbaren Leistungen im Rahmen des Förderprogramms.",
];

export default function CoInnovationPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="relative overflow-hidden bg-black text-white">
        <ParallaxBackground />
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ backgroundColor: "#000000" }}
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-orange-900/25 via-transparent to-black" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />

        <CoInnovationHero />

        <ScrollReveal className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-16 md:pt-20">
          <FloatingOrb
            className="absolute -right-40 top-12 h-[320px] w-[320px] rounded-full bg-orange-500/[0.06] blur-[80px]"
            speed={100}
          />

          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Das Wichtigste auf einen Blick
          </h2>
          <p className="mt-3 max-w-2xl text-orange-50/80">
            Die folgenden Kriterien und Zahlen stammen aus der{" "}
            <a
              href={OFFICIAL_PROGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-200/95 underline-offset-4 hover:text-orange-100 hover:underline"
            >
              Darstellung des Ministeriums für Wirtschaft, Arbeit und Tourismus
              Baden-Württemberg
            </a>
            . Endgültige Förderfähigkeit prüft die zuständige Stelle im
            Einzelfall.
          </p>

          <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-12">
            <section className="space-y-6">
              <div className="max-w-3xl">
                <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                  Wer wird gefördert?
                </h3>
                <p className="mt-3 text-base leading-relaxed text-orange-50/85">
                  <strong className="font-semibold text-orange-100">
                    Antragsberechtigt sind kleine und mittlere Unternehmen (KMU)
                    der gewerblichen Wirtschaft oder der Freien Berufe
                  </strong>{" "}
                  – mit allen unten genannten Größen- und Standortkriterien.
                </p>
              </div>

              <ParallaxSection offset={25} className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
                {eligibilityTiles.map((tile) => (
                  <div
                    key={tile.label}
                    className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg shadow-black/20 ring-1 ring-orange-400/15 sm:p-5"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/25 bg-orange-500/15">
                      <tile.icon
                        className="h-5 w-5 text-orange-200"
                        aria-hidden
                      />
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wider text-orange-200/85">
                      {tile.label}
                    </p>
                    <p className="mt-2 text-base font-semibold text-white md:text-lg xl:text-xl">
                      {tile.value}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-orange-50/75">
                      {tile.hint}
                    </p>
                  </div>
                ))}
              </ParallaxSection>

              <p className="w-full rounded-xl border border-orange-400/25 bg-orange-500/10 px-4 py-3 text-sm leading-relaxed text-orange-50/90">
                <strong className="text-orange-100">Zusammenspiel:</strong> Die
                Mitarbeitergrenze (max.&nbsp;250 Vollzeitäquivalente) gilt{" "}
                <strong className="text-white">zusammen mit</strong> einer der
                beiden finanziellen Obergrenzen im Vorjahr:{" "}
                <strong className="text-white">entweder</strong> Umsatz bis
                50&nbsp;Mio.&nbsp;€ <strong className="text-white">oder</strong>{" "}
                Bilanzsumme bis 43&nbsp;Mio.&nbsp;€ – jeweils laut
                Programmbeschreibung des Landes.
              </p>
            </section>

            <section className="w-full space-y-6">
              <ParallaxSection offset={30}>
              <Card className="w-full border-orange-400/35 bg-gradient-to-br from-orange-500/15 via-black/40 to-black/60 text-white shadow-xl shadow-orange-950/25 ring-1 ring-orange-400/20">
                <CardHeader>
                  <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/25 bg-orange-500/15">
                    <Euro className="h-5 w-5 text-orange-200" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    Wie hoch ist die Förderung?
                  </CardTitle>
                  <CardDescription className="text-orange-50/80">
                    Zuschuss für den Erwerb von Leistungen des Start-ups
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-orange-50/90">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/10 bg-black/35 p-4">
                      <p className="text-xs font-medium uppercase tracking-wider text-orange-200/80">
                        Zuschuss
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        bis 20.000&nbsp;€
                      </p>
                      <p className="mt-1 text-sm text-orange-50/75">
                        Maximale Förderung pro Vorhaben
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/35 p-4">
                      <p className="text-xs font-medium uppercase tracking-wider text-orange-200/80">
                        Fördersatz
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        50&nbsp;%
                      </p>
                      <p className="mt-1 text-sm text-orange-50/75">
                        Anteilige Finanzierung der förderfähigen Kosten
                      </p>
                    </div>
                  </div>
                  <p className="rounded-xl border border-white/10 bg-black/35 p-4 text-sm leading-relaxed text-orange-50/90 md:text-base">
                    <strong className="font-semibold text-white">
                      Was wir über den Gutschein abbilden können:
                    </strong>{" "}
                    Im förderfähigen Vorhaben können wir{" "}
                    <strong className="text-orange-100">
                      eine individuelle, maßgeschneiderte Anpassung
                    </strong>{" "}
                    und/oder die{" "}
                    <strong className="text-orange-100">
                      normalen Software-Lizenzkosten für zwei Jahre
                    </strong>{" "}
                    strukturiert als Leistungen von uns (Start-up) abbilden –
                    abgestimmt auf Ihre Nutzung und im Rahmen der
                    Programmvorgaben.
                  </p>
                  <p className="rounded-xl border border-orange-400/30 bg-orange-500/10 p-4 text-base leading-relaxed text-white">
                    <strong className="font-semibold text-white">
                      Beispiel:
                    </strong>{" "}
                    Projektvolumen{" "}
                    <strong className="text-orange-100">40.000&nbsp;€</strong> →
                    Zuschuss{" "}
                    <strong className="text-orange-100">20.000&nbsp;€</strong>{" "}
                    zurück – die Hälfte der förderfähigen Ausgaben (im Rahmen
                    der Programmregeln).
                  </p>
                  <p className="text-sm text-orange-50/70">
                    Gefördert werden Kosten für vom Start-up erbrachte
                    Dienstleistungen oder gelieferte Produkte im Rahmen eines
                    innovativen Vorhabens; Details und Antrag über die L-Bank
                    bzw. das Förderportal des Programms.
                  </p>
                </CardContent>
              </Card>
              </ParallaxSection>

              <ParallaxSection offset={20}>
              <p
                className="w-full rounded-2xl border border-orange-400/40 bg-gradient-to-r from-orange-500/20 via-orange-500/12 to-orange-600/15 px-6 py-5 text-center text-lg font-semibold leading-snug tracking-tight text-white shadow-lg shadow-orange-950/30 ring-1 ring-orange-300/20 md:px-8 md:py-6 md:text-2xl lg:text-[1.65rem]"
                role="note"
              >
                Sparen Sie{" "}
                <strong className="font-semibold text-orange-100">
                  50&nbsp;%
                </strong>{" "}
                der Kosten und bekommen bis zu{" "}
                <strong className="font-semibold text-orange-100">
                  20.000&nbsp;€
                </strong>{" "}
                zurück.
              </p>
              </ParallaxSection>

              <ParallaxSection offset={35}>
              <div className="w-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/20 ring-1 ring-orange-400/15 md:p-8">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/25 bg-orange-500/15">
                    <Route className="h-5 w-5 text-orange-200" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                      Roadmap / Zeitleiste
                    </h3>
                    <p className="mt-0.5 text-sm text-orange-50/75">
                      Von der ersten Abstimmung bis zur Auszahlung
                    </p>
                  </div>
                </div>

                <ol className="relative m-0 list-none p-0">
                  {coInnovationRoadmapSteps.map((item, index) => {
                    const isLast =
                      index === coInnovationRoadmapSteps.length - 1;
                    return (
                      <li key={item.step} className="flex gap-4 md:gap-5">
                        <div className="flex flex-col items-center">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-orange-400/45 bg-orange-500/20 text-sm font-semibold tabular-nums text-orange-100">
                            {item.step}
                          </span>
                          {!isLast ? (
                            <span
                              className="my-2 min-h-[2.25rem] w-px shrink-0 bg-gradient-to-b from-orange-400/50 to-orange-400/15"
                              aria-hidden
                            />
                          ) : null}
                        </div>
                        <div
                          className={
                            isLast
                              ? "min-w-0 flex-1 pt-1"
                              : "min-w-0 flex-1 border-b border-white/[0.06] pb-8 pt-1"
                          }
                        >
                          <p className="text-base font-medium leading-snug text-white md:text-lg">
                            {item.text}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
              </ParallaxSection>
            </section>
          </div>
        </ScrollReveal>

        <ScrollReveal className="relative border-y border-white/10 bg-white/[0.03] py-20">
          <FloatingOrb
            className="absolute -left-48 top-1/4 h-[280px] w-[280px] rounded-full bg-orange-600/[0.05] blur-[90px]"
            speed={120}
          />
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
              <ParallaxSection offset={40}>
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-200/95">
                  <FileStack className="h-3.5 w-3.5" aria-hidden />
                  Entlastung
                </span>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
                  Wir kümmern uns um den Papierkram!
                </h2>
                <p className="mt-4 text-lg text-orange-50/85">
                  Anträge, Förderlogik und formale Anforderungen können
                  zeitraubend sein. Wir unterstützen Sie bei der{" "}
                  <strong className="font-semibold text-white">
                    strukturierten Vorbereitung
                  </strong>{" "}
                  des Vorhabens, der Leistungsbeschreibung und der Abstimmung
                  mit dem Förderrahmen – damit Sie sich auf Inhalt und Nutzen
                  konzentrieren können.
                </p>
                <p className="mt-4 text-orange-50/75">
                  Die Entscheidung über die Bewilligung liegt ausschließlich bei
                  der zuständigen Förderinstitution; wir ersetzen keine Rechts-
                  oder Steuerberatung.
                </p>
              </ParallaxSection>

              <ParallaxSection offset={55}>
              <Card className="border-white/10 bg-black/40 text-white shadow-xl shadow-orange-950/30">
                <CardHeader>
                  <div className="flex items-center gap-2 text-orange-200/90">
                    <Lightbulb className="h-5 w-5" aria-hidden />
                    <span className="text-sm font-medium uppercase tracking-wide">
                      Warum mit Amsel.io?
                    </span>
                  </div>
                  <CardTitle className="text-xl text-white">
                    Co-Innovation mit messbarem Mehrwert
                  </CardTitle>
                  <CardDescription className="text-orange-50/75">
                    Ihre Praxisanforderungen fließen in Produkt und Roadmap ein
                    – statt Einzelprojekte ohne Anschluss.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  {partnerBenefits.map((line) => (
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
              </ParallaxSection>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
            Werden Sie Co-Innovationspartner
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-orange-50/80">
            Sie sind KMU in Baden-Württemberg und möchten unsere Software mit
            uns weiterentwickeln? Schreiben Sie uns kurz Ihre Branche, ungefähre
            Unternehmensgröße und welche Funktionen oder Prozesse Sie
            adressieren möchten – wir melden uns mit den nächsten Schritten.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group">
              <Link href="#contact">
                Jetzt Kontakt aufnehmen
                <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <a
                href={OFFICIAL_PROGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Offizielle Programminfos (BW)
                <ExternalLink className="h-4 w-4 opacity-80" aria-hidden />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
