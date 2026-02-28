import { useEffect, useRef, useState } from 'react'
import SectionTitle from './SectionTitle'

const onTiltMove = (e) => {
  const el = e.currentTarget
  const { left, top, width, height } = el.getBoundingClientRect()
  const x = (e.clientX - left) / width - 0.5
  const y = (e.clientY - top) / height - 0.5
  el.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02,1.02,1.02)`
  el.style.transition = 'transform 0.1s ease'
}

const onTiltLeave = (e) => {
  e.currentTarget.style.transform = ''
  e.currentTarget.style.transition = 'transform 0.5s ease'
}

function ProjectItem({ project, index }) {
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
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
      }`}
      style={{ transitionDelay: visible ? `${index * 80}ms` : '0ms' }}
    >
      <div
        onMouseMove={onTiltMove}
        onMouseLeave={onTiltLeave}
        className="border-l-4 border-[#8B5E3C] pl-4 cursor-default"
        style={{ transformOrigin: 'left center' }}
      >
        <h3 className="font-semibold">{project.title}</h3>
        <p className="text-sm opacity-80">{project.desc}</p>
      </div>
    </div>
  )
}

export default function Projects({ items }) {
  return (
    <section className="mb-20">
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-6">
        {items.map((project, i) => (
          <ProjectItem key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
