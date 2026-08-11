type SkillCardProps = {
  title: string;
  skills: string[];
};

export default function SkillCard({
  title,
  skills,
}: SkillCardProps) {
  return (
    <div
      className="border border-gray-700 rounded-2xl p-6
                 hover:border-blue-500 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-white mb-5">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full
                       bg-gray-900 border border-gray-700
                       text-gray-300 text-sm
                       hover:bg-blue-500 hover:border-blue-500
                       hover:text-white
                       transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}