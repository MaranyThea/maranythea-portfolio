"use client";

import { motion } from "framer-motion";
import AquaAbout from "../ui/AquaAbout";
import EducationItem from "@/components/education/EducationItem";
import { educationItems } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full px-6 py-12 md:px-10 md:py-24"
    >
      {/* Aqua Background */}
      <AquaAbout />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          {/* Left */}
          <div>
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#00B4D8]" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#00B4D8]">
                Education
              </span>
            </motion.div>

            {/* Heading */}
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
              <span className="text-gray-400">
                learned & grew.
              </span>
            </motion.h2>
          </div>

          {/* Right Description */}
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
            <p className="max-w-md text-sm leading-7 text-gray-500 md:text-right">
              A collection of my formal education, professional
              courses, certifications, and learning experiences that
              have shaped my technical foundation.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            EDUCATION LIST
        ====================================================== */}

        <div>
          {educationItems.map((education, index) => (
            <EducationItem
              key={education.id}
              education={education}
              index={index}
            />
          ))}
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-8
            flex
            items-center
            justify-between
            border-t
            border-neutral-300
            pt-6
            text-xs
            uppercase
            tracking-[0.2em]
            text-neutral-400
          "
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