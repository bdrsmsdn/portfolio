import { useEffect, useRef, useState } from 'react'
import SectionTitle from './SectionTitle'
import { FiExternalLink, FiGithub, FiStar } from 'react-icons/fi'

function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`glass-card rounded-xl p-6 flex flex-col gap-4 cursor-default
        transition-all duration-600 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: visible ? `${index * 100}ms` : '0ms' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#64FFDA]/10 flex items-center justify-center">
            <span className="text-[#64FFDA] font-mono text-xs font-bold">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          {project.featured && (
            <span className="flex items-center gap-1 text-[#FEBC2E] text-xs font-mono">
              <FiStar size={11} />
              Featured
            </span>
          )}
        </div>
        <div className="flex gap-3 text-[#8892B0]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#64FFDA] transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#64FFDA] transition-colors"
              aria-label="Live demo"
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3
        className={`text-[#CCD6F6] font-semibold text-lg leading-tight transition-colors duration-200 ${
          hovered ? 'text-[#64FFDA]' : ''
        }`}
      >
        {project.title}
      </h3>

      {/* Desc */}
      <p className="text-[#8892B0] text-sm leading-relaxed flex-1">
        {project.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects({ items }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const featured = items.filter((p) => p.featured)
  const others = items.filter((p) => !p.featured)

  return (
    <section id="projects" className="mb-28">
      <SectionTitle number="03">Projects</SectionTitle>

      <div ref={ref}>
        {/* Featured projects - larger cards */}
        {featured.length > 0 && (
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {featured.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                visible={visible}
              />
            ))}
          </div>
        )}

        {/* Other projects */}
        {others.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={featured.length + i}
                visible={visible}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
