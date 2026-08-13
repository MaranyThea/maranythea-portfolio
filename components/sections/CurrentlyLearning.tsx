"use client";

import { motion } from "framer-motion";
import LearningItem from "@/components/learning/LearningItem";
import {
  learningItems,
  learningFocus,
} from "@/data/learning";

export default function CurrentlyLearning() {
  return (
    <section
      id="learning"
      className="w-full px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-10 md:grid-cols-2">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500"
            >
              06 / Currently Learning
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="max-w-3xl text-5xl font-medium tracking-tight md:text-7xl"
            >
              Still learning.
              <br />
              <span className="text-neutral-400">
                Still building.
              </span>
            </motion.h2>
          </div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="flex items-end md:justify-end"
          >
            <p className="max-w-md text-sm leading-7 text-neutral-500 md:text-right">
              Technology keeps evolving, and so do I. These are the
              areas I am currently exploring, strengthening, and
              turning into practical skills.
            </p>
          </motion.div>

        </div>

        {/* Learning Items */}
        <div className="mt-20">
          {learningItems.map((learning, index) => (
            <LearningItem
              key={learning.id}
              learning={learning}
              index={index}
            />
          ))}
        </div>

        {/* Focus */}
        <div className="mt-20 grid gap-10 border-t border-neutral-300 pt-10 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              Current Focus
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-neutral-500">
              Moving beyond individual technologies and learning how
              they work together to create reliable, maintainable,
              full-stack applications.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {learningFocus.map((focus, index) => (
              <motion.div
                key={focus}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="border border-neutral-300 px-5 py-4 text-sm text-neutral-600 transition-colors hover:bg-neutral-50"
              >
                {focus}
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 flex items-center justify-between border-t border-neutral-300 pt-6 text-xs uppercase tracking-[0.2em] text-neutral-400"
        >
          <span>Learning never stops</span>

          <span>2026</span>
        </motion.div>

      </div>
    </section>
  );
}