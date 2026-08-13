"use client";

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
      className="group border-t border-neutral-300 py-10 md:py-8"
    >
      <div className="grid gap-8 md:grid-cols-[70px_140px_1fr] lg:grid-cols-[80px_160px_1fr]">

        {/* Number */}
        <div className="text-sm text-neutral-400">
          {education.number}
        </div>

        {/* Type / Period */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            {education.type}
          </p>

          <p className="mt-3 text-sm text-neutral-400">
            {education.period}
          </p>
        </div>

        {/* Content */}
        <div>
          <h3 className="max-w-3xl text-2xl font-medium tracking-tight md:text-3xl">
            {education.title}
          </h3>

          <p className="mt-2 text-lg text-neutral-400">
            {education.institution}
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-400">
            {education.description}
          </p>

          {/* Details */}
          {education.details && education.details.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              {education.details.map((detail) => (
                <span
                  key={detail}
                  className="text-xs text-neutral-400"
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
                    className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs text-neutral-200"
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