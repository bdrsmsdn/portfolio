import { useState } from 'react'
import {
  SiReact, SiAndroid, SiApple, SiDotnet, SiNodedotjs,
  SiMysql, SiJavascript, SiPhp, SiGit, SiRoblox, SiSharp, SiFirebase,
} from 'react-icons/si'
import { Code2, Zap } from 'lucide-react'

const iconMap = {
  SiReact, SiAndroid, SiApple, SiDotnet, SiNodedotjs, SiMysql,
  SiJavascript, SiPhp, SiGit, SiRoblox, SiFirebase,
  SiCsharp: SiSharp, SiSharp,
  SiMicrosoftsqlserver: Code2,
}

const categories = ['Mobile', 'Backend', 'Frontend', 'Tools']

function SkillRow({ skill }) {
  const Icon = skill.icon ? iconMap[skill.icon] || Code2 : Zap

  return (
    <div className="flex items-center gap-3 py-3 border-b border-line">
      <Icon size={16} className="text-paper-3 shrink-0" />
      <span className="font-body text-sm text-paper-2">{skill.name}</span>
    </div>
  )
}

export default function Skills({ items }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All' ? items : items.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-paper-3 mb-8">Skills</p>

        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter skills by category">
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`font-mono text-xs uppercase tracking-wide px-4 py-2 rounded-full border transition-colors duration-200 ${
                activeCategory === cat
                  ? 'border-paper bg-paper text-ink'
                  : 'border-line text-paper-2 hover:border-paper-2 hover:text-paper'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8">
          {filtered.map((skill) => (
            <SkillRow key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
