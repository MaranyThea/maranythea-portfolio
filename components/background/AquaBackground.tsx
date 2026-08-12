"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "18%", size: 2, delay: 0 },
  { left: "18%", top: "65%", size: 3, delay: 1.5 },
  { left: "32%", top: "30%", size: 2, delay: 3 },
  { left: "47%", top: "78%", size: 2, delay: 2 },
  { left: "61%", top: "22%", size: 3, delay: 4 },
  { left: "73%", top: "58%", size: 2, delay: 1 },
  { left: "84%", top: "35%", size: 2, delay: 2.5 },
  { left: "92%", top: "76%", size: 3, delay: 4.5 },
];

export default function AquaBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* ─────────────────────────────
          BASE
      ───────────────────────────── */}

      <div className="absolute inset-0 bg-[#050505]" />

      {/* ─────────────────────────────
          AURORA / LIQUID GLOW
      ───────────────────────────── */}

      <motion.div
        className="absolute -left-[20%] -top-[25%] h-[80vw] w-[80vw] rounded-full bg-[#00B4D8]/[0.15] blur-[160px]"
        animate={{
          x: [0, 180, -100, 0],
          y: [0, 100, 220, 0],
          scale: [1, 1.15, 0.92, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-[20%] top-[15%] h-[70vw] w-[70vw] rounded-full bg-[#00B4D8]/[0.07] blur-[170px]"
        animate={{
          x: [0, -180, 80, 0],
          y: [0, 150, -100, 0],
          scale: [1, 0.9, 1.12, 1],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-[25%] top-[35%] h-[55vw] w-[55vw] rounded-full bg-[#00B4D8]/[0.25] blur-[150px]"
        animate={{
          x: [-100, 150, -40, -100],
          y: [80, -120, 100, 80],
        }}
        transition={{
          duration: 27,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ─────────────────────────────
          LIQUID LIGHT
      ───────────────────────────── */}

      <motion.div
        className="absolute left-[-10%] top-[20%] h-[2px] w-[120%] bg-gradient-to-r from-transparent via-[#00B4D8]/20 to-transparent blur-[1px]"
        animate={{
          rotate: [-8, 5, -8],
          y: [0, 100, 0],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-[-10%] top-[55%] h-[1px] w-[120%] bg-gradient-to-r from-transparent via-teal-300/15 to-transparent"
        animate={{
          rotate: [6, -5, 6],
          y: [0, -120, 0],
          scaleX: [1, 0.85, 1],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ─────────────────────────────
          PARTICLES
      ───────────────────────────── */}

      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-[#00B4D8]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.7, 0.15],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + index * 0.4,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ─────────────────────────────
          RADIAL LIGHT
      ───────────────────────────── */}

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(34,211,238,0.09),transparent_50%)]"
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ─────────────────────────────
          DARK VIGNETTE
      ───────────────────────────── */}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,5,5,0.75)_100%)]" />

      {/* ─────────────────────────────
          GRAIN
      ───────────────────────────── */}

      <div className="absolute inset-0 opacity-[0.025]">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.7"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>

          <rect
            width="100%"
            height="100%"
            filter="url(#noise)"
          />
        </svg>
      </div>
    </div>
  );
}