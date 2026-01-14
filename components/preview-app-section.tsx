"use client";

import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { Variants } from "framer-motion";
import { AppWindow, ClipboardList, FileText } from "lucide-react";

const featureItems = [
  {
    title: "PDF-Scanner & Dokumentenmanagement",
    description:
      "Wichtige Dokumente mobil erfassen, automatisch versionieren und zentral freigeben.",
    icon: FileText,
    badge: "Dokumentation",
  },
  {
    title: "Begehungsprotokolle & Aktionspläne",
    description:
      "Checklisten live abhaken, Fotos ergänzen und Maßnahmen direkt an Teams zuweisen.",
    icon: ClipboardList,
    badge: "Vor Ort",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 220,
      damping: 28,
    },
  },
};

function DownloadButton() {
  const handleClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button size="lg" onClick={handleClick}>
      App kennenlernen
      <AppWindow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </Button>
  );
}

export function PreviewAppSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-900 via-slate-950 to-black" />
      <div className="absolute left-[-15%] top-1/2 -z-10 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-emerald-500/15 blur-3xl md:block" />
      <div className="absolute right-[-10%] top-[15%] -z-10 h-[380px] w-[380px] rounded-full bg-emerald-400/12 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:px-8">
        {/* Badge - shown above image on small screens, hidden on large screens */}
        <motion.span
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="order-1 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-emerald-200/80 lg:hidden"
        >
          Mobile Plattform
        </motion.span>

        <motion.div
          className="order-2 relative flex flex-1 justify-center lg:order-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ type: "spring" as const, stiffness: 180, damping: 28 }}
        >
          <div className="relative flex w-full max-w-sm items-center justify-center">
            <Image
              src="/images/app6.png"
              alt="AMS App Screenshot"
              width={384}
              height={600}
              className="w-full rounded-[32px] shadow-2xl shadow-emerald-950/40"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="order-3 flex flex-1 flex-col justify-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={containerVariants}
        >
          {/* Badge - hidden on small screens, shown on large screens */}
          <motion.span
            variants={itemVariants}
            className="hidden inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-emerald-200/80 lg:inline-flex"
          >
            Mobile Plattform
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-semibold leading-tight md:text-4xl"
          >
            Eine App, die Arbeitssicherheit einfach und digital macht
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-base text-slate-200/85 md:text-lg"
          >
            Gefährdungsbeurteilungen, Begehungsprotokolle und Aktionspläne mit
            dem Smartphone erfassen und synchronisieren.
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-6">
            {featureItems.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="group relative flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-emerald-950/30 backdrop-blur-xl transition transform-gpu hover:border-emerald-200/40 hover:bg-white/10 hover:shadow-emerald-700/40"
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
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-emerald-400/30"
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            rotate: [-1.2, 1.2, -1.2],
                            y: [0, -2, 0],
                          }
                    }
                    transition={
                      shouldReduceMotion
                        ? undefined
                        : {
                            repeat: Infinity,
                            repeatType: "mirror",
                            duration: 6,
                            delay: index * 0.35,
                          }
                    }
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </motion.div>

                  <div className="flex flex-1 flex-col gap-2">
                    <span className="inline-flex w-fit items-center rounded-full border border-white/30 bg-emerald-400/30 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white">
                      {feature.badge}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-emerald-50/85 md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants}>
            <DownloadButton />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
