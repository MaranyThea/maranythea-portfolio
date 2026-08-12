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
    id: "task-management",
    number: "03",
    type: "Project",
    year: "2026",
    title: "Task Management App",
    subtitle: "Simple tools for organized work",
    description:
      "A task management application focused on creating, organizing, completing, and managing daily tasks through a clean and intuitive interface.",
    technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
    image: "/images/work/task-management.jpg",
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