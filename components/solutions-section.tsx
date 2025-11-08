"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ShieldCheck,
  FileText,
  Code,
  Database,
  Cloud,
  Server,
  Settings,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

// Separate client component for the consultation button
function ConsultationButton() {
  const handleClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button size="lg" className="text-lg" onClick={handleClick}>
      Kostenlose Beratung vereinbaren
    </Button>
  );
}

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

export function SolutionsSection() {
  const shouldReduceMotion = useReducedMotion();

  const integrations = [
    {
      icon: ShieldCheck,
      title: "SSO / Active Directory",
      description:
        "Nahtlose Integration in Ihre bestehende Authentifizierungsinfrastruktur.",
      isOptional: false,
    },
    {
      icon: FileText,
      title: "Dokumentenübertragung",
      description:
        "Übertragung bestehender Dokumente in unser System für einen reibungslosen Start.",
      isOptional: false,
    },
    {
      icon: Code,
      title: "API-Zugriff",
      description:
        "Vollständiger Zugriff auf Daten per API für Ihre eigenen Anwendungen und Workflows.",
      isOptional: false,
    },
    {
      icon: Database,
      title: "On-Premise Datenbank",
      description:
        "Optional: Hosting der Datenbank in Ihrer eigenen Serverlandschaft.",
      isOptional: true,
    },
    {
      icon: Cloud,
      title: "Eigene Storage-Lösungen",
      description:
        "Optional: Einbindung von Azure Storage, AWS S3, SharePoint und anderen Storage-Lösungen.",
      isOptional: true,
    },
    {
      icon: Server,
      title: "On-Premise Hosting",
      description:
        "Optional: Hosting der gesamten Lösung in Ihrer eigenen Serverlandschaft.",
      isOptional: true,
    },
    {
      icon: Settings,
      title: "Individuelle Anpassungen",
      description:
        "Maßgeschneiderte Features und Anpassungen nach Ihren spezifischen Anforderungen.",
      isOptional: false,
    },
  ];

  return (
    <section
      id="solutions"
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
            Integration
          </span>
          <h2 className="mt-6 text-3xl font-semibold leading-tight md:text-4xl">
            Integration in bestehende Infrastruktur
          </h2>
          <p className="mt-4 text-base text-slate-200/80 md:text-lg">
            AMS integriert sich nahtlos in Ihre bestehende IT-Infrastruktur und
            bietet flexible Lösungen für größere Unternehmen.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {integrations.map((integration, index) => {
            const isLast = index === integrations.length - 1;
            return (
              <motion.div
                key={integration.title}
                variants={item}
                className={isLast ? "md:col-span-2 xl:col-span-3" : ""}
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
                  {integration.isOptional && (
                    <div className="absolute right-6 top-6 rounded-full border border-white/30 bg-emerald-400/30 px-3 py-1 text-xs uppercase tracking-[0.28em] text-white">
                      Optional
                    </div>
                  )}

                  <CardHeader className={`flex gap-4 ${isLast ? "flex-row items-center" : "flex-col"}`}>
                    <motion.div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100/40 bg-emerald-400/30 ${isLast ? "shrink-0" : ""}`}
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
                      <integration.icon className="h-6 w-6 text-white" />
                    </motion.div>

                    <div className="flex flex-col gap-2 flex-1">
                      <CardTitle className={`font-semibold text-white ${isLast ? "text-2xl md:text-3xl" : "text-xl"}`}>
                        {integration.title}
                      </CardTitle>
                      {isLast && (
                        <CardDescription className="text-base text-emerald-50/80 md:text-lg mt-2">
                          {integration.description}
                        </CardDescription>
                      )}
                    </div>
                  </CardHeader>

                  {!isLast && (
                    <CardContent className="pb-6">
                      <CardDescription className="text-sm text-emerald-50/80 md:text-base">
                        {integration.description}
                      </CardDescription>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 26,
            delay: 0.3,
          }}
        >
          <ConsultationButton />
        </motion.div>
      </div>
    </section>
  );
}
