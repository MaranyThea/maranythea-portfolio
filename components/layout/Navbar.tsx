"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  {name: "Home", href: "#home"},
  { name: "About", href: "#about" },
  // { name: "Expertise", href: "#expertise" },
  // { name: "Skills", href: "#skills" },
  { name: "Capabilities", href: "#capabilities" },
  // { name: "Experience", href: "#experience" },
  // { name: "Projects", href: "#projects" }
  { name: "Selected Work", href: "#selected-work" },
  { name: "Education", href: "#education" },
  // { name: "Currently Learning", href: "#currentlylearning" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-gray-800/80"
          : "bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 py-4 min-h-[64px] flex items-center">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-white shrink-0"
        >
          Marany<span className="text-blue-500">.dev</span>
        </Link>

        {/* Center Navigation */}
        <div
          className="absolute left-1/2 -translate-x-1/2
                     flex items-center gap-8
                     whitespace-nowrap"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm text-gray-400
                         hover:text-white
                         transition-colors duration-300
                         group"
            >
              {item.name}

              <span
                className="absolute left-0 -bottom-2
                           h-[2px] w-0
                           bg-blue-500
                           group-hover:w-full
                           transition-all duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}