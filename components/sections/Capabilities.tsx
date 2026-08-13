"use client";

import { useState } from "react";
import AquaAbout from "../ui/AquaAbout";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Gauge,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Frontend",
    icon: Code2,
    heading: "Frontend Development",
    description:
      "I build responsive, modern, and interactive interfaces with a strong focus on usability, visual consistency, and smooth user experience.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },

  {
    number: "02",
    title: "Backend",
    icon: Server,
    heading: "Backend Development",
    description:
      "I develop reliable server-side applications, REST APIs, authentication systems, and backend services that support modern web applications.",
    skills: [
      "Node.js",
      "Express",
      "REST API",
      "JWT",
    ],
  },

  {
    number: "03",
    title: "Data",
    icon: Database,
    heading: "Data & Database",
    description:
      "I work with structured and unstructured data, designing databases and building data-driven applications that are organized and reliable.",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQL",
    ],
  },

  {
    number: "04",
    title: "Cloud",
    icon: Cloud,
    heading: "Cloud & Deployment",
    description:
      "I deploy and manage modern applications using cloud platforms and development tools, with an emphasis on reliable and practical deployment workflows.",
    skills: [
      "AWS",
      "Vercel",
      "Git",
      "GitHub",
    ],
  },

  {
    number: "05",
    title: "Testing",
    icon: Gauge,
    heading: "Testing & QA",
    description:
      "I test applications to identify issues, evaluate performance, and improve reliability across different usage conditions.",
    skills: [
      "K6",
      "Postman",
      "API Testing",
      "Performance Testing",
    ],
  },
];

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeCapability =
    activeIndex !== null
      ? capabilities[activeIndex]
      : null;

  return (
    <section
      id="capabilities"
      className="relative w-full px-6 py-12 scroll-mt-14"
    >
      <AquaAbout />
      <div className="max-w-7xl mx-auto">

        {/* =========================
            SECTION HEADING
        ========================= */}

        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">
            What I specialize in
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Capabilities
          </h2>
        </div>

        {/* =========================
            MAIN LAYOUT
        ========================= */}

        <div className="grid lg:grid-cols-[0.65fr_1.35fr] gap-10">

          {/* =========================
              LEFT SIDE
          ========================= */}

          <div className="space-y-3">

            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-6">
              Areas I work in
            </p>

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              const isActive = activeIndex === index;

              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`
                    group
                    w-full
                    flex items-center gap-4
                    p-4
                    rounded-2xl
                    border
                    text-left
                    transition-all duration-300

                    ${
                      isActive
                        ? "border-blue-500/50 bg-blue-500/[0.08]"
                        : "border-gray-800 bg-gray-950/40 hover:border-blue-500/40 hover:bg-gray-900/60"
                    }
                  `}
                >

                  {/* Number */}

                  <span
                    className={`
                      text-xs
                      transition-colors duration-300
                      ${
                        isActive
                          ? "text-blue-400"
                          : "text-gray-600 group-hover:text-blue-400"
                      }
                    `}
                  >
                    {item.number}
                  </span>

                  {/* Icon */}

                  <div
                    className={`
                      w-10 h-10
                      rounded-xl
                      border
                      flex items-center justify-center
                      transition-all duration-300

                      ${
                        isActive
                          ? "bg-blue-500 border-blue-500 text-white"
                          : "bg-gray-900 border-gray-800 text-blue-400 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white"
                      }
                    `}
                  >
                    <Icon size={18} />
                  </div>

                  {/* Title */}

                  <span
                    className={`
                      font-medium
                      transition-colors duration-300

                      ${
                        isActive
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white"
                      }
                    `}
                  >
                    {item.title}
                  </span>

                  {/* Active indicator */}

                  <span
                    className={`
                      ml-auto
                      w-1.5 h-1.5
                      rounded-full
                      transition-all duration-300

                      ${
                        isActive
                          ? "bg-blue-400 opacity-100"
                          : "bg-transparent opacity-0"
                      }
                    `}
                  />

                </button>
              );
            })}
          </div>

          {/* =========================
              RIGHT SIDE
          ========================= */}

          <div
            className="
              relative
              min-h-[460px]
              rounded-3xl
              border border-gray-800
              bg-gray-950/50
              p-6 sm:p-8
              overflow-hidden
            "
          >

            {/* Aqua Glow */}

            <div
              className="
                pointer-events-none
                absolute
                -top-32
                -right-32
                w-72
                h-72
                rounded-full
                bg-blue-500/10
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-32
                -left-32
                w-72
                h-72
                rounded-full
                bg-blue-500/[0.06]
                blur-3xl
              "
            />

            {/* =========================
                DEFAULT STATE
            ========================= */}

            {activeCapability === null && (
              <div className="relative h-full flex flex-col justify-center">

                <p className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-4">
                  Primary Specialization
                </p>

                <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Full-Stack
                  <br />
                  Web Development
                </h3>

                <p className="mt-4 max-w-2xl text-gray-400 leading-7">
                  I specialize in building modern web applications
                  from interface to backend, combining clean
                  architecture, responsive design, and practical
                  problem-solving.
                </p>

                {/* Secondary Focus */}

                <div className="mt-4 pt-4 border-t border-gray-800">

                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">
                    Secondary Focus
                  </p>

                  <h4 className="text-xl font-semibold text-white">
                    Data-Driven Applications
                  </h4>

                  <p className="mt-3 text-sm text-gray-500 leading-6 max-w-xl">
                    Working with databases, APIs, and data to create
                    applications that are reliable, structured,
                    and useful.
                  </p>

                </div>

                {/* Core Technologies */}

                <div className="mt-8">

                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
                    Core Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Node.js",
                      "SQL",
                      "PostgreSQL",
                      "MongoDB",
                      "AWS",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1.5
                          rounded-full
                          border border-gray-800
                          bg-gray-900
                          text-sm text-gray-300
                          hover:border-blue-500/40
                          hover:text-white
                          transition-all duration-300
                        "
                      >
                        {skill}
                      </span>
                    ))}

                  </div>
                </div>

              </div>
            )}

            {/* =========================
                ACTIVE STATE
            ========================= */}

            {activeCapability && (
              <div
                key={activeCapability.number}
                className="relative h-full flex flex-col justify-center"
              >

                {/* Number */}

                <p className="text-sm text-blue-400 mb-5 tracking-widest">
                  {activeCapability.number}
                </p>

                {/* Heading */}

                <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  {activeCapability.heading}
                </h3>

                {/* Description */}

                <p className="mt-6 max-w-2xl text-gray-400 leading-7">
                  {activeCapability.description}
                </p>

                {/* What I can do */}

                <div className="mt-10">

                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
                    Technologies I use
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {activeCapability.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1.5
                          rounded-full
                          border border-gray-800
                          bg-gray-900
                          text-sm text-gray-300
                          hover:border-blue-500/40
                          hover:text-white
                          transition-all duration-300
                        "
                      >
                        {skill}
                      </span>
                    ))}

                  </div>
                </div>

                {/* Bottom message */}

                <div className="mt-10 pt-6 border-t border-gray-800">

                  <p className="text-sm text-gray-500">
                    Part of my{" "}
                    <span className="text-gray-300">
                      Full-Stack Web Development
                    </span>{" "}
                    specialization.
                  </p>

                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}