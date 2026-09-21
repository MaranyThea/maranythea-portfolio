export type WorkItem = {
  id: string;
  number: string;
  type: "Experience" | "Project";
  year: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
};

export const workItems: WorkItem[] = [
  {
    id: "software-engineer",
    number: "01",
    type: "Experience",
    year: "2025",
    title: "Software Engineer",
    subtitle: "Building modern digital experiences",
    description:
      "Worked on software development projects, contributing to the development, testing, and improvement of web-based applications and digital solutions.",
    technologies: ["React", "JavaScript", "TypeScript", "Node.js"],
    image: "/images/work/software-engineer.jpg",
  },

  {
    id: "portfolio",
    number: "02",
    type: "Project",
    year: "2026",
    title: "Personal Portfolio",
    subtitle: "A digital space for my work",
    description:
      "A personal portfolio designed and developed to showcase my technical capabilities, professional experience, and selected projects through an interactive and refined interface.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/images/work/portfolio.jpg",
    link: "https://github.com/MaranyThea",
  },

  {
    id: "flowboard",
    number: "03",
    type: "Project",
    year: "2026",
    title: "FlowBoard",
    subtitle: "Full-stack personal tracking dashboard",
    description:
      "A full-stack personal tracking dashboard for managing projects, tasks, goals, habits, finances, and everyday progress in one place.",
    technologies: [
      "Angular",
      "TypeScript",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "REST API",
      "Git",
      "GitHub",
    ],
    image: "/images/work/flowboard.jpg",
    link: "https://github.com/MaranyThea",
  },

  {
    id: "it-support",
    number: "04",
    type: "Experience",
    year: "2021 — 2023",
    title: "IT Support",
    subtitle: "Technology & system operations",
    description:
      "Provided technical and administrative support, including data management, file organization, troubleshooting, and day-to-day technology assistance.",
    technologies: ["IT Support", "Data Management", "Troubleshooting"],
    image: "/images/work/it-support.jpg",
  },
];