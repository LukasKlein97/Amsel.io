"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CTAButtons } from "@/components/cta-buttons";
import { ShieldCheck, Smartphone, Workflow } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const featureCards = [
  {
    title: "Mobile Begehungen",
    description:
      "Gefährdungsbeurteilungen mit dem Smartphone direkt vor Ort durchführen und live synchronisieren.",
    icon: Smartphone,
    accent: "On-Site",
  },
  {
    title: "Software-Compliance",
    description: "Automatisierte Updates und Dokumentation ohne Medienbrüche.",
    icon: ShieldCheck,
    accent: "Compliance",
  },
  {
    title: "Arbeitssicherheit integriert",
    description:
      "Modulare Prozesse, die sich nahtlos in Ihre bestehende Infrastruktur einfügen.",
    icon: Workflow,
    accent: "Modular",
  },
];

const textReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * index,
      type: "spring" as const,
      stiffness: 220,
      damping: 28,
    },
  }),
};

export function HeroSection() {
  const [isMouseInHero, setIsMouseInHero] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!heroRef.current) {
        return;
      }

      const rect = heroRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const withinBounds =
        x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

      if (withinBounds) {
        setMousePosition({ x, y });
        setIsMouseInHero(true);
      } else {
        setIsMouseInHero(false);
      }
    };

    const handleMouseLeave = () => setIsMouseInHero(false);

    document.addEventListener("mousemove", handleMouseMove);
    heroRef.current?.addEventListener("mouseleave", handleMouseLeave);

    const current = heroRef.current;

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.section
      ref={heroRef}
      className="relative isolate overflow-hidden text-white"
      style={{ backgroundColor: "#000000" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      {/* Base gradient background - Safari-kompatibel mit fester Basis-Farbe */}
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "#000000" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-900/20 via-transparent to-black/30" />

      {/* Top center glow - Orange */}
      <div
        className="absolute -top-48 left-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl"
        style={{ filter: "blur(64px)" }}
      />

      {/* Bottom right glow - Orange */}
      <div
        className="absolute bottom-0 right-0 -z-10 h-96 w-96 translate-x-1/3 bg-orange-400/10 blur-3xl"
        style={{ filter: "blur(64px)" }}
      />

      {/* Additional top left glow for more depth */}
      <div
        className="absolute -top-32 -left-32 -z-10 h-[400px] w-[400px] rounded-full bg-orange-600/15 blur-3xl"
        style={{ filter: "blur(80px)" }}
      />

      {/* Additional bottom left glow */}
      <div
        className="absolute bottom-1/4 -left-24 -z-10 h-[360px] w-[360px] rounded-full bg-orange-500/12 blur-3xl"
        style={{ filter: "blur(72px)" }}
      />

      {/* Radial gradient overlay for smoother blending */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.12)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(234,88,12,0.1)_0%,transparent_50%)]" />

      <AnimatePresence>
        {isMouseInHero && !shouldReduceMotion && (
          <motion.div
            className="pointer-events-none absolute z-10"
            style={{
              left: mousePosition.x - 160,
              top: mousePosition.y - 160,
              width: 320,
              height: 320,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_rgba(249,115,22,0.2)_0%,_rgba(249,115,22,0.08)_45%,_transparent_70%)]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-20 pt-32 sm:px-6 md:flex-row md:items-end md:gap-20 lg:pt-44">
        <div className="flex-1 space-y-8">
          <motion.span
            variants={textReveal}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.4em] text-orange-200/90"
          >
            Arbeitssicherheit
          </motion.span>

          <motion.h1
            variants={textReveal}
            custom={1}
            className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.2rem]"
          >
            Digitale Arbeitssicherheit,
            <span className="block text-orange-300">
              die mit Ihrem Unternehmen wächst.
            </span>
          </motion.h1>

          <motion.p
            variants={textReveal}
            custom={2}
            className="max-w-xl text-base text-white/90 md:text-lg"
          >
            Wir verbinden smarte Softwaremodule mit Praxiswissen, damit
            Arbeitssicherheit in Produktion, Logistik und Verwaltung lebendig
            bleibt. Von der mobilen Erfassung bis zur KI-gestützten Auswertung
            entsteht ein vernetztes Arbeitssicherheits-System.
          </motion.p>

          <motion.div
            variants={textReveal}
            custom={3}
            className="flex flex-col items-start"
          >
            <CTAButtons className="items-start" />
          </motion.div>
        </div>

        <motion.div
          className="flex flex-1 flex-col gap-5"
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }
          }
          animate={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
          }
          transition={{
            type: "spring" as const,
            stiffness: 160,
            damping: 24,
            delay: 0.4,
          }}
        >
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 40, y: 24 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                  type: "spring" as const,
                  stiffness: 220,
                  damping: 28,
                }}
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
                <Card className="group relative overflow-hidden border-white/10 bg-white/5 px-4 py-6 text-white shadow-xl shadow-orange-950/40 backdrop-blur-xl transition transform-gpu hover:border-orange-200/40 hover:bg-white/10 hover:shadow-orange-700/40">
                  <CardContent className="flex items-start gap-4 px-0">
                    <motion.div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-orange-200/40 bg-orange-400/20"
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              rotate: [-1.3, 1.3, -1.3],
                              y: [0, -3, 0],
                            }
                      }
                      transition={
                        shouldReduceMotion
                          ? undefined
                          : {
                              repeat: Infinity,
                              duration: 6,
                              ease: "easeInOut",
                              delay: index * 0.6,
                            }
                      }
                    >
                      <Icon className="h-6 w-6 shrink-0 text-orange-100" />
                    </motion.div>
                    <div className="space-y-2">
                      <span className="inline-flex items-center rounded-full border border-orange-200/40 bg-orange-400/10 px-2 py-1 text-xs uppercase tracking-[0.28em] text-orange-100">
                        {card.accent}
                      </span>
                      <h3 className="text-xl font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="text-sm text-orange-50/80 md:text-base">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
