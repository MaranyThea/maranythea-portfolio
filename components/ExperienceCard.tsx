type ExperienceCardProps = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export default function ExperienceCard({
  title,
  company,
  period,
  description,
}: ExperienceCardProps) {
  return (
    <div className="border rounded-xl p-5 hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-blue-500">
        {title}
      </h3>

      <p className="text-gray-500 text-sm mt-1">
        {company}
      </p>

      <p className="text-gray-400 text-sm">
        {period}
      </p>

      <p className="mt-4 text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
}