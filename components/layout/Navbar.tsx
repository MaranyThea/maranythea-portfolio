"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, GitBranch, LinkIcon, Mail } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Selected Work", href: "#work" },
  { name: "Education", href: "#education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled || mobileMenuOpen
        ? "bg-black/90 backdrop-blur-xl border-b border-gray-800/80 shadow-lg shadow-black/50"
        : "bg-black/20 backdrop-blur-md"
        }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 min-h-[64px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="text-xl font-bold text-white tracking-tight flex items-center gap-1 group z-20"
        >
          <span>Marany</span>
          <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">.dev</span>
        </Link>

        {/* Desktop Center Navigation */}
        <div
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 whitespace-nowrap"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm text-gray-400 hover:text-white transition-colors duration-300 group py-1"
            >
              {item.name}
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              />
            </Link>
          ))}
        </div>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:thea.marany@gmail.com"
            className="text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-gray-800 bg-gray-900/60 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 inline-flex items-center gap-1.5"
          >
            <span>Contact</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="md:hidden relative z-20 p-2 rounded-xl border border-gray-800 bg-gray-900/80 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[64px] bg-black/95 backdrop-blur-2xl border-b border-gray-800/80 px-6 py-6 transition-all shadow-2xl flex flex-col gap-5 animate-in slide-in-from-top-4 duration-200 max-h-[calc(100vh-64px)] overflow-y-auto"
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent transition-all"
              >
                <span>{item.name}</span>
                <span className="text-xs font-mono text-cyan-400/60">0{index + 1}</span>
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-800/80 flex flex-col gap-3">
            <a
              href="mailto:thea.marany@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-white font-medium hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 text-sm"
            >
              <Mail size={16} />
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </a>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href="https://github.com/MaranyThea"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <GitBranch size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/marany-thea-347302245/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg border border-gray-800 bg-gray-900/60 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <LinkIcon size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}