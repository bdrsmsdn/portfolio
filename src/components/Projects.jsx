import { ArrowUpRight, Github, Star } from 'lucide-react'

function ProjectRow({ project }) {
  const category = project.tags[0]

  return (
    <div className="group border-b border-line">
      <div className="flex items-center justify-between gap-4 py-6 px-3 -mx-3 rounded-lg transition-colors duration-200 group-hover:bg-ink-2">
        <div className="min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-display text-xl sm:text-2xl text-paper leading-tight transition-colors duration-200 group-hover:text-accent">
              {project.title}
            </h3>
            {project.featured && (
              <span className="inline-flex items-center gap-1 font-mono text-[0.65rem] uppercase tracking-wide text-accent">
                <Star size={11} />
                Featured
              </span>
            )}
          </div>
          <p className="font-body text-sm text-paper-3 mt-2 max-w-2xl">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:inline font-mono text-xs uppercase tracking-wide text-paper-3">
            {category}
          </span>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="icon-badge"
              aria-label={`${project.title} — GitHub repository`}
            >
              <Github size={16} />
            </a>
          )}
          <span
            className="icon-badge opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
            aria-hidden="true"
          >
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Projects({ items }) {
  return (
    <section id="projects" className="py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-paper-3 mb-8">
          My latest works.
        </p>

        <div>
          {items.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>

        <p className="font-body text-sm text-paper-3 mt-8">
          Want to see more? Reach me directly at{' '}
          <a href="mailto:badrasam7@gmail.com" className="text-paper underline underline-offset-4 hover:text-accent transition-colors">
            badrasam7@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
