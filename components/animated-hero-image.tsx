"use client";

import { type RefObject } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

type AnimatedHeroImageProps = {
  src: string;
  alt?: string;
  targetRef: RefObject<HTMLElement | null>;
  mirror?: boolean;
};

export function AnimatedHeroImage({
  src,
  alt = "Screenshot der mobilen App",
  targetRef,
  mirror = false,
}: AnimatedHeroImageProps) {
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const rotateRange = mirror ? [55, 0, -55] : [-55, 0, 55];
  const phoneRotateY = useTransform(scrollYProgress, [0, 0.5, 1], rotateRange);
  const phoneOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.5, 1, 1, 1, 0.5],
  );
  const phoneScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.94]);
  const phoneY = useTransform(scrollYProgress, [0, 0.5, 1], [24, 0, -24]);

  return (
    <div
      className="relative flex-shrink-0 lg:w-[225px] xl:w-[275px]"
      style={shouldReduceMotion ? undefined : { perspective: 1200 }}
    >
      <motion.div
        className="relative mx-auto w-[175px] sm:w-[200px] lg:mx-0 lg:w-full"
        style={
          shouldReduceMotion
            ? undefined
            : {
                rotateY: phoneRotateY,
                opacity: phoneOpacity,
                scale: phoneScale,
                y: phoneY,
                transformStyle: "preserve-3d",
              }
        }
      >
        <Image
          src={src}
          alt={alt}
          width={275}
          height={563}
          className="w-full object-contain drop-shadow-2xl"
        />
      </motion.div>
    </div>
  );
}
