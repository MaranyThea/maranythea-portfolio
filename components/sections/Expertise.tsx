import {
  Code2,
  Database,
  Cloud,
  Gauge,
} from "lucide-react";

const expertise = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, modern, and user-friendly web interfaces with a focus on clean design and smooth user experience.",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description:
      "Developing server-side applications, REST APIs, authentication systems, and reliable backend services.",
    icon: Database,
    skills: ["Node.js", "Express", "REST API", "SQL"],
  },
  {
    title: "Database & Data",
    description:
      "Working with relational and NoSQL databases to store, manage, query, and organize application data efficiently.",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL"],
  },
  {
    title: "Cloud & Deployment",
    description:
      "Deploying and managing web applications using modern development tools and cloud platforms.",
    icon: Cloud,
    skills: ["AWS", "Git", "GitHub", "Vercel"],
  },
  {
    title: "Testing & QA",
    description:
      "Testing applications to identify issues, improve reliability, and evaluate performance under different conditions.",
    icon: Gauge,
    skills: ["K6", "API Testing", "Performance Testing", "Postman"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="w-full px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          My Expertise
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Areas where I apply my technical knowledge to build,
          test, and deploy modern software applications.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group border border-gray-700 rounded-2xl p-6
                           bg-gray-950
                           hover:border-cyan-500
                           transition-all duration-300"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center
                             rounded-xl bg-gray-900
                             border border-gray-700
                             mb-5
                             group-hover:bg-cyan-500
                             group-hover:border-cyan-500
                             transition-all duration-300"
                >
                  <Icon
                    size={24}
                    className="text-cyan-400 group-hover:text-white transition-colors"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6 mb-5">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full
                                 bg-gray-900
                                 border border-gray-700
                                 text-gray-300 text-xs
                                 group-hover:border-gray-600
                                 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}