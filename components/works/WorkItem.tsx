"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { WorkItem as WorkItemType } from "@/data/work";

type WorkItemProps = {
  work: WorkItemType;
  index: number;
};

export default function WorkItem({ work, index }: WorkItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border-t border-neutral-300 py-12 md:py-16"
    >
      <div className="grid gap-10 md:grid-cols-[80px_1fr] lg:grid-cols-[100px_1fr_1.1fr]">
        
        {/* Number */}
        <div className="text-sm text-neutral-400">
          {work.number}
        </div>

        {/* Information */}
        <div className="flex flex-col">
          <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-neutral-500">
            <span>{work.type}</span>
            <span className="h-px w-8 bg-neutral-300" />
            <span>{work.year}</span>
          </div>

          <h3 className="max-w-xl text-4xl font-medium tracking-tight md:text-5xl">
            {work.title}
          </h3>

          <p className="mt-3 text-lg text-neutral-500">
            {work.subtitle}
          </p>

          <p className="mt-8 max-w-lg text-sm leading-7 text-neutral-600">
            {work.description}
          </p>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-2">
            {work.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs text-neutral-600"
              >
                {technology}
              </span>
            ))}
          </div>

          {work.link && (
            <a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-fit items-center gap-2 text-sm font-medium transition-opacity hover:opacity-50"
            >
              View project
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
          )}
        </div>

        {/* Image */}
        <div className="relative overflow-hidden bg-neutral-100">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={work.image}
              alt={work.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}