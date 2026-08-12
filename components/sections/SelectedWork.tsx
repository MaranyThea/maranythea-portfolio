"use client";

import { motion } from "framer-motion";
import WorkItem from "../works/WorkItem";
import { workItems } from "@/data/work";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="w-full px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-xs uppercase tracking-[0.25em] text-blue-400"
            >
              Selected Work
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-3xl text-5xl font-medium tracking-tight md:text-7xl"
            >
              Things I&apos;ve
              <br />
              <span className="text-blue-400">built & worked on.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-end md:justify-end"
          >
            <p className="max-w-md text-sm leading-7 text-blue-200 md:text-right">
              A curated selection of professional experiences and
              personal projects that represent how I approach technology,
              design, and problem solving.
            </p>
          </motion.div>
        </div>

        {/* Work */}
        <div>
          {workItems.map((work, index) => (
            <WorkItem
              key={work.id}
              work={work}
              index={index}
            />
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex items-center justify-between border-t border-blue-300 pt-6 text-xs uppercase tracking-[0.2em] text-blue-200"
        >
          <span>Selected Work</span>
          <span>{String(workItems.length).padStart(2, "0")} Items</span>
        </motion.div>

      </div>
    </section>
  );
}