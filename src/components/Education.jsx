import { GraduationCap } from 'lucide-react'

export default function Education({ items }) {
  return (
    <section id="education" className="py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-paper-3 mb-8">Education</p>

        {items.map((item, i) => (
          <div key={i} className="flex gap-4 py-5 border-b border-line">
            <GraduationCap size={18} className="text-paper-3 mt-1 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-lg text-paper">{item.title}</h3>
                <span className="font-mono text-xs text-paper-3 whitespace-nowrap">{item.year}</span>
              </div>
              <p className="font-body text-sm text-paper-3 mb-2">{item.place}</p>
              <p className="font-body text-sm text-paper-2 leading-relaxed max-w-2xl">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
