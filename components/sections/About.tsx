"use client";

import { useEffect, useRef } from "react";
import AquaAbout from "../ui/AquaAbout";
import {
  User,
  Mail,
  MapPin,
  Briefcase,
  GitBranch,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import AnimatedSection from "../ui/animatedSection";

export default function About() {
  const aquaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = aquaRef.current;

    if (!container) return;

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <AnimatedSection>
      <section
        id="about"
        className="relative max-w-7xl mx-auto px-6 py-12 scroll-mt-14 overflow-hidden"
      >
        <AquaAbout />

        {/* =====================================================
            AQUA SIGNATURE
        ====================================================== */}

        <div
          ref={aquaRef}
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {/* Main Aqua Glow */}

          <div
            className="
              aqua-glow
              absolute
              w-[420px]
              h-[420px]
              rounded-full
              opacity-30
              blur-3xl
              transition-transform
              duration-1000
            "
          />

          {/* Large Fluid Shape */}

          <div
            className="
              aqua-orb
              absolute
              -top-32
              -right-32
              w-[430px]
              h-[430px]
              rounded-full
              opacity-20
              blur-[2px]
            "
          />

          {/* Second Fluid Shape */}

          <div
            className="
              aqua-orb aqua-orb-two
              absolute
              top-[45%]
              -left-40
              w-[300px]
              h-[300px]
              rounded-full
              opacity-15
              blur-[3px]
            "
          />

          {/* Small Bubbles */}

          <span className="aqua-bubble bubble-one" />
          <span className="aqua-bubble bubble-two" />
          <span className="aqua-bubble bubble-three" />
          <span className="aqua-bubble bubble-four" />
          <span className="aqua-bubble bubble-five" />

          {/* Tiny Water Particles */}

          <span className="aqua-particle particle-one" />
          <span className="aqua-particle particle-two" />
          <span className="aqua-particle particle-three" />
          <span className="aqua-particle particle-four" />
        </div>

        {/* =====================================================
            SECTION CONTENT
        ====================================================== */}

        <div className="relative z-10">
          {/* Section Heading */}

          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3">
              Get to know me
            </p>

            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              About Me
            </h2>
          </div>

          {/* =====================================================
              MAIN GRID
          ====================================================== */}

          <div className="grid lg:grid-cols-[1.3fr_0.4fr] gap-10">

            {/* =================================================
                Main Story
            ================================================= */}

            <div
              className="
                group relative
                rounded-3xl
                border border-gray-800
                bg-gray-950/50
                backdrop-blur-sm
                p-8 sm:p-10
                overflow-hidden
                transition-all duration-500
                hover:border-cyan-400/40
              "
            >
              {/* Card Aqua Reflection */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -top-24
                  -right-24
                  w-48
                  h-48
                  rounded-full
                  bg-cyan-400/10
                  blur-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-700
                "
              />

              {/* Small Aqua Line */}

              <div
                className="
                  absolute
                  top-0
                  left-8
                  w-20
                  h-[2px]
                  bg-gradient-to-r
                  from-cyan-400
                  to-transparent
                  opacity-70
                "
              />

              <div className="relative">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Building with{" "}
                  <span className="text-cyan-400">
                    curiosity.
                  </span>
                </h3>

                <div className="space-y-5 text-gray-400 leading-8">
                  <p>
                    I&apos;m{" "}
                    <span className="text-white font-medium">
                      Marany Thea
                    </span>
                    , a Computer Science & Engineering graduate passionate
                    about technology, problem-solving, and building useful
                    digital experiences.
                  </p>

                  <p>
                    My interests span modern web development, data, cloud
                    computing, and AI. I enjoy turning ideas into practical
                    solutions and continuously exploring new technologies.
                  </p>

                  <p>
                    Beyond coding, I&apos;m interested in creativity,
                    photography, and digital content. I believe good technology
                    should not only work well — it should also feel intuitive
                    and meaningful to the people using it.
                  </p>
                </div>

                {/* CV Button */}

                <a
                  href="/pdf/MaranyThea_resume.pdf"
                  download
                  className="
                    group/button
                    inline-flex
                    items-center
                    gap-2
                    mt-8
                    px-5
                    py-3
                    rounded-xl
                    border
                    border-gray-700
                    text-gray-300
                    hover:text-white
                    hover:border-cyan-400
                    hover:bg-cyan-400/10
                    transition-all duration-300
                  "
                >
                  Download CV

                  <ArrowUpRight
                    size={17}
                    className="
                      group-hover/button:translate-x-1
                      group-hover/button:-translate-y-1
                      transition-transform duration-300
                    "
                  />
                </a>
              </div>
            </div>

            {/* =================================================
                Personal Information
            ================================================= */}

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
              <InfoRow
                icon={<User size={18} />}
                label="Name"
                value="Marany Thea"
              />

              <InfoRow
                icon={<MapPin size={18} />}
                label="Location"
                value="Phnom Penh, Cambodia"
              />

              <InfoRow
                icon={<Mail size={18} />}
                label="Email"
                value="thea.marany@gmail.com"
                href="mailto:thea.marany@gmail.com"
              />

              <InfoRow
                icon={<GitBranch size={18} />}
                label="GitHub"
                value="MaranyThea"
                href="https://github.com/MaranyThea"
              />

              <InfoRow
                icon={<Globe size={18} />}
                label="LinkedIn"
                value="Marany Thea"
                href="https://www.linkedin.com/in/marany-thea-347302245/"
              />

              <InfoRow
                icon={<Briefcase size={18} />}
                label="Availability"
                value="Open to opportunities"
              />
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}


/* ============================================================
   INFO ROW
============================================================ */

type InfoRowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
};

function InfoRow({
  icon,
  label,
  value,
  href,
}: InfoRowProps) {
  const content = (
    <>
      <div
        className="
          shrink-0
          w-9 h-9
          rounded-lg
          border border-gray-800
          bg-gray-900
          flex items-center justify-center
          text-cyan-400
          group-hover:bg-cyan-400/10
          group-hover:border-cyan-400/30
          group-hover:scale-110
          transition-all duration-300
        "
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[11px] uppercase tracking-wider text-gray-500">
          {label}
        </p>

        <p className="mt-1 text-sm font-medium text-white break-words">
          {value}
        </p>
      </div>

      {href && (
        <ArrowUpRight
          size={15}
          className="
            shrink-0
            text-gray-600
            group-hover:text-cyan-400
            group-hover:translate-x-1
            group-hover:-translate-y-1
            transition-all duration-300
          "
        />
      )}
    </>
  );

  const className = `
    group
    flex items-center gap-3
    min-h-[78px]
    p-4
    rounded-2xl
    border border-gray-800
    bg-gray-950/40
    backdrop-blur-sm
    hover:border-cyan-400/40
    hover:-translate-y-1
    hover:shadow-[0_10px_40px_rgba(34,211,238,0.08)]
    transition-all duration-300
  `;

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={
          href.startsWith("http")
            ? "noopener noreferrer"
            : undefined
        }
        className={className}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}