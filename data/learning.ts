export type LearningItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  level: string;
};

export const learningItems: LearningItem[] = [
  {
    id: "javascript",
    number: "01",
    title: "JavaScript",
    description:
      "Strengthening my understanding of modern JavaScript, asynchronous programming, DOM manipulation, and core language concepts.",
    level: "Deepening",
  },

  {
    id: "typescript",
    number: "02",
    title: "TypeScript",
    description:
      "Learning to write safer, more scalable applications with strong typing, generics, interfaces, and advanced TypeScript patterns.",
    level: "Deepening",
  },

  {
    id: "react",
    number: "03",
    title: "React",
    description:
      "Going deeper into component architecture, state management, hooks, performance, and reusable UI patterns.",
    level: "Deepening",
  },

  {
    id: "nextjs",
    number: "04",
    title: "Next.js",
    description:
      "Exploring full-stack development with the App Router, server components, API routes, optimization, and modern application architecture.",
    level: "Exploring",
  },

  {
    id: "sql",
    number: "05",
    title: "SQL",
    description:
      "Improving database design, queries, joins, aggregation, optimization, and working with relational data.",
    level: "Deepening",
  },
];

export const learningFocus = [
  "Full-stack development",
  "Modern web architecture",
  "Database design",
  "Clean & scalable code",
];