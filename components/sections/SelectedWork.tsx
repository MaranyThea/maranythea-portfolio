"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AquaAbout from "../ui/AquaAbout";
import { ArrowUpRight, Briefcase, Code2 } from "lucide-react";
const professionalWork = [
  {
    id: "01",
    role: "Technical / IT Support",
    company: "Department of Social Affairs",
    period: "2021 — 2023",
    logo: "/images/MoSVY.jpeg",
    description:
      "Provided technical support, data management, file organization, and assistance with day-to-day digital operations.",
    skills: ["IT Support", "Data Management", "File Management"],
  },
  {
    id: "02",
    role: "Software / Technical Work",
    company: "Private Software Development",
    period: "2025",
    logo: "/images/glean.jpg",
    description:
      "Worked in a software development environment, contributing to technical tasks, testing, and development workflows.",
    skills: ["Software Development", "QA", "K6"],
  },
];

const personalProjects = [
  {
    id: "01",
    title: "Personal Portfolio",
    period: "2026",
    description:
      "A personal developer portfolio designed around interactive interfaces, motion, and a black-and-aqua visual identity.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    type: "Featured",
    link: "#",
    github: "#",
  },
  {
    id: "02",
    title: "Expense Tracker",
    period: "2026",
    description:
      "A practical expense management application for recording, organizing, and tracking personal spending.",
    technologies: ["React", "TypeScript", "CSS"],
    type: "Web App",
    link: "#",
    github: "#",
  },
  {
    id: "03",
    title: "Weather App",
    period: "2026",
    description:
      "A weather application focused on clean data presentation and a simple responsive user experience.",
    technologies: ["React", "API", "JavaScript"],
    type: "Web App",
    link: "#",
    github: "#",
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="relative w-full overflow-hidden px-6 py-24 text-white md:px-10 lg:px-16"
    >
      <AquaAbout />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#00B4D8]" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#00B4D8]">
              Selected Work
            </span>
          </div>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Things I&apos;ve <span className="text-white/40">worked on.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            A selection of professional experiences and personal projects that
            represent how I work, what I build, and what I&apos;m continuously
            learning.
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ========================================================= */}
          {/* PROFESSIONAL WORK */}
          {/* ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="border-b border-white/10 pb-16 lg:border-b-0 lg:border-r lg:pr-12 "
          >
            {/* Section heading */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <Briefcase
                    size={18}
                    strokeWidth={1.5}
                    className="text-[#00B4D8]"
                  />
                </div>

                <div>
                  {/* <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    01
                  </p> */}

                  <h3 className="mt-1 text-xl font-medium">
                    Professional Work
                  </h3>
                </div>
              </div>

              <span className="hidden text-xs uppercase tracking-widest text-white/20 sm:block">
                Experience
              </span>
            </div>

            {/* Professional items */}
            <div className="space-y-0">
              {[...professionalWork].reverse().map((work, index) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group border-t border-white/10 py-6"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Company Logo */}
                      <div className="mt-2 flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                        {work.logo ? (
                          <Image
                            src={work.logo}
                            alt={`${work.company} logo`}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <Briefcase
                            size={18}
                            strokeWidth={1.5}
                            className="text-[#00B4D8]"
                          />
                        )}
                      </div>

                      {/* Role + Company */}
                      <div>
                        {/* <span className="text-xs tracking-[0.2em] text-[#00B4D8]">
      </span> */}

                        <h4 className="mt-2 text-xl font-medium text-white transition-colors duration-300 group-hover:text-[#00B4D8]">
                          {work.role}
                        </h4>

                        <p className="mt-1 text-sm text-white/40">
                          {work.company}
                        </p>
                      </div>
                    </div>

                    {/* Period */}
                    <span className="whitespace-nowrap pt-1 text-xs text-white/30">
                      {work.period}
                    </span>
                  </div>

                  <p className="max-w-xl text-sm leading-6 text-white/50">
                    {work.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {work.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] text-white/40 transition-colors duration-300 group-hover:border-[#00B4D8]/20 group-hover:text-white/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* PERSONAL PROJECTS */}
          {/* ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="pt-16 lg:pl-12 lg:pt-0"
          >
            {/* Section heading */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10  bg-white/[0.03]">
                  <Code2
                    size={18}
                    strokeWidth={1.5}
                    className="text-[#00B4D8]"
                  />
                </div>

                <div>
                  {/* <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    02
                  </p> */}

                  <h3 className="mt-1 text-xl font-medium">
                    Personal Projects
                  </h3>
                </div>
              </div>

              <span className="hidden text-xs uppercase tracking-widest text-white/20 sm:block">
                Built by me
              </span>
            </div>

            {/* Project items */}
            <div className="space-y-8">
              {personalProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group relative overflow-hidden rounded-1xl border border-white/10 border-gray-800 bg-gray-950/10 p-6 transition-all duration-500 hover:border-[#00B4D8]/30 hover:bg-[#00B4D8]/[0.03]"
                >
                  {/* Subtle aqua glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00B4D8]/[0.8] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      {/* <span className="text-xs tracking-[0.2em] text-[#00B4D8]">
                      </span> */}

                      {/* <span className="text-xs text-white/30">
                        {project.period}
                      </span> */}
                    </div>

                    {/* Project title */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                          {project.period}  |  {project.type}
                        </span>

                        <h4 className="mt-2 text-2xl font-medium transition-colors duration-300 group-hover:text-[#00B4D8]">
                          {project.title}
                        </h4>
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={project.link}
                          aria-label={`View ${project.title}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-[#00B4D8]/50 hover:text-[#00B4D8]"
                        >
                          <ArrowUpRight size={15} />
                        </a>

                        <a
                          href={project.github}
                          aria-label={`View ${project.title} on GitHub`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-[#00B4D8]/50 hover:text-[#00B4D8]"
                        ></a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-6 text-white/45">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/80 transition-colors duration-300 group-hover:border-[#00B4D8]/20 group-hover:text-white/60"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-6 text-white/30">
              Different environments, different problems — but always an
              opportunity to learn, build, and improve.
            </p>

            <a
              href="#about"
              className="group inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-[#00B4D8]"
            >
              Let&apos;s work together
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
