import SectionTitle from './SectionTitle'
import { useInView } from '../hooks/useInView'
import { FiAward } from 'react-icons/fi'

export default function Achievements({ items }) {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className={`mb-28 transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <SectionTitle number="06">Achievements</SectionTitle>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="glass-card neon-border rounded-lg p-4 flex items-start gap-3"
          >
            <div className="mt-0.5 shrink-0 p-2 rounded-md bg-[#FEBC2E]/10">
              <FiAward size={15} className="text-[#FEBC2E]" />
            </div>
            <p className="text-[#8892B0] text-sm leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
