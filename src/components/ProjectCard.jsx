export default function ProjectCard({
  title,
  description,
  tags,
  liveUrl,
  codeUrl,
}) {
  return (
    <div className="bg-white  text-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all project-card">
      <h3 className="text-xl font-semibold text-white mb-2 project-title">
        {title}
      </h3>
      <p className="text-white mb-4 project-description">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4 project-tags">
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
      <div className="flex gap-4 project-links">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            className="text-white hover:underline"
          >
            Live
          </a>
        )}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            className="text-white hover:underline"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}
