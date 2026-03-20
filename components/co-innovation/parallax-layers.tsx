"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

type ParallaxSectionProps = {
  children: ReactNode;
  className?: string;
  /** Vertical offset range in pixels – positive = element lags behind scroll */
  offset?: number;
  /** 0 = starts at page top, 1 = starts at page bottom */
  inputRange?: [number, number];
};

export function ParallaxSection({
  children,
  className,
  offset = 60,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduceMotion ? undefined : { y }}
    >
      {children}
    </motion.div>
  );
}

type FloatingOrbProps = {
  className?: string;
  speed?: number;
};

export function FloatingOrb({ className, speed = 80 }: FloatingOrbProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);

  if (reduceMotion) {
    return <div ref={ref} className={className} aria-hidden />;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, scale }}
      aria-hidden
    />
  );
}

export function ParallaxBackground() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute -left-32 top-[30%] h-[500px] w-[500px] rounded-full bg-orange-600/[0.07] blur-[100px]"
        style={reduceMotion ? undefined : { y: layer1Y }}
      />
      <motion.div
        className="absolute -right-24 top-[55%] h-[400px] w-[400px] rounded-full bg-orange-500/[0.05] blur-[120px]"
        style={reduceMotion ? undefined : { y: layer2Y }}
      />
      <motion.div
        className="absolute left-1/3 top-[75%] h-[350px] w-[350px] rounded-full bg-orange-700/[0.06] blur-[90px]"
        style={reduceMotion ? undefined : { y: layer3Y }}
      />
    </div>
  );
}
