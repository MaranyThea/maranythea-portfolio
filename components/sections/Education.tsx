"use client";

import { motion } from "framer-motion";
import AquaAbout from "../ui/AquaAbout";
import EducationItem from "@/components/education/EducationItem";
import { educationItems } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="w-full px-6 py-24 md:px-10 md:py-32"
    >
      <AquaAbout />
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-20 grid gap-10 md:grid-cols-2">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-xs uppercase tracking-[0.25em] text-cyan-400"
            >
              05 / Education
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
              Where I
              <br />
              <span className="text-cyan-400">
                learned & grew.
              </span>
            </motion.h2>
          </div>

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
            <p className="max-w-md text-sm leading-7 text-cyan-200 md:text-right">
              A collection of my formal education, professional
              courses, certifications, and learning experiences that
              have shaped my technical foundation.
            </p>
          </motion.div>

        </div>

        {/* Education List */}
        <div>
          {educationItems.map((education, index) => (
            <EducationItem
              key={education.id}
              education={education}
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
          className="mt-16 flex items-center justify-between border-t border-neutral-300 pt-6 text-xs uppercase tracking-[0.2em] text-neutral-400"
        >
          <span>Education</span>

          <span>
            {String(educationItems.length).padStart(2, "0")} Experiences
          </span>
        </motion.div>

      </div>
    </section>
  );
}