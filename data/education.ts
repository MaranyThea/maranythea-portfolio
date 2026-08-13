export type EducationItem = {
  id: string;
  number: string;
  type: "University" | "Certification" | "Course";
  period: string;
  title: string;
  institution: string;
  description: string;
  details?: string[];
  technologies?: string[];
};

export const educationItems: EducationItem[] = [
  {
    id: "rupp",
    number: "01",
    type: "University",
    period: "2021 — 2025",
    title: "Bachelor of Computer Science and Engineering",
    institution: "Royal University of Phnom Penh",
    description:
      "Built a strong foundation in computer science, software development, databases, algorithms, and modern web technologies.",
    details: [
      "Software Engineering",
      "Web Development",
      "Database Systems",
      "Data Structures & Algorithms",
      "Computer Networks",
    ],
    technologies: [
      "Java",
      "Python", ]
  },

  {
    id: "cloud4cambodia",
    number: "02",
    type: "Certification",
    period: "2025",
    title: "Cloud Computing",
    institution: "Cloud4Cambodia",
    description:
      "Developed foundational knowledge of cloud computing and AWS services through practical learning and hands-on exercises.",
    details: [
      "AWS Cloud Fundamentals",
      "Cloud Computing",
      "AWS Services",
    ],
    technologies: ["AWS", "Cloud Computing", "Cloud Architecture", "Cloud Security"],
  },

  {
    id: "big-data",
    number: "03",
    type: "Course",
    period: "2025",
    title: "Big Data",
    institution: "Samsung-sponsored Program",
    description:
      "Explored the fundamentals of big data, data processing, and technologies used to work with large-scale datasets.",
    details: [
      "Big Data Fundamentals",
      "Data Processing",
      "Data Technologies",
    ],
    technologies: ["Hadoop", "Spark", "Data Analytics", "Data Visualization"],
  },
];