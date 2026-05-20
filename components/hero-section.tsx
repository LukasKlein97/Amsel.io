"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CTAButtons } from "@/components/cta-buttons";
import { ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const featureCards = [
  {
    title: "Mobile Begehungen",
    description:
      "Begehungen mit dem Smartphone direkt vor Ort durchführen und live synchronisieren.",
    icon: Smartphone,
    accent: "Mobile App",
  },
  {
    title: "Software-Compliance",
    description: "Automatisierte Updates und Dokumentation ohne Medienbrüche.",
    icon: ShieldCheck,
    accent: "Compliance",
  },
  {
    title: "KI-Vorschläge",
    description:
      "Für Betriebsanweisungen und Maßnahmen – automatisch aus deinen Begehungsdaten.",
    icon: Sparkles,
    accent: "KI",
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
      className="relative isolate overflow-hidden bg-background text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
    >
      {/* Hintergrund reicht unter den fixierten Header */}
      <div className="absolute -top-28 inset-x-0 bottom-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/60 via-transparent to-orange-50/30" />

        <div
          className="absolute top-0 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl"
          style={{ filter: "blur(64px)" }}
        />

        <div
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl"
          style={{ filter: "blur(64px)" }}
        />

        <div
          className="absolute top-0 left-0 h-[400px] w-[400px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-orange-600/15 blur-3xl"
          style={{ filter: "blur(80px)" }}
        />

        <div
          className="absolute bottom-1/4 -left-24 h-[360px] w-[360px] rounded-full bg-orange-500/12 blur-3xl"
          style={{ filter: "blur(72px)" }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(25,159,103,0.12)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(21,136,88,0.1)_0%,transparent_50%)]" />
      </div>

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
            <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_rgba(25,159,103,0.2)_0%,_rgba(25,159,103,0.08)_45%,_transparent_70%)]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-20 pt-32 sm:px-6 md:flex-row md:items-start md:gap-20 lg:pt-44">
        <div className="flex-1 space-y-8">
          <motion.h1
            variants={textReveal}
            custom={0}
            className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3.2rem]"
          >
            Digitale Arbeitssicherheit.
            <span className="block text-orange-600">einfach und schnell.</span>
          </motion.h1>

          <motion.p
            variants={textReveal}
            custom={1}
            className="max-w-xl text-base text-muted-foreground md:text-lg"
          >
            Wir verbinden smarte Softwaremodule mit Praxiswissen, damit
            Arbeitssicherheit in Produktion, Logistik und Verwaltung lebendig
            bleibt. Von der mobilen Erfassung bis zur{" "}
            <strong className="font-semibold text-foreground">KI</strong>
            -gestützten Auswertung entsteht ein vernetztes
            Arbeitssicherheits-System.
          </motion.p>

          <motion.div
            variants={textReveal}
            custom={2}
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
                <Card className="group relative overflow-hidden border-border bg-card px-4 py-6 text-foreground shadow-xl shadow-orange-200/40 transition transform-gpu hover:border-orange-300 hover:bg-orange-50/60 hover:shadow-orange-300/50">
                  <CardContent className="flex items-start gap-4 px-0">
                    <motion.div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-orange-100"
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
                      <Icon className="h-6 w-6 shrink-0 text-orange-700" />
                    </motion.div>
                    <div className="space-y-2">
                      <span className="inline-flex items-center rounded-full border border-orange-300 bg-orange-100 px-2 py-1 text-xs uppercase tracking-[0.28em] text-orange-800">
                        {card.accent}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground">
                        {card.title}
                      </h3>
                      <p className="text-sm text-muted-foreground md:text-base">
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
