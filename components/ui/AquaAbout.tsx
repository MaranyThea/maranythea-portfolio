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
      const orb = container.querySelector(".aqua-orb");
      const orb2 = container.querySelector(".aqua-orb-2");
      const orb3 = container.querySelector(".aqua-orb-3");
      const bubbles = gsap.utils.toArray<HTMLElement>(".aqua-small");
      const wave = container.querySelector(".aqua-wave");

      // --------------------------------
      // Initial state
      // --------------------------------

      gsap.set([orb, orb2, orb3], {
        opacity: 0,
        scale: 0.6,
      });

      gsap.set(bubbles, {
        opacity: 0,
        scale: 0,
      });

      gsap.set(wave, {
        opacity: 0,
        scale: 0.8,
      });

      // --------------------------------
      // Main Aqua Orb entrance
      // --------------------------------

      gsap.to(orb, {
        opacity: 1,
        scale: 1,
        duration: 1.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // --------------------------------
      // Secondary orbs
      // --------------------------------

      gsap.to(orb2, {
        opacity: 1,
        scale: 1,
        duration: 2,
        delay: 0.25,
        ease: "power3.out",

        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(orb3, {
        opacity: 1,
        scale: 1,
        duration: 2.2,
        delay: 0.45,
        ease: "power3.out",

        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // --------------------------------
      // Small bubbles entrance
      // --------------------------------

      gsap.to(bubbles, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.12,
        ease: "back.out(1.7)",

        scrollTrigger: {
          trigger: container,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      // --------------------------------
      // Main orb organic movement
      // --------------------------------

      gsap.to(orb, {
        x: 35,
        y: -25,
        rotation: 8,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2, {
        x: -45,
        y: 30,
        rotation: -10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb3, {
        x: 25,
        y: 35,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // --------------------------------
      // Small bubbles floating
      // --------------------------------

      bubbles.forEach((bubble, index) => {
        gsap.to(bubble, {
          y: -80 - index * 15,
          x: index % 2 === 0 ? 25 : -25,
          duration: 3 + index * 0.5,
          delay: index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // --------------------------------
      // Aqua wave
      // --------------------------------

      gsap.to(wave, {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.to(wave, {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      // --------------------------------
      // Scroll interaction
      // --------------------------------

      gsap.to(container, {
        y: -40,
        ease: "none",

        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
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
      {/* --------------------------------
          Main Aqua Orb
      -------------------------------- */}

      <div
        className="
          aqua-orb
          absolute
          -top-32
          right-[3%]
          w-[420px]
          h-[420px]
          rounded-full
          bg-cyan-500/20
          blur-[90px]
        "
      />

      {/* --------------------------------
          Secondary Aqua Orb
      -------------------------------- */}

      <div
        className="
          aqua-orb-2
          absolute
          top-[30%]
          -left-32
          w-[360px]
          h-[360px]
          rounded-full
          bg-cyan-400/15
          blur-[85px]
        "
      />

      {/* --------------------------------
          Small Aqua Orb
      -------------------------------- */}

      <div
        className="
          aqua-orb-3
          absolute
          bottom-[5%]
          right-[25%]
          w-[240px]
          h-[240px]
          rounded-full
          bg-cyan-400/15
          blur-[70px]
        "
      />

      {/* --------------------------------
          Rotating Aqua Wave
      -------------------------------- */}

      <div
        className="
          aqua-wave
          absolute
          top-[10%]
          right-[10%]
          w-[500px]
          h-[500px]
          rounded-full
          border
          border-cyan-400/10
          blur-[2px]
        "
      />

      {/* --------------------------------
          Small Floating Bubbles
      -------------------------------- */}

      <div
        className="
          aqua-small
          absolute
          top-[22%]
          left-[28%]
          w-5
          h-5
          rounded-full
          bg-cyan-300/30
          blur-[1px]
        "
      />

      <div
        className="
          aqua-small
          absolute
          top-[45%]
          left-[42%]
          w-3
          h-3
          rounded-full
          bg-cyan-400/40
        "
      />

      <div
        className="
          aqua-small
          absolute
          top-[60%]
          right-[30%]
          w-7
          h-7
          rounded-full
          bg-cyan-400/25
          blur-[2px]
        "
      />

      <div
        className="
          aqua-small
          absolute
          bottom-[20%]
          left-[25%]
          w-4
          h-4
          rounded-full
          bg-cyan-300/30
        "
      />

      <div
        className="
          aqua-small
          absolute
          top-[15%]
          right-[35%]
          w-2
          h-2
          rounded-full
          bg-cyan-300/40
        "
      />

      <div
        className="
          aqua-small
          absolute
          bottom-[30%]
          right-[15%]
          w-3
          h-3
          rounded-full
          bg-cyan-400/30
        "
      />
    </div>
  );
}