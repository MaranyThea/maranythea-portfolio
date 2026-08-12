"use client";

import { Particles } from "@tsparticles/react";

export default function AboutBubbles() {
  return (
    <Particles
      id="about-bubbles"
      className="absolute inset-0 z-0 pointer-events-none"
      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: {
            value: "transparent",
          },
        },

        particles: {
          number: {
            value: 25,
          },

          color: {
            value: "#3b82f6",
          },

          opacity: {
            value: 0.2,
          },

          size: {
            value: {
              min: 3,
              max: 14,
            },
          },

          shape: {
            type: "circle",
          },

          move: {
            enable: true,
            direction: "top",

            speed: {
              min: 0.3,
              max: 1,
            },

            random: true,
            straight: false,

            outModes: {
              default: "out",
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}