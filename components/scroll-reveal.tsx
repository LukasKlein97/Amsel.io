"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollReveal({ children, className }: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px 0px -48px 0px" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 200, damping: 30 }
      }
    >
      {children}
    </motion.div>
  );
}
