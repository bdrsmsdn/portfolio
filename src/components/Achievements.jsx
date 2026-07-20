import { Award } from 'lucide-react'

export default function Achievements({ items }) {
  return (
    <section id="achievements" className="py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-paper-3 mb-8">
          Achievements
        </p>

        <div className="grid sm:grid-cols-2 gap-x-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 py-4 border-b border-line">
              <Award size={16} className="text-paper-3 mt-0.5 shrink-0" />
              <p className="font-body text-sm text-paper-2 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
