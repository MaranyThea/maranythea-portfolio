import AnimatedSection from "../ui/animatedSection";
import {
  User,
  Mail,
  MapPin,
  Briefcase,
} from "lucide-react";

export default function About() {
  return (
    <AnimatedSection>
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <div className="mb-10">
        <h2 className="text-4xl font-bold mt-2">
          About Me
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
          <p className="text-slate-300 leading-8">
            I'm <span className="font-semibold text-white">
              Marany Thea
            </span>
            , a Computer Science & Engineering student
            passionate about software development,
            cloud computing, AI, and modern web
            technologies.

            <br />
            <br />

            I enjoy building responsive web
            applications, solving real-world
            problems, and continuously learning
            new technologies. My goal is to grow
            into a skilled software engineer and
            contribute to meaningful projects.
          </p>

          <a
            href="/resume.pdf"
            className="inline-flex items-center mt-8 px-6 py-3 rounded-xl border border-violet-500 hover:bg-violet-600 transition"
          >
            Download CV
          </a>
        </div>

        {/* Right Side */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 space-y-6">
          <InfoRow
            icon={<User size={20} />}
            label="Name"
            value="Marany Thea"
          />

          <InfoRow
            icon={<Mail size={20} />}
            label="Email"
            value="thea.marany@email.com"
          />

          <InfoRow
            icon={<MapPin size={20} />}
            label="Location"
            value="Takhmau, Kandal, Cambodia"
          />

          <InfoRow
            icon={<Briefcase size={20} />}
            label="Availability"
            value="Open to Opportunities"
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
};

function InfoRow({
  icon,
  label,
  value,
}: InfoRowProps) {
  return (
    <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
      <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-violet-400">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-400">
          {label}
        </p>

        <p className="font-medium text-white">
          {value}
        </p>
      </div>
    </div>
  );
}