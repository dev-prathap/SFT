"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function RevealSection({ children }: { children: React.ReactNode }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [
      "inset(100% 0% 0% 0%)",
      "inset(0% 0% 0% 0%)",
      "inset(0% 0% 0% 0%)",
      "inset(0% 0% 100% 0%)",
    ]
  );

  return (
    <motion.div
      ref={ref}
      style={{ clipPath }}
      className="relative will-change-transform"
    >
      {children}
    </motion.div>
  );
}
