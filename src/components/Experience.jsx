import { useEffect, useRef, useState } from 'react'
import SectionTitle from './SectionTitle'
import { FiBriefcase } from 'react-icons/fi'

function ExperienceItem({ item, index }) {
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
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative pl-8 transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: visible ? `${index * 100}ms` : '0ms' }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[#64FFDA] ring-4 ring-[#64FFDA]/20" />

      <div className="glass-card rounded-lg p-5 neon-border">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-[#CCD6F6] font-semibold">{item.title}</h3>
            <p className="text-[#64FFDA] text-sm font-mono">{item.place}</p>
          </div>
          <span className="font-mono text-xs text-[#8892B0] bg-[#1E2D4A]/60 px-3 py-1 rounded-full whitespace-nowrap">
            {item.year}
          </span>
        </div>
        <p className="text-[#8892B0] text-sm leading-relaxed">{item.desc}</p>
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {item.tags.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience({ items }) {
  return (
    <section id="experience" className="mb-28">
      <SectionTitle number="04">Experience</SectionTitle>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[5px] top-3 bottom-3 w-px bg-gradient-to-b from-[#64FFDA]/40 via-[#1E2D4A] to-transparent" />

        <div className="space-y-5">
          {items.map((item, i) => (
            <ExperienceItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
