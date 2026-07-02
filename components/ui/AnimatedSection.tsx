"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animation";

interface Props {
  children: React.ReactNode;
}

export default function AnimatedSection({ children }: Props) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}