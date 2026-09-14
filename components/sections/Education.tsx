"use client";

import { motion } from "framer-motion";
import AquaAbout from "../ui/AquaAbout";
import EducationItem from "@/components/education/EducationItem";
import { educationItems } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full px-4 sm:px-6 md:px-10 py-16 sm:py-24"
    >
      {/* Aqua Background */}
      <AquaAbout />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-8 sm:mb-12 grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Left */}
          <div>
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 sm:mb-5 flex items-center gap-3"
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
              className="max-w-3xl text-3xl sm:text-5xl md:text-7xl font-medium tracking-tight text-white"
            >
              Where I
              <br />
              <span className="text-gray-500">
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
            <p className="max-w-md text-xs sm:text-sm leading-6 sm:leading-7 text-gray-400 md:text-right">
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
            border-white/10
            pt-6
            text-xs
            uppercase
            tracking-[0.2em]
            text-white/30
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