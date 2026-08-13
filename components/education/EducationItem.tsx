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
        border-neutral-300
        py-10
        md:py-8
      "
    >
      <div
        className="
          grid
          gap-8
          md:grid-cols-[160px_1fr]
          lg:grid-cols-[180px_1fr]
        "
      >
        {/* =====================================================
            LEFT — TYPE / PERIOD
        ====================================================== */}

        <div>
          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-neutral-500
            "
          >
            {education.type}
          </p>

          <p className="mt-4 text-sm text-neutral-400">
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
              text-2xl
              font-medium
              tracking-tight
              text-neutral-100
              md:text-3xl
            "
          >
            {education.title}
          </h3>

          {/* University */}
          <div className="mt-4 flex items-center gap-4">
            {education.logo && (
              <div
                className="
                  h-12
                  w-12
                  shrink-0
                  overflow-hidden
                  rounded-xl
                  border
                  border-neutral-300
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

            <p className="text-lg text-neutral-400">
              {education.institution}
            </p>
          </div>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-3xl
              text-sm
              leading-7
              text-neutral-400
            "
          >
            {education.description}
          </p>

          {/* Details */}
          {education.details && education.details.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
              {education.details.map((detail) => (
                <span
                  key={detail}
                  className="
                    text-xs
                    text-neutral-400
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
              <div className="mt-6 flex flex-wrap gap-2">
                {education.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-neutral-300
                      px-3
                      py-1.5
                      text-xs
                      text-neutral-200
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