"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CircleDollarSign,
  Euro,
  ExternalLink,
  MapPin,
  Route,
  Scale,
  Sparkles,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const OFFICIAL_PROGRAM_URL =
  "https://wm.baden-wuerttemberg.de/de/innovation/innovationsgutscheine/innovationsgutschein-mittelstand-trifft-start-ups";

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
  {
    step: 5,
    text: "Auszahlung durch das Land",
  },
] as const;

export function CoInnovationHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[250vh] overflow-hidden pb-20 pt-32 lg:pt-44"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <motion.div
          className="absolute inset-0"
          style={
            reduceMotion
              ? undefined
              : {
                  y: bgY,
                  scale: bgScale,
                }
          }
        >
          <Image
            src="/images/co-innovation-hero.png"
            alt=""
            fill
            priority
            className="object-cover object-[82%_62%] opacity-[0.35] sm:opacity-[0.4] md:object-[78%_58%] md:opacity-[0.45]"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-white from-[6%] via-white/90 via-[40%] to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/80" />
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/40 via-transparent to-transparent" />
        {/* Sanfter Fade am unteren Rand in den schwarzen Bereich */}
        <div
          className="absolute inset-x-0 bottom-0 h-[35vh] min-h-[280px] bg-gradient-to-t from-background via-background/80 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs uppercase tracking-[0.35em] text-orange-700 backdrop-blur-[2px]"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 28,
            delay: reduceMotion ? 0 : 0.05,
          }}
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          Co-Innovation
        </motion.div>

        <motion.h1
          className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3rem]"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 28,
            delay: reduceMotion ? 0 : 0.12,
          }}
        >
          Gemeinsam innovieren – mit dem Innovationsgutschein „Mittelstand trifft
          Start-ups“
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 28,
            delay: reduceMotion ? 0 : 0.2,
          }}
        >
          Wir suchen{" "}
          <strong className="font-semibold text-orange-700">
            Co-Innovationspartner
          </strong>
          , um unsere Software um innovative Funktionalitäten zu erweitern –
          maßgeschneidert auf Ihre Anforderungen und die Ihrer Branche. Gefördert
          wird die Zusammenarbeit etablierter KMU mit Start-ups über das
          Programm des Landes Baden-Württemberg.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 28,
            delay: reduceMotion ? 0 : 0.28,
          }}
        >
          <Button asChild size="lg" className="group">
            <Link href="#contact">
              Als Co-Innovator melden
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-orange-300 bg-white/80 text-foreground backdrop-blur-sm hover:bg-orange-50 hover:text-foreground"
          >
            <a
              href={OFFICIAL_PROGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Programm des Landes BW
              <ExternalLink className="h-4 w-4 opacity-80" aria-hidden />
            </a>
          </Button>
        </motion.div>

        {/* Das Wichtigste auf einen Blick – auf dem Bildhintergrund */}
        <div className="relative mt-16 w-full space-y-6 lg:mt-24">
          <h2 className="w-full text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Das Wichtigste auf einen Blick
          </h2>
          <p className="w-full text-muted-foreground">
            Die folgenden Kriterien und Zahlen stammen aus der{" "}
            <a
              href={OFFICIAL_PROGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-700 underline-offset-4 hover:text-orange-600 hover:underline"
            >
              Darstellung des Ministeriums für Wirtschaft, Arbeit und Tourismus
              Baden-Württemberg
            </a>
            . Endgültige Förderfähigkeit prüft die zuständige Stelle im
            Einzelfall.
          </p>

          <div className="w-full space-y-6">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                Wer wird gefördert?
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-orange-800">
                  Antragsberechtigt sind kleine und mittlere Unternehmen (KMU)
                  der gewerblichen Wirtschaft oder der Freien Berufe
                </strong>{" "}
                – mit allen unten genannten Größen- und Standortkriterien.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {eligibilityTiles.map((tile) => (
                <div
                  key={tile.label}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card backdrop-blur-sm p-4 shadow-lg shadow-orange-200/30 ring-1 ring-orange-400/15 sm:p-5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/25 bg-orange-500/15">
                    <tile.icon
                      className="h-5 w-5 text-orange-600"
                      aria-hidden
                    />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-orange-700">
                    {tile.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-foreground md:text-lg xl:text-xl">
                    {tile.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {tile.hint}
                  </p>
                </div>
              ))}
            </div>

            <p className="w-full rounded-xl border border-orange-200 bg-orange-50/80 backdrop-blur-sm px-4 py-3 text-sm leading-relaxed text-muted-foreground">
              <strong className="text-orange-800">Zusammenspiel:</strong> Die
              Mitarbeitergrenze (max.&nbsp;250 Vollzeitäquivalente) gilt{" "}
              <strong className="text-foreground">zusammen mit</strong> einer der
              beiden finanziellen Obergrenzen im Vorjahr:{" "}
              <strong className="text-foreground">entweder</strong> Umsatz bis
              50&nbsp;Mio.&nbsp;€ <strong className="text-foreground">oder</strong>{" "}
              Bilanzsumme bis 43&nbsp;Mio.&nbsp;€ – jeweils laut
              Programmbeschreibung des Landes.
            </p>
          </div>
        </div>

        {/* Wie hoch ist die Förderung? – auf dem Bildhintergrund */}
        <div className="relative mt-12 space-y-6 lg:mt-16">
          <Card className="w-full border-orange-300 bg-card backdrop-blur-md shadow-xl shadow-orange-200/30 ring-1 ring-orange-400/20">
            <CardHeader className="px-6 pt-6">
              <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/25 bg-orange-500/15">
                <Euro className="h-5 w-5 text-orange-600" />
              </div>
              <CardTitle className="text-xl text-foreground">
                Wie hoch ist die Förderung?
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Zuschuss für den Erwerb von Leistungen des Start-ups
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pb-6 text-muted-foreground">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-orange-50/60 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-orange-600">
                    Zuschuss
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">
                    bis 20.000&nbsp;€
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Maximale Förderung pro Vorhaben
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-orange-50/60 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-orange-600">
                    Fördersatz
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">
                    50&nbsp;%
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Anteilige Finanzierung der förderfähigen Kosten
                  </p>
                </div>
              </div>
              <p className="rounded-xl border border-border bg-orange-50/60 p-4 text-sm leading-relaxed md:text-base">
                <strong className="font-semibold text-foreground">
                  Was wir über den Gutschein abbilden können:
                </strong>{" "}
                Im förderfähigen Vorhaben können wir{" "}
                <strong className="text-orange-800">
                  eine individuelle, maßgeschneiderte Anpassung
                </strong>{" "}
                und/oder die{" "}
                <strong className="text-orange-800">
                  normalen Software-Lizenzkosten für zwei Jahre
                </strong>{" "}
                strukturiert als Leistungen von uns (Start-up) abbilden –
                abgestimmt auf Ihre Nutzung und im Rahmen der Programmvorgaben.
              </p>
              <p className="rounded-xl border border-orange-300 bg-orange-100/80 p-4 text-base leading-relaxed text-foreground">
                <strong className="font-semibold text-foreground">
                  Beispiel:
                </strong>{" "}
                Projektvolumen{" "}
                <strong className="text-orange-800">40.000&nbsp;€</strong> →
                Zuschuss{" "}
                <strong className="text-orange-800">20.000&nbsp;€</strong>{" "}
                zurück – die Hälfte der förderfähigen Ausgaben (im Rahmen der
                Programmregeln).
              </p>
              <p className="text-sm text-muted-foreground">
                Gefördert werden Kosten für vom Start-up erbrachte
                Dienstleistungen oder gelieferte Produkte im Rahmen eines
                innovativen Vorhabens; Details und Antrag über die L-Bank bzw.
                das Förderportal des Programms.
              </p>
            </CardContent>
          </Card>

          <p
            className="w-full rounded-2xl border border-orange-300 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-5 text-center text-lg font-semibold leading-snug tracking-tight text-white shadow-lg shadow-orange-300/40 ring-1 ring-orange-400/30 md:px-8 md:py-6 md:text-2xl lg:text-[1.65rem]"
            role="note"
          >
            Sparen Sie{" "}
            <strong className="font-semibold text-orange-50">
              50&nbsp;%
            </strong>{" "}
            der Kosten und bekommen bis zu{" "}
            <strong className="font-semibold text-orange-50">
              20.000&nbsp;€
            </strong>{" "}
            zurück.
          </p>

          <motion.div className="w-full rounded-2xl border border-border bg-card p-6 shadow-lg shadow-orange-200/30 ring-1 ring-orange-400/15 md:p-8">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/25 bg-orange-500/15">
                <Route className="h-5 w-5 text-orange-600" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                  Roadmap / Zeitleiste
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
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
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-orange-400/45 bg-orange-100 text-sm font-semibold tabular-nums text-orange-800">
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
                          : "min-w-0 flex-1 border-b border-border pb-8 pt-1"
                      }
                    >
                      <p className="text-base font-medium leading-snug text-foreground md:text-lg">
                        {item.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
