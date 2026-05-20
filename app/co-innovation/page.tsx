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
  ExternalLink,
  FileStack,
  Lightbulb,
} from "lucide-react";

const OFFICIAL_PROGRAM_URL =
  "https://wm.baden-wuerttemberg.de/de/innovation/innovationsgutscheine/innovationsgutschein-mittelstand-trifft-start-ups";

export const metadata: Metadata = {
  title: "Co-Innovation – Innovationsgutschein Mittelstand trifft Start-ups",
  description:
    "Kooperiere mit AMS Go über den Innovationsgutschein „Mittelstand trifft Start-ups“: bis zu 20.000 € Zuschuss (50 %) für innovative Erweiterungen unserer Software – für KMU in Baden-Württemberg.",
  alternates: {
    canonical: "https://Amsel.io/co-innovation",
  },
  openGraph: {
    title:
      "Co-Innovation – Innovationsgutschein Mittelstand trifft Start-ups | AMS Go",
    description:
      "Wir suchen Co-Innovationspartner in BW: Förderung mit bis zu 20.000 €, wir unterstützen beim Antrag.",
    url: "https://Amsel.io/co-innovation",
    locale: "de_DE",
  },
};

const partnerBenefits = [
  "Gemeinsam definieren wir ein innovatives Vorhaben: neue Funktionen, die deinen Alltag in Arbeitssicherheit und Compliance wirklich entlasten.",
  "Du bleibst strategischer Sparringspartner – wir liefern Produkt, Umsetzung und enge Abstimmung mit deinen Prozessen.",
  "Transparente Planung von Umfang, Meilensteinen und abrechenbaren Leistungen im Rahmen des Förderprogramms.",
];

export default function CoInnovationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative overflow-hidden bg-background text-foreground">
        <ParallaxBackground />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-background" aria-hidden />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-orange-100/50 via-transparent to-background" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl" />

        <CoInnovationHero />

        <ScrollReveal className="relative border-y border-border bg-muted/30 py-20">
          <FloatingOrb
            className="absolute -left-48 top-1/4 h-[280px] w-[280px] rounded-full bg-orange-600/[0.05] blur-[90px]"
            speed={120}
          />
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
              <ParallaxSection offset={40}>
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-700">
                  <FileStack className="h-3.5 w-3.5" aria-hidden />
                  Entlastung
                </span>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
                  Wir kümmern uns um den Papierkram!
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Anträge, Förderlogik und formale Anforderungen können
                  zeitraubend sein. Wir unterstützen dich bei der{" "}
                  <strong className="font-semibold text-foreground">
                    strukturierten Vorbereitung
                  </strong>{" "}
                  des Vorhabens, der Leistungsbeschreibung und der Abstimmung
                  mit dem Förderrahmen – damit du dich auf Inhalt und Nutzen
                  konzentrieren kannst.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Die Entscheidung über die Bewilligung liegt ausschließlich bei
                  der zuständigen Förderinstitution; wir ersetzen keine Rechts-
                  oder Steuerberatung.
                </p>
              </ParallaxSection>

              <ParallaxSection offset={55}>
              <Card className="border-border bg-card text-foreground shadow-xl shadow-orange-200/30">
                <CardHeader>
                  <div className="flex items-center gap-2 text-orange-700">
                    <Lightbulb className="h-5 w-5" aria-hidden />
                    <span className="text-sm font-medium uppercase tracking-wide">
                      Warum mit AMS Go?
                    </span>
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    Co-Innovation mit messbarem Mehrwert
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Deine Praxisanforderungen fließen in Produkt und Roadmap ein
                    – statt Einzelprojekte ohne Anschluss.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  {partnerBenefits.map((line) => (
                    <div key={line} className="flex gap-3 text-muted-foreground">
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
            Werde Co-Innovationspartner
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Du bist KMU in Baden-Württemberg und möchtest unsere Software mit
            uns weiterentwickeln? Schreib uns kurz deine Branche, ungefähre
            Unternehmensgröße und welche Funktionen oder Prozesse du
            adressieren möchtest – wir melden uns mit den nächsten Schritten.
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
              className="border-orange-300 bg-white text-foreground hover:bg-orange-50 hover:text-foreground"
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
