"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CTAButtons } from "@/components/cta-buttons";
import { Calendar, Clock } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { Variants } from "framer-motion";

const roadmapItems = [
  // Q3 2025 – umgesetzt
  {
    title: "Ordnermanagement",
    description: "Strukturierte Verwaltung und Organisation von Dokumenten",
    quarter: "Q3 2025",
    year: 2025,
    quarterNumber: 3,
    implemented: true,
  },
  {
    title: "Gefährdungsbeurteilungen",
    description:
      "Strukturiert erfassen, versionieren und mit Maßnahmen verzahnen",
    quarter: "Q3 2025",
    year: 2025,
    quarterNumber: 3,
    implemented: true,
  },
  // Q4 2025 – umgesetzt
  {
    title: "Begehungsprotokolle",
    description: "Mobile Checklisten, Fotodokumentation und Sofortzuweisung",
    quarter: "Q4 2025",
    year: 2025,
    quarterNumber: 4,
    implemented: true,
  },
  {
    title: "Betriebsanweisungen",
    description:
      "Digital erstellen, verwalten und Mitarbeitern zugänglich machen",
    quarter: "Q4 2025",
    year: 2025,
    quarterNumber: 4,
    implemented: true,
  },
  {
    title: "Aktionsplan",
    description:
      "Teamübergreifende Aufgaben mit Prioritäten und Verantwortlichkeiten",
    quarter: "Q4 2025",
    year: 2025,
    quarterNumber: 4,
    implemented: true,
  },
  // Q1 2026
  {
    title: "Gefahrstoffverzeichnis",
    description: "Verwaltung von Sicherheitsdatenblättern",
    quarter: "Q1 2026",
    year: 2026,
    quarterNumber: 1,
    implemented: true,
  },
  {
    title: "Besuchermanagement",
    description: "Erfassung und Verwaltung von Besuchern und Externen",
    quarter: "Q1 2026",
    year: 2026,
    quarterNumber: 1,
    implemented: true,
  },
  {
    title: "Schulungsmatrix",
    description: "Planung und Nachweis von Schulungen und Unterweisungen",
    quarter: "Q1 2026",
    year: 2026,
    quarterNumber: 1,
  },

  {
    title: "Prüfverzeichnis",
    description: "Organisation von Prüfintervallen und Prüfnachweisen",
    quarter: "Q2 2026",
    year: 2026,
    quarterNumber: 2,
  },
  {
    title: "ASA-Protokolle",
    description: "Einfache Erstellung von Sitzungsprotokollen",
    quarter: "Q2 2026",
    year: 2026,
    quarterNumber: 2,
  },
  {
    title: "Unfallmanagement",
    description: "Ableiten von Maßnahmen, Statistiken und Kennzahlen",
    quarter: "Q2 2026",
    year: 2026,
    quarterNumber: 2,
  },
  {
    title: "PSA-Katalog",
    description: "Verwaltung der eingesetzten Persönlichen Schutzausrüstung",
    quarter: "Q3 2026",
    year: 2026,
    quarterNumber: 3,
  },

  {
    title: "Vorsorgekatei",
    description: "Verwaltung von arbeitsmedizinischen Vorsorgeuntersuchungen",
    quarter: "Q3 2026",
    year: 2026,
    quarterNumber: 3,
  },

  {
    title: "Rechtskataster",
    description: "Übersicht und Verwaltung relevanter Gesetze und Vorschriften",
    quarter: "Q3 2026",
    year: 2026,
    quarterNumber: 3,
  },
  {
    title: "Aushangsmanagement",
    description:
      "Verwaltung und Überwachung von gesetzlich vorgeschriebenen Aushängen",
    quarter: "Q4 2026",
    year: 2026,
    quarterNumber: 4,
  },
];

// Helper function to get unique quarters in chronologischer Reihenfolge
const getUniqueQuarters = () => {
  const quarterMap = new Map<string, { year: number; q: number }>();
  roadmapItems.forEach((item) => {
    if (!quarterMap.has(item.quarter)) {
      quarterMap.set(item.quarter, {
        year: item.year,
        q: item.quarterNumber,
      });
    }
  });
  return Array.from(quarterMap.entries())
    .sort((a, b) => {
      if (a[1].year !== b[1].year) return a[1].year - b[1].year;
      return a[1].q - b[1].q;
    })
    .map(([quarter]) => quarter);
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export function RoadmapSection() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const uniqueQuarters = getUniqueQuarters();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Nur auf der Hauptseite anzeigen, nicht auf Impressum, Datenschutz etc.
  if (!isMounted || pathname !== "/") {
    return null;
  }

  // Group items by quarter for timeline display
  const itemsByQuarter = uniqueQuarters.map((quarter) => ({
    quarter,
    items: roadmapItems.filter((item) => item.quarter === quarter),
  }));

  return (
    <section
      id="roadmap"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      <div className="absolute inset-x-0 top-[-20%] -z-10 h-[480px] bg-[radial-gradient(circle,_rgba(249,115,22,0.2)_0%,_transparent_65%)]" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute right-[-10%] top-[30%] -z-10 h-[280px] w-[280px] rounded-full bg-orange-400/10 blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring" as const, stiffness: 180, damping: 26 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-orange-200/90">
            Roadmap
          </span>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Calendar className="h-10 w-10 text-orange-300" />
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Module & Roadmap
            </h2>
          </div>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            Die Roadmap zeigt umgesetzte sowie geplante Features und Module –
            von den ersten Releases bis zu den kommenden Quartalen.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButtons />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400/40 via-orange-500/30 to-orange-400/20 md:left-1/2 md:-translate-x-0.5" />

          <div className="space-y-12">
            {itemsByQuarter.map((quarterGroup, quarterGroupIndex) => (
              <div key={quarterGroup.quarter} className="relative">
                {/* Quarter marker */}
                <div className="relative flex flex-col md:flex-row md:items-start md:gap-8">
                  {/* Quarter label - left side on desktop */}
                  <div className="sticky top-8 z-10 mb-6 flex-shrink-0 md:top-24 md:w-48 md:mb-0">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        type: "spring" as const,
                        stiffness: 180,
                        damping: 26,
                      }}
                      className="flex items-center gap-3 md:justify-end"
                    >
                      <div className="absolute left-8 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-black bg-orange-400 shadow-lg shadow-orange-500/50 md:left-auto md:right-0 md:translate-x-1/2" />
                      <div className="ml-12 rounded-lg border border-orange-200/30 bg-orange-400/20 px-4 py-2 backdrop-blur-sm md:ml-0 md:mr-12">
                        <span className="text-sm font-semibold text-orange-100">
                          {quarterGroup.quarter}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Features grid - right side on desktop */}
                  <div className="ml-12 flex-1 md:ml-0">
                    <motion.div
                      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                      variants={container}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-80px" }}
                    >
                      {quarterGroup.items.map((roadmapItem, itemIndex) => (
                        <motion.div
                          key={roadmapItem.title}
                          variants={item}
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : {
                                  scale: 1.03,
                                  y: -4,
                                  transition: {
                                    duration: 0.18,
                                    ease: "easeOut",
                                  },
                                }
                          }
                          whileTap={
                            shouldReduceMotion
                              ? undefined
                              : { scale: 0.98, transition: { duration: 0.1 } }
                          }
                        >
                          <Card className="group relative h-full overflow-hidden border border-white/10 bg-white/5 shadow-lg shadow-orange-950/30 backdrop-blur-xl transition transform-gpu hover:border-orange-200/40 hover:bg-white/10 hover:shadow-orange-700/40">
                            <CardContent className="p-5">
                              <div className="flex items-start gap-3">
                                <motion.div
                                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-orange-200/40 bg-orange-400/20"
                                  animate={
                                    shouldReduceMotion
                                      ? undefined
                                      : {
                                          rotate: [-1, 1, -1],
                                          y: [0, -2, 0],
                                        }
                                  }
                                  transition={
                                    shouldReduceMotion
                                      ? undefined
                                      : {
                                          repeat: Infinity,
                                          repeatType: "mirror",
                                          duration: 4,
                                          delay:
                                            quarterGroupIndex * 0.2 +
                                            itemIndex * 0.1,
                                        }
                                  }
                                >
                                  <Clock className="h-4 w-4 text-orange-200" />
                                </motion.div>
                                <div className="flex-1">
                                  <h3 className="text-base font-semibold text-white">
                                    {roadmapItem.title}
                                  </h3>
                                  {roadmapItem.description && (
                                    <p className="mt-2 text-sm text-white/70">
                                      {roadmapItem.description}
                                    </p>
                                  )}
                                  {roadmapItem.implemented && (
                                    <div className="mt-4">
                                      <span
                                        className="inline-flex items-center gap-1.5 rounded-md border border-orange-200/30 bg-orange-400/20 px-2.5 py-1 text-xs font-medium text-orange-200"
                                        title="Umgesetzt"
                                      >
                                        Bereits in der Software ✓
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
