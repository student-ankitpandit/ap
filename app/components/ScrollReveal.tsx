"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}

export default function ScrollReveal({ children, delay = 0, className = "", id }: ScrollRevealProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, filter: "blur(4px)", y: 12 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  );
}
