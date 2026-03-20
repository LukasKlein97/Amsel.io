"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";

const OFFICIAL_PROGRAM_URL =
  "https://wm.baden-wuerttemberg.de/de/innovation/innovationsgutscheine/innovationsgutschein-mittelstand-trifft-start-ups";

export function CoInnovationHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-dvh overflow-hidden pb-20 pt-32 lg:pt-44"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <motion.div
          className="absolute inset-0"
          style={
            reduceMotion
              ? undefined
              : {
                  y: bgY,
                  scale: bgScale,
                }
          }
        >
          <Image
            src="/images/co-innovation-hero.png"
            alt=""
            fill
            priority
            className="object-cover object-[72%_65%] opacity-[0.26] sm:opacity-[0.32] md:object-[70%_60%]"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black from-[8%] via-black/92 via-45% to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/25 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-1 text-xs uppercase tracking-[0.35em] text-orange-200/90 backdrop-blur-[2px]"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 28,
            delay: reduceMotion ? 0 : 0.05,
          }}
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          Co-Innovation
        </motion.div>

        <motion.h1
          className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.65)] md:text-5xl lg:text-[3rem]"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 28,
            delay: reduceMotion ? 0 : 0.12,
          }}
        >
          Gemeinsam innovieren – mit dem Innovationsgutschein „Mittelstand trifft
          Start-ups“
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg text-orange-50/90 drop-shadow-[0_1px_16px_rgba(0,0,0,0.5)] md:text-xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 28,
            delay: reduceMotion ? 0 : 0.2,
          }}
        >
          Wir suchen{" "}
          <strong className="font-semibold text-orange-100/95">
            Co-Innovationspartner
          </strong>
          , um unsere Software um innovative Funktionalitäten zu erweitern –
          maßgeschneidert auf Ihre Anforderungen und die Ihrer Branche. Gefördert
          wird die Zusammenarbeit etablierter KMU mit Start-ups über das
          Programm des Landes Baden-Württemberg.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 28,
            delay: reduceMotion ? 0 : 0.28,
          }}
        >
          <Button asChild size="lg" className="group">
            <Link href="#contact">
              Als Co-Innovator melden
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/25 bg-black/30 text-white backdrop-blur-sm hover:bg-black/45 hover:text-white"
          >
            <a
              href={OFFICIAL_PROGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Programm des Landes BW
              <ExternalLink className="h-4 w-4 opacity-80" aria-hidden />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
