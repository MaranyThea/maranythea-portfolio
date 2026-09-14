"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { EducationItem as EducationItemType } from "@/data/education";

type EducationItemProps = {
  education: EducationItemType;
  index: number;
};

export default function EducationItem({
  education,
  index,
}: EducationItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        border-t
        border-white/10
        py-8
        sm:py-10
      "
    >
      <div
        className="
          grid
          gap-4
          sm:gap-6
          md:grid-cols-[160px_1fr]
          lg:grid-cols-[180px_1fr]
        "
      >
        {/* =====================================================
            LEFT — TYPE / PERIOD
        ====================================================== */}

        <div>
          <span
            className="
              inline-block
              text-[11px]
              uppercase
              tracking-[0.2em]
              text-cyan-400/80
              font-mono
            "
          >
            {education.type}
          </span>

          <p className="mt-1 sm:mt-3 text-xs sm:text-sm text-gray-500 font-mono">
            {education.period}
          </p>
        </div>

        {/* =====================================================
            RIGHT — EDUCATION DETAILS
        ====================================================== */}

        <div>
          {/* Degree */}
          <h3
            className="
              max-w-4xl
              text-xl
              sm:text-2xl
              md:text-3xl
              font-medium
              tracking-tight
              text-white
              group-hover:text-cyan-400
              transition-colors
              duration-300
            "
          >
            {education.title}
          </h3>

          {/* University */}
          <div className="mt-3 sm:mt-4 flex items-center gap-3 sm:gap-4">
            {education.logo && (
              <div
                className="
                  h-10
                  w-10
                  sm:h-12
                  sm:w-12
                  shrink-0
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-white
                "
              >
                <Image
                  src={education.logo}
                  alt={`${education.institution} logo`}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium">
              {education.institution}
            </p>
          </div>

          {/* Description */}
          <p
            className="
              mt-4
              sm:mt-6
              max-w-3xl
              text-xs
              sm:text-sm
              leading-6
              sm:leading-7
              text-gray-400
            "
          >
            {education.description}
          </p>

          {/* Details */}
          {education.details && education.details.length > 0 && (
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
              {education.details.map((detail) => (
                <span
                  key={detail}
                  className="
                    text-xs
                    text-gray-400/80
                    before:content-['•']
                    before:mr-1.5
                    before:text-cyan-400/60
                  "
                >
                  {detail}
                </span>
              ))}
            </div>
          )}

          {/* Technologies */}
          {education.technologies &&
            education.technologies.length > 0 && (
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-2">
                {education.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.02]
                      px-2.5
                      sm:px-3
                      py-1
                      sm:py-1.5
                      text-[11px]
                      sm:text-xs
                      text-gray-300
                      transition-colors
                      duration-300
                      group-hover:border-cyan-400/40
                      group-hover:text-cyan-300
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>
            )}
        </div>
      </div>
    </motion.article>
  );
}