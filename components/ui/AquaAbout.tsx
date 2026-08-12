"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AquaAbout() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      const bubbles = gsap.utils.toArray<HTMLElement>(".aqua-bubble");

      // Start hidden and small
      gsap.set(bubbles, {
        opacity: 0,
        scale: 0.5,
      });

      // Appear when About enters viewport
      gsap.to(bubbles, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Continuous floating
      bubbles.forEach((bubble, index) => {
        gsap.to(bubble, {
          x: index % 2 === 0 ? 25 : -25,
          y: index % 2 === 0 ? -35 : 35,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        pointer-events-none
        absolute
        inset-0
        z-0
        overflow-hidden
      "
    >
      {/* Large Aqua Bubble */}
      <div
        className="
          aqua-bubble
          absolute
          -top-20
          right-[5%]
          w-80
          h-80
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
      />

      {/* Left Aqua Bubble */}
      <div
        className="
          aqua-bubble
          absolute
          top-[30%]
          -left-24
          w-64
          h-64
          rounded-full
          bg-cyan-400/20
          blur-3xl
        "
      />

      {/* Bottom Bubble */}
      <div
        className="
          aqua-bubble
          absolute
          bottom-[5%]
          right-[30%]
          w-48
          h-48
          rounded-full
          bg-blue-400/20
          blur-2xl
        "
      />

      {/* Small Bubble */}
      <div
        className="
          aqua-bubble
          absolute
          top-[20%]
          left-[35%]
          w-24
          h-24
          rounded-full
          bg-cyan-300/20
          blur-xl
        "
      />
    </div>
  );
}