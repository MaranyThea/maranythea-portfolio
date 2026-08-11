import AnimatedSection from "../ui/animatedSection";
import {
  User,
  Mail,
  MapPin,
  Briefcase,
  GitBranch,
  Globe,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  return (
    <AnimatedSection>
      <section
        id="about"
        className="relative max-w-7xl mx-auto px-6 py-12 scroll-mt-14"
      >
        {/* Section Heading */}
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">
            Get to know me
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_0.4fr] gap-10">
          {/* =========================
              Main Story
          ========================= */}
          <div
            className="group relative
                       rounded-3xl
                       border border-gray-800
                       bg-gray-950/50
                       p-8 sm:p-10
                       overflow-hidden
                       transition-all duration-500
                       hover:border-blue-500/40"
          >
            {/* Hover Glow */}
            <div
              className="pointer-events-none
                         absolute -top-24 -right-24
                         w-48 h-48
                         rounded-full
                         bg-blue-500/10
                         blur-3xl
                         opacity-0
                         group-hover:opacity-100
                         transition-opacity duration-500"
            />

            <div className="relative">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Building with curiosity.
              </h3>

              <div className="space-y-5 text-gray-400 leading-8">
                <p>
                  I&apos;m{" "}
                  <span className="text-white font-medium">Marany Thea</span>, a
                  Computer Science & Engineering graduate passionate about
                  technology, problem-solving, and building useful digital
                  experiences.
                </p>

                <p>
                  My interests span modern web development, data, cloud
                  computing, and AI. I enjoy turning ideas into practical
                  solutions and continuously exploring new technologies.
                </p>

                <p>
                  Beyond coding, I&apos;m interested in creativity, photography,
                  and digital content. I believe good technology should not only
                  work well — it should also feel intuitive and meaningful to
                  the people using it.
                </p>
              </div>

              {/* CV Button */}
              <a
                href="/pdf/MaranyThea_resume.pdf"
                download
                className="group/button
                           inline-flex
                           items-center
                           gap-2
                           mt-8
                           px-5 py-3
                           rounded-xl
                           border border-gray-700
                           text-gray-300
                           hover:text-white
                           hover:border-blue-500
                           hover:bg-blue-500/10
                           transition-all duration-300"
              >
                Download CV
                <ArrowUpRight
                  size={17}
                  className="group-hover/button:translate-x-1
                             group-hover/button:-translate-y-1
                             transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* =========================
              Personal Information
          ========================= */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
            <InfoRow
              icon={<User size={18} />}
              label="Name"
              value="Marany Thea"
            />

            <InfoRow
              icon={<MapPin size={18} />}
              label="Location"
              value="Phnom Penh, Cambodia"
            />

            <InfoRow
              icon={<Mail size={18} />}
              label="Email"
              value="thea.marany@gmail.com"
              href="mailto:thea.marany@gmail.com"
            />

            <InfoRow
              icon={<GitBranch size={18} />}
              label="GitHub"
              value="MaranyThea"
              href="https://github.com/MaranyThea"
            />

            <InfoRow
              icon={<Globe size={18} />}
              label="LinkedIn"
              value="Marany Thea"
              href="https://www.linkedin.com/in/marany-thea-347302245/"
            />

            <InfoRow
              icon={<Briefcase size={18} />}
              label="Availability"
              value="Open to opportunities"
            />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

type InfoRowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
};

function InfoRow({ icon, label, value, href }: InfoRowProps) {
  const content = (
    <>
      <div
        className="shrink-0
                   w-9 h-9
                   rounded-lg
                   border border-gray-800
                   bg-gray-900
                   flex items-center justify-center
                   text-blue-400
                   group-hover:bg-blue-500/10
                   group-hover:border-blue-500/30
                   transition-all duration-300"
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[11px] uppercase tracking-wider text-gray-500">
          {label}
        </p>

        <p className="mt-1 text-sm font-medium text-white truncate">{value}</p>
      </div>

      {href && (
        <ArrowUpRight
          size={15}
          className="shrink-0
                     text-gray-600
                     group-hover:text-blue-400
                     group-hover:translate-x-1
                     group-hover:-translate-y-1
                     transition-all duration-300"
        />
      )}
    </>
  );

  const className = `
    group
    flex items-center gap-3
    min-h-[78px]
    p-4
    rounded-2xl
    border border-gray-800
    bg-gray-950/40
    hover:border-blue-500/40
    hover:-translate-y-1
    transition-all duration-300
  `;

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={className}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
