import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          My Experience
        </h2>
        <p className="text-gray-600 mt-3">
          Work, internships, and academic background
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <ExperienceCard
          title="Software Developer"
          company="Private Software Development Company"
          period="2024 - Present"
          description="Developing web applications, handling APIs, and working with Next.js and TypeScript."
        />

        <ExperienceCard
          title="Cloud Computing Trainee"
          company="Cloud4Cambodia Program"
          period="AWS Certification Track"
          description="Learned AWS fundamentals including EC2, S3, IAM, and cloud deployment concepts."
        />

        <ExperienceCard
          title="Computer Science Student"
          company="Royal University of Phnom Penh (RUPP)"
          period="2021 - 2025"
          description="Studying algorithms, data structures, software engineering, and system design."
        />

      </div>
    </section>
  );
}