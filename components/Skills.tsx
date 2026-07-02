import SkillCard from "@/components/SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="w-full px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        My Skills
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <SkillCard
          title="Frontend"
          skills={["React", "Next.js", "Tailwind CSS"]}
        />

        <SkillCard
          title="Backend"
          skills={["Node.js", "Express"]}
        />

        <SkillCard
          title="Languages"
          skills={["JavaScript", "TypeScript", "Python"]}
        />

        <SkillCard
          title="Tools"
          skills={["Git", "GitHub", "VS Code"]}
        />
      </div>
    </section>
  );
}