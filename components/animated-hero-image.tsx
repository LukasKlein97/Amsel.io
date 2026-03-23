"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type AnimatedHeroImageProps = {
  src: string;
  alt?: string;
};

export function AnimatedHeroImage({ src, alt = "Screenshot der mobilen App" }: AnimatedHeroImageProps) {
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const phoneRotateY = useTransform(scrollYProgress, [0, 0.12, 0.35], [0, 45, 75]);

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
          priority
        />
      </motion.div>
    </div>
  );
}
