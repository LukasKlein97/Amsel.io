"use client";

import Image from "next/image";
import {
  Award,
  Building2,
  Handshake,
  Rocket,
  Sparkles,
  Tags,
  Users,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const milestones = [
  {
    date: "März 2025",
    step: "01",
    title: "Erstes Treffen der Gründer",
    description:
      "Die Idee für AMS Go entsteht aus der Praxis: Arbeitsschutz und moderne Software zusammenbringen.",
    icon: Handshake,
    accent: "from-orange-400/20 to-orange-600/5",
  },
  {
    date: "August 2025",
    step: "02",
    title: "Gründung der GmbH",
    description:
      "Die Firma wird als AMS Cockpit GmbH gegründet – mit dem Anspruch, digitale Arbeitssicherheit zugänglich zu machen.",
    icon: Building2,
    accent: "from-orange-400/20 to-orange-600/5",
  },
  {
    date: "Februar 2026",
    step: "03",
    title: "CyberLab Accelerator",
    description:
      "Wir sind Teil des CyberLab Accelerators des CyberForum – mit Mentoring, Netzwerk und Fokus auf den Aufbau unseres Start-ups.",
    icon: Zap,
    accent: "from-orange-400/20 to-orange-600/5",
  },
  {
    date: "März 2026",
    step: "04",
    title: "Produktiver Start erste Kunden",
    description:
      "Die ersten Kunden nutzen AMS Go produktiv – von Gefährdungsbeurteilungen bis Begehungsprotokollen.",
    icon: Rocket,
    accent: "from-orange-400/20 to-orange-600/5",
  },
  {
    date: "Mai 2026",
    step: "05",
    title: "Start-up BW Pre-Seed Zusage",
    description:
      "AMS Go erhält eine Förderzusage im Programm Start-up BW Pre-Seed der L-Bank – dem baden-württembergischen Förderinstrument für die frühe Gründungsphase.",
    detail:
      "Als Start-up BW Pre-Seed Partner begleitet uns die Hoepfner HI-TECH Beteiligungs GmbH. Neben der Finanzierung des Landes unterstützen die Programmpartner beim Geschäftsmodell, beim Unternehmensaufbau und bei der Suche nach Ko-Investoren.",
    icon: Award,
    accent: "from-amber-400/20 to-orange-500/5",
    highlight: true,
  },
  {
    date: "Juni 2026",
    step: "06",
    title: "Renaming zu AMS Go",
    description:
      "Aus der AMS Cockpit GmbH wird AMS Go – der Name spiegelt unseren Fokus auf die zentrale Plattform für modernen Arbeitsschutz wider.",
    icon: Tags,
    accent: "from-orange-400/20 to-orange-600/5",
  },
  {
    date: "Oktober 2026",
    step: "07",
    title: "Gründer gehen Vollzeit",
    description:
      "Alle Gründer arbeiten ab Oktober 2026 Vollzeit für AMS Go – mit vollem Fokus auf Produkt, Kunden und Wachstum.",
    icon: Users,
    accent: "from-orange-400/20 to-orange-600/5",
  },
];

const partners = [
  {
    name: "CyberForum",
    src: "/partner-cyberforum.png",
    href: "https://www.cyberforum.de/",
    width: 260,
    height: 188,
  },
  {
    name: "CyberLab",
    src: "/partner-cyberlab-rgb.png",
    href: "https://www.cyberlab-karlsruhe.de/",
    width: 213,
    height: 188,
  },
  {
    name: "DHBW",
    src: "/partner-dhbw.png",
    href: "https://www.dhbw.de/",
    width: 240,
    height: 100,
  },
];

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 220,
      damping: 28,
    },
  },
};

function TimelineCard({
  milestone,
  shouldReduceMotion,
}: {
  milestone: (typeof milestones)[number];
  shouldReduceMotion: boolean | null;
}) {
  const Icon = milestone.icon;

  return (
    <motion.div
      variants={item}
      whileHover={
        shouldReduceMotion
          ? undefined
          : { y: -4, transition: { duration: 0.2 } }
      }
      className="relative min-w-0"
    >
      <Card
        className={cn(
          "group relative overflow-hidden border bg-card/95 shadow-lg shadow-orange-200/25 backdrop-blur-sm transition-all duration-300 hover:border-orange-300 hover:shadow-orange-300/40",
          milestone.highlight
            ? "border-orange-300/70 ring-1 ring-orange-200/60"
            : "border-border",
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-80",
            milestone.accent,
          )}
        />
        <span className="pointer-events-none absolute right-6 top-4 select-none text-6xl font-bold leading-none text-orange-500/10">
          {milestone.step}
        </span>

        <CardContent className="relative p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50 to-orange-100 shadow-inner shadow-orange-200/40 transition group-hover:scale-105">
              <Icon className="h-5 w-5 text-orange-700" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="inline-flex rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-orange-800 backdrop-blur-sm md:hidden">
                {milestone.date}
              </span>
              <h2 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl md:mt-0">
                {milestone.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {milestone.description}
              </p>
              {"detail" in milestone && milestone.detail && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90 sm:text-base">
                  {milestone.detail}
                </p>
              )}
              {milestone.highlight && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-800">
                  <Sparkles className="h-3.5 w-3.5" />
                  Meilenstein erreicht
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function UeberUnsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Unternehmen / Zeitsstrahl */}
      <section className="relative overflow-hidden bg-background py-24 text-foreground">
        <div className="absolute inset-x-0 top-[-20%] -z-10 h-[480px] bg-[radial-gradient(circle,_rgba(25,159,103,0.2)_0%,_transparent_65%)]" />
        <div className="absolute bottom-0 left-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring" as const,
              stiffness: 180,
              damping: 26,
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs uppercase tracking-[0.4em] text-orange-700">
              Unternehmen
            </span>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Building2 className="h-10 w-10 text-orange-600" />
              <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
                Unsere Geschichte
              </h1>
            </div>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Von der ersten Gründeridee bis zu unserem Produktiver Start – AMS
              Go entwickelt sich Schritt für Schritt zu einer Plattform für
              modernen Arbeitsschutz.
            </p>
          </motion.div>

          <div className="relative max-w-4xl">
            {/* Vertikale Achse */}
            <div className="absolute bottom-4 left-[1.125rem] top-4 w-px sm:left-[6.875rem] md:left-[8.625rem]">
              <div className="h-full w-full bg-gradient-to-b from-transparent via-orange-400/70 to-orange-300/20" />
              <div className="absolute inset-0 w-full bg-gradient-to-b from-orange-500/0 via-orange-400/40 to-orange-500/0 blur-sm" />
            </div>

            <motion.div
              className="relative space-y-8 md:space-y-10"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {milestones.map((milestone) => {
                const [month, year] = milestone.date.split(" ");

                return (
                  <div
                    key={milestone.date}
                    className="grid grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-x-3 sm:grid-cols-[5.5rem_2.75rem_minmax(0,1fr)] sm:gap-x-4 md:grid-cols-[7rem_3.25rem_minmax(0,1fr)] md:gap-x-6"
                  >
                    {/* Zeitpunkt links */}
                    <motion.div
                      variants={item}
                      className="hidden text-right sm:col-start-1 sm:block"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-700/80 md:text-sm">
                        {month}
                      </span>
                      <span className="mt-1 block text-3xl font-bold tabular-nums text-orange-200 md:text-4xl">
                        {year}
                      </span>
                    </motion.div>

                    {/* Marker auf der Achse */}
                    <motion.div
                      variants={item}
                      className="relative z-10 col-start-1 flex justify-center sm:col-start-2"
                    >
                      <div className="relative flex h-9 w-9 items-center justify-center">
                        <span className="absolute inset-0 rounded-full bg-orange-400/25 blur-md" />
                        <span className="absolute inset-1 rounded-full border-4 border-background bg-orange-500 shadow-lg shadow-orange-500/40" />
                        <span className="relative text-[10px] font-bold text-white">
                          {milestone.step}
                        </span>
                      </div>
                    </motion.div>

                    {/* Card rechts */}
                    <div className="col-start-2 min-w-0 sm:col-start-3">
                      <TimelineCard
                        milestone={milestone}
                        shouldReduceMotion={shouldReduceMotion}
                      />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gründer – vorübergehend ausgeblendet
      <section className="relative border-y border-border bg-muted/30 py-24 text-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              type: "spring" as const,
              stiffness: 180,
              damping: 26,
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs uppercase tracking-[0.4em] text-orange-700">
              Gründer
            </span>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Users className="h-10 w-10 text-orange-600" />
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Das Team hinter AMS Go
              </h2>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 space-y-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              type: "spring" as const,
              stiffness: 180,
              damping: 26,
            }}
          >
            <Card className="border border-border bg-card shadow-lg shadow-orange-200/20">
              <CardContent className="space-y-5 p-8">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-orange-700">
                    Ingenieurbüro für Arbeitssicherheit
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground">
                    Kim Marius Gräfe
                  </h3>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Ihr Betrieb und Ihre Mitarbeiter sind es wert, dass
                    Arbeitssicherheit und Gesundheitsschutz nicht nur
                    gesetzliche Pflichten sind, sondern nach den individuellen
                    Erfordernissen gelebt werden können – rechtskonform und
                    verständlich.
                  </p>
                  <p>
                    Als freiberuflicher Sicherheitsingenieur und Fachkraft für
                    Arbeitssicherheit sowie als Brandschutzbeauftragter bin ich
                    Ihr regionaler Ansprechpartner im Märkischen Kreis und
                    Oberbergischen Kreis – sowie deutschlandweit über die
                    Grenzen von Nordrhein-Westfalen hinaus.
                  </p>
                  <p>
                    Erfahren Sie mehr über mich und über meine Motivation als
                    Ihr Dienstleister. Gerne unterbreite ich Ihnen ein Angebot
                    meiner Leistungen. Bitte nehmen Sie Kontakt auf.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card/80 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold text-foreground">
                  Weitere Gründer
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Die weiteren Gründer von AMS Go bringen langjährige Erfahrung
                  aus Großkonzernen mit und verfügen über tiefgreifendes
                  Software-Entwicklungs-Know-how. Gemeinsam verbinden wir
                  praxisnahe Arbeitssicherheit mit skalierbarer, moderner
                  Technologie – damit Unternehmen Compliance und Effizienz in
                  einer Plattform vereinen können.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      */}

      {/* Partner – größere Logos */}
      <section className="relative overflow-hidden bg-background py-24 text-foreground">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle,_rgba(25,159,103,0.12)_0%,_transparent_65%)]" />

        <div className="container mx-auto px-4">
          <div className="mb-14 text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs uppercase tracking-[0.4em] text-orange-700">
              Partner
            </span>
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Partner und Kooperationen
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Wir arbeiten mit führenden Organisationen zusammen, um digitalen
              Arbeitsschutz voranzutreiben.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-14 lg:gap-20 xl:gap-28">
            {partners.map((partner) => (
              <motion.a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-36 min-w-[14rem] items-center justify-center rounded-xl bg-white p-6 opacity-90 transition-all duration-300 hover:scale-105 hover:opacity-100"
                whileHover={
                  shouldReduceMotion ? undefined : { scale: 1.05, y: -2 }
                }
              >
                <Image
                  src={partner.src}
                  alt={`${partner.name} Logo`}
                  width={partner.width}
                  height={partner.height}
                  className="h-full w-auto max-w-full object-contain"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
