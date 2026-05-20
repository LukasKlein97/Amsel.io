"use client";

import { CTAButtons } from "@/components/cta-buttons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, Sparkles, FileText, ClipboardList } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

export function AISection() {
  const shouldReduceMotion = useReducedMotion();
  const aiFeatures = [
    {
      icon: Sparkles,
      title: "KI-generierte\nGefährdungsfaktoren",
      description:
        'Erweitere bestehende Gefährdungsbeurteilungen automatisch:\nFormuliere ein Szenario (z.B. "Gefahren auf dem Parkplatz") und die KI generiert relevante Gefährdungsfaktoren inklusive Situationsbeschreibungen und passender Schutzmaßnahmen.',
      features: [
        "Prompt-basierte Generierung von Gefährdungsfaktoren",
        "Situationsbeschreibungen und Schutzmaßnahmen",
        "Selektive Übernahme in die GBU",
      ],
      example:
        'Prompt: "Gefahren auf dem Parkplatz" → KI generiert relevante Gefährdungsfaktoren → du wählst aus, welche in die GBU übernommen werden',
      accent: "Gefährdungsbeurteilungen",
    },
    {
      icon: FileText,
      title: "Automatische\nDatenblatt-Erfassung",
      description:
        "Die KI liest automatisch alle notwendigen Informationen aus Sicherheitsdatenblättern aus und überführt sie direkt ins System. Du musst nur noch bestätigen und siehst dabei genau, aus welcher Stelle im Datenblatt welche Information gezogen wurde.",
      features: [
        "Automatisches Auslesen von Sicherheitsdatenblättern",
        "Direkte Überführung ins System",
        "Quellenangabe für jede Information",
        "Überprüfung der Informationen direkt im Dokument",
      ],
      example:
        "Sicherheitsdatenblatt hochladen → KI extrahiert alle relevanten Informationen → du bestätigst die Übernahme → System zeigt Quellenangaben",
      accent: "Gefahrstoffmanagement",
      soon: false,
    },
    {
      icon: ClipboardList,
      title: "KI-generierte\nBetriebsanweisungen",
      description:
        "Erstelle vollständige Betriebsanweisungen mit nur einer Beschreibung: Die KI generiert automatisch alle erforderlichen Inhalte, angepasst an die gewählte Kategorie.",
      features: [
        "Automatische Generierung von Gefahren und Schutzmaßnahmen",
        "Intelligente Auswahl passender Warn-, Verbots- und Gebotszeichen",
        "Erstellung von Verhaltensregeln und Erste-Hilfe-Maßnahmen",
        "Kategoriebezogene Anpassung (Gefahrstoffe, Brandschutz, etc.)",
      ],
      example:
        "Beschreibung eingeben → Kategorie wählen → KI erstellt vollständige Betriebsanweisung → du prüfst und bestätigst",
      accent: "Betriebsanweisungen",
      soon: false,
    },
  ];

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.25,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
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

  return (
    <section
      id="ki-features"
      className="relative scroll-mt-28 overflow-hidden bg-background py-24 text-foreground"
    >
      <div className="absolute inset-x-0 top-[-20%] -z-10 h-[480px] bg-[radial-gradient(circle,_rgba(25,159,103,0.2)_0%,_transparent_65%)]" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute right-[-10%] top-[30%] -z-10 h-[280px] w-[280px] rounded-full bg-orange-400/10 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as const, stiffness: 180, damping: 26 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-xs uppercase tracking-[0.4em] text-orange-700">
            KI-Features
          </span>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Brain className="h-10 w-10 text-orange-600" />
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              KI-gestützte Arbeitsschutz-Lösungen
            </h2>
          </div>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Nutze künstliche Intelligenz, um Gefährdungsbeurteilungen und
            Begehungen effizienter und präziser durchzuführen. Unsere
            KI-Features vereinfachen deine Arbeitsschutz-Prozesse erheblich.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 items-stretch"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.04,
                      y: -6,
                      transition: { duration: 0.18, ease: "easeOut" },
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : { scale: 0.98, transition: { duration: 0.1 } }
              }
            >
              <Card className="group relative h-full flex flex-col overflow-hidden border border-border bg-card shadow-xl shadow-orange-200/40 transition transform-gpu hover:border-orange-300 hover:bg-orange-50/60 hover:shadow-orange-300/50">
                <CardHeader className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-200 bg-orange-100 flex-shrink-0"
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              rotate: [-1.4, 1.4, -1.4],
                              y: [0, -3, 0],
                            }
                      }
                      transition={
                        shouldReduceMotion
                          ? undefined
                          : {
                              repeat: Infinity,
                              repeatType: "mirror",
                              duration: 5.8,
                              delay: index * 0.35,
                            }
                      }
                    >
                      <feature.icon className="h-6 w-6 text-orange-700" />
                    </motion.div>
                    {feature.soon && (
                      <span className="inline-flex w-fit items-center rounded-full border border-amber-400/40 bg-amber-400/30 px-3 py-1 text-xs uppercase tracking-[0.3em] text-amber-200">
                        Bald verfügbar
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="inline-flex w-fit items-center rounded-full border border-orange-300 bg-orange-100 px-3 py-1 text-xs uppercase tracking-[0.3em] text-orange-800">
                        {feature.accent}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground whitespace-pre-line">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 pb-6 flex-1 flex flex-col">
                  <CardDescription className="text-sm text-muted-foreground md:text-base whitespace-pre-line">
                    {feature.description}
                  </CardDescription>

                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-orange-900 mb-4 uppercase tracking-wide">
                      Hauptfunktionen:
                    </h4>
                    <ul className="space-y-3">
                      {feature.features.map((feat, featIndex) => (
                        <li
                          key={featIndex}
                          className="text-sm text-muted-foreground flex items-center group/item"
                        >
                          <div className="w-2 h-2 rounded-full bg-orange-400 mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-orange-400/10 rounded-xl p-5 border border-orange-200/20">
                    <h4 className="text-sm font-bold text-orange-900 mb-3 uppercase tracking-wide">
                      Beispiel:
                    </h4>
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      &ldquo;{feature.example}&rdquo;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            type: "spring" as const,
            stiffness: 180,
            damping: 26,
            delay: 0.3,
          }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-orange-100/60 p-10 shadow-xl shadow-orange-200/40">
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange-200/40 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-orange-100/60 blur-2xl" />

            <div className="relative z-10">
              <h3 className="mb-6 text-3xl font-bold text-foreground">
                Revolutioniere deinen Arbeitsschutz mit KI
              </h3>
              <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Spare wertvolle Zeit bei der Durchführung von
                Gefährdungsbeurteilungen und Begehungen. Unsere KI unterstützt
                dich bei der Identifikation von Risiken und schlägt automatisch
                passende Schutzmaßnahmen vor.
              </p>
              <CTAButtons className="justify-center" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
