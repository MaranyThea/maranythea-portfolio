type SkillCardProps = {
  title: string;
  skills: string[];
};

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="border rounded-xl p-5 hover:shadow-md transition">
      <h3 className="font-semibold text-lg mb-3">{title}</h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-sm px-3 py-1 bg-gray-100 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}