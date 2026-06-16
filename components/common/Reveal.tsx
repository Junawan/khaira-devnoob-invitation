"use client";

import { motion } from "framer-motion";

type Direction =
  | "up"
  | "left"
  | "right"
  | "scale";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
}

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
}: RevealProps) {

  const initial = {

    opacity: 0,

    x:
      direction === "left"
        ? -50
        : direction === "right"
        ? 50
        : 0,

    y:
      direction === "up"
        ? 40
        : 0,

    scale:
      direction === "scale"
        ? 0.9
        : 1,

  };

  const animate = {

    opacity: 1,

    x: 0,

    y: 0,

    scale: 1,

  };

  return (

    <motion.div

      initial={initial}

      whileInView={animate}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}

    >

      {children}

    </motion.div>

  );

}