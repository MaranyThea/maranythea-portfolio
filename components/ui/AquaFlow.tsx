"use client";

import { motion } from "framer-motion";

interface AquaFlowProps {
  opacity?: number;
  duration?: number;
}

export default function AquaFlow({
  opacity = 0.14,
  duration = 18,
}: AquaFlowProps) {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-[1]
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* =====================================================
          LIQUID CURRENT 01
          Wide, soft aqua stream
      ====================================================== */}

      <motion.div
        className="
          absolute
          -left-[30%]
          top-[25%]
          h-[180px]
          w-[160%]
          rounded-[50%]
          bg-[#00b4d8]
          blur-[100px]
        "
        style={{
          opacity,
        }}
        animate={{
          x: ["-10%", "12%", "-5%", "-10%"],
          y: [0, -35, 20, 0],
          rotate: [-3, 2, -2, -3],
          scaleY: [1, 1.25, 0.85, 1],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          LIQUID CURRENT 02
          Thin flowing edge
      ====================================================== */}

      <motion.div
        className="
          absolute
          -left-[25%]
          top-[31%]
          h-[90px]
          w-[150%]
          rounded-[50%]
          border-t
          border-[#00b4d8]/30
          blur-[4px]
        "
        animate={{
          x: ["-5%", "10%", "-4%", "-5%"],
          y: [0, -25, 15, 0],
          rotate: [-2, 1, -1, -2],
          scaleY: [1, 1.4, 0.8, 1],
        }}
        transition={{
          duration: duration * 1.15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          LIQUID CURRENT 03
          Opposite flowing stream
      ====================================================== */}

      <motion.div
        className="
          absolute
          -right-[35%]
          top-[58%]
          h-[200px]
          w-[160%]
          rounded-[50%]
          bg-[#00b4d8]
          blur-[120px]
        "
        style={{
          opacity: opacity * 0.65,
        }}
        animate={{
          x: ["10%", "-12%", "5%", "10%"],
          y: [0, 30, -20, 0],
          rotate: [3, -2, 2, 3],
          scaleY: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: duration * 1.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          LIQUID HIGHLIGHT
          Small moving reflection
      ====================================================== */}

      <motion.div
        className="
          absolute
          -left-[10%]
          top-[43%]
          h-[25px]
          w-[45%]
          rounded-full
          bg-[#67e8f9]
          blur-[18px]
        "
        style={{
          opacity: opacity * 1.3,
        }}
        animate={{
          x: ["0%", "170%", "0%"],
          scaleX: [0.7, 1.4, 0.8, 0.7],
          opacity: [0.2, 0.7, 0.25, 0.2],
        }}
        transition={{
          duration: duration * 0.9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}