"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, Camera, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

// Separate client component for the AI features button
function AIFeaturesButton() {
  const handleClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button size="lg" className="text-lg" onClick={handleClick}>
      KI-Features entdecken
    </Button>
  );
}

export function AISection() {
  const shouldReduceMotion = useReducedMotion();
  const aiFeatures = [
    {
      icon: Camera,
      title: "Foto-basierte\nRisikoerkennung",
      description:
        "Automatische Erkennung von\nGefährdungsfaktoren und\nVorschlag von Schutzmaßnahmen.",
      features: [
        "Bildanalyse mit KI",
        "Automatische Risikofaktor-Zuordnung",
        "Intelligente Schutzmaßnahmen",
      ],
      example:
        "Foto einer Lagersituation → KI erkennt einen zugestellten Feuerlöscher",
      accent: "Gefährdungsbeurteilungen",
    },
    {
      icon: FileText,
      title: "Chatten mit\nSicherheitsdatenblättern",
      description:
        "Erhalten Sie Informationen direkt per Chat, ohne Sicherheitsdatenblätter aufwendig selbst durchforsten zu müssen und sparen Sie wertvolle Zeit.",
      features: [
        "Direkter Chat-Zugriff auf Sicherheitsdatenblätter",
        "Automatische Informationssuche",
        "Quellenangabe direkt im Dokument ohne langes Suchen",
      ],
      example:
        "Fragen Sie einfach: 'Welchen Schutzhandschuh muss ich beim Umgang mit dem Gefahrstoff tragen?' → Die KI antwortet",
      accent: "Gefahrstoffmanagement",
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
      id="ai-section"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      <div className="absolute inset-x-0 top-[-20%] -z-10 h-[480px] bg-[radial-gradient(circle,_rgba(16,185,129,0.25)_0%,_transparent_65%)]" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute right-[-10%] top-[30%] -z-10 h-[280px] w-[280px] rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as const, stiffness: 180, damping: 26 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-emerald-200/80">
            KI-Features
          </span>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Brain className="h-10 w-10 text-emerald-200" />
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              KI-gestützte Arbeitsschutz-Lösungen
            </h2>
          </div>
          <p className="mt-4 text-base text-slate-200/80 md:text-lg">
            Nutzen Sie künstlicher Intelligenz, um Gefährdungsbeurteilungen und
            Begehungen effizienter und präziser durchzuführen. Unsere
            KI-Features vereinfachen Ihre Arbeitsschutz-Prozesse erheblich.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-stretch"
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
              <Card className="group relative h-full flex flex-col overflow-hidden border border-white/10 bg-white/5 shadow-xl shadow-emerald-950/30 backdrop-blur-2xl transition transform-gpu hover:border-emerald-200/40 hover:bg-white/10 hover:shadow-emerald-700/40">
                <CardHeader className="flex flex-col gap-4">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100/40 bg-emerald-400/30"
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
                    <feature.icon className="h-6 w-6 text-white" />
                  </motion.div>

                  <div className="flex flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full border border-white/40 bg-emerald-400/30 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white">
                      {feature.accent}
                    </span>
                    <CardTitle className="text-xl font-semibold text-white whitespace-pre-line">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 pb-6 flex-1 flex flex-col">
                  <CardDescription className="text-sm text-emerald-50/80 md:text-base whitespace-pre-line">
                    {feature.description}
                  </CardDescription>

                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">
                      Hauptfunktionen:
                    </h4>
                    <ul className="space-y-3">
                      {feature.features.map((feat, featIndex) => (
                        <li
                          key={featIndex}
                          className="text-sm text-emerald-50/80 flex items-center group/item"
                        >
                          <div className="w-2 h-2 rounded-full bg-emerald-400 mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-emerald-400/10 rounded-xl p-5 border border-emerald-200/20">
                    <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">
                      Beispiel:
                    </h4>
                    <p className="text-sm text-emerald-50/80 italic leading-relaxed">
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
          <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 p-10 rounded-3xl overflow-hidden group">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/50 via-emerald-500/50 to-teal-600/50 animate-pulse"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000 delay-300"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Revolutionieren Sie Ihren Arbeitsschutz mit KI
              </h3>
              <p className="text-emerald-50 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Sparen Sie wertvolle Zeit bei der Durchführung von
                Gefährdungsbeurteilungen und Begehungen. Unsere KI unterstützt
                Sie bei der Identifikation von Risiken und schlägt automatisch
                passende Schutzmaßnahmen vor.
              </p>
              <AIFeaturesButton />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
