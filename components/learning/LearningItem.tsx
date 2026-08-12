"use client";

import { motion } from "framer-motion";
import type { LearningItem as LearningItemType } from "@/data/learning";

type LearningItemProps = {
  learning: LearningItemType;
  index: number;
};

export default function LearningItem({
  learning,
  index,
}: LearningItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border-t border-neutral-300 py-7"
    >
      <div className="grid gap-5 md:grid-cols-[50px_180px_1fr_100px] md:items-start">

        {/* Number */}
        <span className="text-xs text-neutral-400">
          {learning.number}
        </span>

        {/* Technology */}
        <h3 className="text-xl font-medium tracking-tight">
          {learning.title}
        </h3>

        {/* Description */}
        <p className="max-w-xl text-sm leading-7 text-neutral-500">
          {learning.description}
        </p>

        {/* Status */}
        <span className="text-xs uppercase tracking-[0.15em] text-neutral-400 md:text-right">
          {learning.level}
        </span>

      </div>
    </motion.div>
  );
}