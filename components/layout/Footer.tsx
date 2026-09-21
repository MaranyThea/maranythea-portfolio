import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-gray-800/80 bg-black/40 backdrop-blur-md px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white">Marany<span className="text-cyan-400">.dev</span></span>
          <span>—</span>
          <p>© {new Date().getFullYear()} Marany THEA. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/MaranyThea"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg border border-gray-800 bg-gray-900/50 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <GithubIcon size={16} />
          </a>

          <a
            href="https://www.linkedin.com/in/maranythea/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg border border-gray-800 bg-gray-900/50 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <LinkedinIcon size={16} />
          </a>

          <Link
            href="#"
            aria-label="Back to top"
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-800 bg-gray-900/50 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors text-xs"
          >
            <span>Top</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </footer>
  );
}