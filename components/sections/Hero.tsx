"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";
import TypingText from "@/components/ui/TypingText";

export default function Hero() {
  return (
    <AnimatedSection>

      <section
        className="relative min-h-screen
                   flex items-center
                   px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20
                   overflow-hidden"
      >

        {/* =========================
            Background Effects
        ========================= */}
        <div className="pointer-events-none absolute inset-0">
          {/* cyan Glow */}
          <div
            className="absolute
                       top-1/4
                       left-1/4
                       w-72
                       h-72
                       rounded-full
                       bg-cyan-500/10
                       blur-3xl
                       animate-pulse"
          />

          {/* Violet Glow */}
          <div
            className="absolute
                       bottom-1/4
                       right-1/4
                       w-72
                       h-72
                       rounded-full
                       bg-violet-500/10
                       blur-3xl
                       animate-pulse"
          />
        </div>

        {/* Decorative Dot */}
        <div
          className="absolute
                     top-32
                     right-[15%]
                     w-3
                     h-3
                     rounded-full
                     bg-cyan-400
                     shadow-[0_0_25px_rgba(59,130,246,0.8)]
                     animate-bounce"
        />

        {/* Decorative Spark */}
        <Sparkles
          size={20}
          className="absolute
                     bottom-32
                     right-[20%]
                     text-violet-400/60
                     animate-pulse"
        />

        {/* =========================
            Main Content
        ========================= */}
        <div
          className="relative
                     max-w-7xl
                     mx-auto
                     w-full
                     grid
                     lg:grid-cols-[1.2fr_0.8fr]
                     gap-16
                     items-center"
        >
          {/* =========================
              LEFT — Introduction
          ========================= */}
          <div>
            {/* Status */}
            <div
              className="inline-flex
                         items-center
                         gap-2
                         px-4
                         py-2
                         mb-8
                         rounded-full
                         border
                         border-gray-800
                         bg-gray-900/50
                         backdrop-blur-sm
                         text-sm
                         text-gray-400"
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute
                             inline-flex
                             h-full
                             w-full
                             rounded-full
                             bg-cyan-400
                             opacity-75
                             animate-ping"
                />

                <span
                  className="relative
                             inline-flex
                             h-2
                             w-2
                             rounded-full
                             bg-cyan-500"
                />
              </span>
              Open to opportunities
            </div>

            {/* Heading */}
<h1
  className="
    text-3xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-8xl
    font-bold
    tracking-tight
    leading-[1.1]
    sm:leading-[0.98]
    text-white
  "
>
  Hi, I&apos;m{" "}
  <TypingText
    text="Marany."
    speed={120}
    delay={500}
  />
  <br />
  I build things
  <br />
  <span className="text-gray-500">
    for the web.
  </span>
</h1>

            {/* Description */}
            <p
              className="mt-6
                         sm:mt-8
                         max-w-2xl
                         text-base
                         sm:text-lg
                         leading-7
                         sm:leading-8
                         text-gray-400"
            >
              A Computer Science & Engineering graduate passionate about
              building modern digital experiences with web technologies, data,
              cloud, and AI.
            </p>

            {/* Buttons */}
            <div
              className="flex
                         flex-col
                         sm:flex-row
                         items-stretch
                         sm:items-center
                         gap-3
                         sm:gap-4
                         mt-8
                         sm:mt-10"
            >
              {/* Primary Button */}
              <Link
                href="#work"
                className="group
                           inline-flex
                           items-center
                           justify-center
                           gap-2
                           px-6
                           py-3.5
                           rounded-xl
                           bg-cyan-500
                           text-white
                           font-medium
                           hover:bg-cyan-400
                           transition-all
                           duration-300
                           hover:-translate-y-1
                           shadow-lg
                           shadow-cyan-500/20
                           text-center"
              >
                View My Work
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-1
                             group-hover:-translate-y-1
                             transition-transform
                             duration-300"
                />
              </Link>

              {/* Secondary Button */}
              <a
                href="mailto:thea.marany@gmail.com"
                className="group
                           inline-flex
                           items-center
                           justify-center
                           gap-2
                           px-6
                           py-3.5
                           rounded-xl
                           border
                           border-gray-700
                           text-gray-400
                           hover:text-white
                           hover:border-cyan-500
                           transition-all
                           duration-300
                           hover:-translate-y-1
                           text-center"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Scroll Indicator */}
            <Link
              href="#about"
              className="inline-flex
                         items-center
                         gap-3
                         mt-12
                         sm:mt-16
                         text-sm
                         text-gray-500
                         hover:text-cyan-400
                         transition-colors
                         duration-300"
            >
              <span>Scroll to explore</span>

              <ArrowDown size={16} className="animate-bounce" />
            </Link>
          </div>

          {/* =========================
              RIGHT — Profile
          ========================= */}
          <div
            className="relative
                       flex
                       justify-center
                       lg:justify-end
                       mt-6
                       lg:mt-0
                       px-4"
          >
            {/* Outer Glow */}
            <div
              className="absolute
                         w-64
                         h-64
                         sm:w-96
                         sm:h-96
                         rounded-full
                         bg-cyan-500/10
                         blur-3xl
                         animate-pulse"
            />

            {/* Image Container */}
            <div
              className="relative
                         w-64
                         h-80
                         sm:w-80
                         sm:h-[440px]
                         lg:w-96
                         lg:h-[500px]
                         rounded-3xl
                         sm:rounded-[2rem]
                         overflow-hidden
                         border
                         border-gray-700
                         bg-gray-900
                         shadow-2xl
                         shadow-cyan-500/10
                         rotate-1
                         sm:rotate-2
                         hover:rotate-0
                         transition-transform
                         duration-500"
            >
              <Image
                src="/images/MaranyThea_Profile.jpeg"
                alt="Marany Thea"
                fill
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                priority
                className="object-cover"
              />

              {/* Image Overlay */}
              <div
                className="absolute
                           inset-0
                           bg-gradient-to-t
                           from-black/60
                           via-transparent
                           to-transparent"
              />
            </div>

            {/* Floating Label */}
            <div
              className="absolute
                         -bottom-4
                         -left-1
                         sm:-left-4
                         px-4
                         py-2.5
                         sm:px-5
                         sm:py-3
                         rounded-xl
                         sm:rounded-2xl
                         border
                         border-gray-700
                         bg-gray-950/90
                         backdrop-blur-md
                         shadow-xl
                         animate-[float_4s_ease-in-out_infinite]"
            >
              <p className="text-[11px] sm:text-xs text-gray-500">Currently</p>

              <p className="text-xs sm:text-sm font-medium text-white">
                Building & Learning
              </p>
            </div>

            {/* Floating Accent */}
            <div
              className="absolute
                         -top-4
                         -right-1
                         sm:-right-4
                         w-10
                         h-10
                         sm:w-12
                         sm:h-12
                         rounded-xl
                         sm:rounded-2xl
                         border
                         border-cyan-500/30
                         bg-cyan-500/10
                         backdrop-blur-md
                         flex
                         items-center
                         justify-center
                         text-cyan-400
                         animate-bounce"
            >
              <Sparkles size={18} />
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
