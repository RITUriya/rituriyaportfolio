export default function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  codeUrl,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-800 px-2 py-1 text-sm rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Live
          </a>
        )}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}
