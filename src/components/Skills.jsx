import { useEffect, useRef, useState } from 'react'
import SectionTitle from './SectionTitle'
import {
  SiReact, SiAndroid, SiApple, SiDotnet, SiNodedotjs,
  SiMysql, SiJavascript, SiPhp, SiGit, SiRoblox,
} from 'react-icons/si'
import { FiCode, FiLock, FiZap } from 'react-icons/fi'

const iconMap = {
  SiReact: SiReact,
  SiAndroid: SiAndroid,
  SiApple: SiApple,
  SiDotnet: SiDotnet,
  SiCsharp: SiDotnet,
  SiNodedotjs: SiNodedotjs,
  SiMicrosoftsqlserver: FiCode,
  SiMysql: SiMysql,
  SiJavascript: SiJavascript,
  SiPhp: SiPhp,
  SiGit: SiGit,
  SiRoblox: SiRoblox,
}

const categories = ['Mobile', 'Backend', 'Frontend', 'Tools']

function SkillCard({ skill, index, visible }) {
  const IconComponent = skill.icon ? (iconMap[skill.icon] || FiCode) : FiZap

  return (
    <div
      className={`neon-border rounded-lg p-4 flex items-center gap-3 cursor-default
        transition-all duration-500 ease-out bg-[#0D1527]/60
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: visible ? `${index * 45}ms` : '0ms' }}
    >
      <div
        className="shrink-0 p-2 rounded-md"
        style={{ background: `${skill.color}15` }}
      >
        <IconComponent
          size={18}
          style={{ color: skill.color || '#64FFDA' }}
        />
      </div>
      <span className="text-[#CCD6F6] text-sm font-medium leading-tight">
        {skill.name}
      </span>
    </div>
  )
}

export default function Skills({ items }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')

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

  const filtered =
    activeCategory === 'All'
      ? items
      : items.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="mb-28">
      <SectionTitle number="02">Skills</SectionTitle>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-mono text-xs px-4 py-2 rounded-full border transition-all ${
              activeCategory === cat
                ? 'border-[#64FFDA] text-[#64FFDA] bg-[#64FFDA]/10'
                : 'border-[#1E2D4A] text-[#8892B0] hover:border-[#64FFDA]/40 hover:text-[#CCD6F6]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        ref={ref}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
      >
        {filtered.map((skill, i) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={i}
            visible={visible}
          />
        ))}
      </div>
    </section>
  )
}
