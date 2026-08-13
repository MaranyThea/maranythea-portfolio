type ProjectCardProps = {
  title: string;
  description: string;
  liveUrl?: string;
  codeUrl?: string;
};

export default function ProjectCard({
  title,
  description,
  liveUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <div className="border rounded-xl p-5 hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="text-gray-600 mt-2 text-sm">{description}</p>

      <div className="mt-4 flex gap-4 text-sm">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            className="text-cyan-500 hover:underline"
          >
            Live
          </a>
        )}

        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            className="text-gray-500 hover:underline"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}