import ProjectCard from "@/components/cards/ProjectCard";

export default function Project() {
  return (
    <section id="projects" className="w-full px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        My Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Portfolio Website"
          description="A personal portfolio built with Next.js and Tailwind CSS."
          liveUrl="#"
          codeUrl="#"
        />

        <ProjectCard
          title="Task Manager App"
          description="A simple task management app with CRUD features."
          liveUrl="#"
          codeUrl="#"
        />

        <ProjectCard
          title="AI Chat UI"
          description="A chat interface inspired by modern AI tools."
          liveUrl="#"
          codeUrl="#"
        />
      </div>
    </section>
  );
}