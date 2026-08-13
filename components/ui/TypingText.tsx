"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
}

export default function TypingText({
  text,
  speed = 120,
  delay = 500,
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;

    const timer = setInterval(() => {
      index += 1;

      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [started, text, speed]);

  return (
    <span className="relative inline-block">
      <span
        className="
          bg-gradient-to-r
          from-[#00b4d8]
          via-[#67e8f9]
          to-[#00b4d8]
          bg-[length:200%_100%]
          bg-clip-text
          text-transparent
          animate-[nameFlow_5s_ease-in-out_infinite]
        "
      >
        {displayedText}
      </span>

      {/* Typing cursor */}

      <span
        className="
          ml-1
          inline-block
          h-[0.85em]
          w-[3px]
          translate-y-[0.08em]
          rounded-full
          bg-[#00b4d8]
          shadow-[0_0_12px_rgba(0,180,216,0.8)]
          animate-pulse
        "
      />
    </span>
  );
}