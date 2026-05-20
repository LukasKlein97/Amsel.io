"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CTAButtons } from "@/components/cta-buttons";
import {
  CheckCircle,
  FileText,
  Beaker,
  ClipboardList,
  UserPlus,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

const features = [
  {
    icon: FileText,
    title: "Gefährdungsbeurteilungen",
    description:
      "Gefährdungsbeurteilungen strukturiert erfassen, versionieren und mit individuellen Maßnahmen verzahnen.",
    href: "/module#gefaehrdungsbeurteilungen",
  },
  {
    icon: ClipboardList,
    title: "Betriebsanweisungen",
    description:
      "Betriebsanweisungen digital erstellen, verwalten und Mitarbeitern zugänglich machen. Versionierung für eine lückenlose Dokumentation.",
    href: "/module#betriebsanweisungen",
  },
  {
    icon: CheckCircle,
    title: "Begehungsprotokolle",
    description:
      "Mobile Checklisten, Fotodokumentation und Sofortzuweisung von Aufgaben direkt vom Werksgelände.",
    href: "/module#begehungsprotokolle",
  },
  {
    icon: FileText,
    title: "Aktionsplan",
    description:
      "Teamübergreifende Aktionspläne mit Prioritäten, Deadlines und Verantwortlichkeiten für alle Beteiligten.",
    href: "/module#aktionsplan",
  },
  {
    icon: UserPlus,
    title: "Besuchermanagement",
    description:
      "Besucher und Externe erfassen, verwalten und mit Sicherheitsunterweisungen sowie Zugangsberechtigungen verknüpfen.",
    href: "/module#besuchermanagement",
  },
  {
    icon: Beaker,
    title: "Gefahrstoffmanagement",
    description:
      "Gefahrstoffe revisionssicher verwalten, Sicherheitsdatenblätter synchronisieren und Freigaben steuern.",
    href: "/module#gefahrstoffmanagement",
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

export function ModuleSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-background py-24 text-foreground"
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
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Unsere Module
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Beginne mit genau dem Modul, das du heute brauchst, und erweitere
            flexibel Schritt für Schritt – wenn neue Aufgaben dazukommen, ohne
            Umstellung und ohne Ballast.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons />
          </div>
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
              <Link href={feature.href} className="block h-full">
                <Card className="group relative h-full overflow-hidden border border-border bg-card shadow-xl shadow-orange-200/40 transition transform-gpu hover:border-orange-300 hover:bg-orange-50/60 hover:shadow-orange-300/50">
                  <CardHeader className="flex flex-col gap-4">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-200 bg-orange-100"
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

                    <div className="flex flex-col gap-2">
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <CardDescription className="text-sm text-muted-foreground md:text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
