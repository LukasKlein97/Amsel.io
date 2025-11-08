"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  FileText,
  BarChart3,
  AlertTriangle,
  Beaker,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

const features = [
  {
    icon: FileText,
    title: "Gefährdungsbeurteilungen (GBU)",
    description:
      "Gefährdungsbeurteilungen strukturiert erfassen, versionieren und mit individuellen Maßnahmen verzahnen.",
    accent: "Dokumentation",
  },
  {
    icon: CheckCircle,
    title: "Begehungsprotokolle",
    description:
      "Mobile Checklisten, Fotodokumentation und Sofortzuweisung von Aufgaben direkt vom Werksgelände.",
    accent: "Mobil",
  },
  {
    icon: FileText,
    title: "Aktionsplan",
    description:
      "Teamübergreifende Aktionspläne mit Prioritäten, Deadlines und Live-Status für alle Beteiligten.",
    accent: "Koordination",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "Dashboards und Trendanalysen, die Fortschritt, Risiken und Compliance auf einen Blick sichtbar machen.",
    accent: "Insights",
  },
  {
    icon: Beaker,
    title: "Gefahrstoffmanagement",
    description:
      "Gefahrstoffe revisionssicher verwalten, Sicherheitsdatenblätter synchronisieren und Freigaben steuern.",
    accent: "Labor",
    comingSoon: true,
  },
  {
    icon: AlertTriangle,
    title: "Unfall Management",
    description:
      "Unfälle und Beinahe-Vorfälle minutenschnell erfassen, analysieren und mit Präventionsmaßnahmen verknüpfen.",
    accent: "Safety",
    comingSoon: true,
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
      type: "spring",
      stiffness: 220,
      damping: 28,
    },
  },
};

export function ModuleSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="features"
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
          transition={{ type: "spring", stiffness: 180, damping: 26 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-emerald-200/80">
            Module
          </span>
          <h2 className="mt-6 text-3xl font-semibold leading-tight md:text-4xl">
            Das modulare Sicherheitsökosystem für Ihre Branche
          </h2>
          <p className="mt-4 text-base text-slate-200/80 md:text-lg">
            Jedes Modul lässt sich flexibel kombinieren, sodass Sie genau den
            Funktionsumfang nutzen, den Ihr Unternehmen im Alltag braucht –
            heute und in Zukunft.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {features.map((feature, index) => (
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
              <Card className="group relative h-full overflow-hidden border border-white/10 bg-white/5 shadow-xl shadow-emerald-950/30 backdrop-blur-2xl transition transform-gpu hover:border-emerald-200/40 hover:bg-white/10 hover:shadow-emerald-700/40">
                {feature.comingSoon && (
                  <div className="absolute right-6 top-6 rounded-full border border-white/30 bg-emerald-400/30 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white">
                    Bald verfügbar
                  </div>
                )}

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
                    <CardTitle className="text-xl font-semibold text-white">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="pb-6">
                  <CardDescription className="text-sm text-emerald-50/80 md:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
