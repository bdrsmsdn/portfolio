import SectionTitle from './SectionTitle'
import { useInView } from '../hooks/useInView'
import { FiBook } from 'react-icons/fi'

export default function Education({ items }) {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className={`mb-20 transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <SectionTitle number="05">Education</SectionTitle>
      {items.map((item, i) => (
        <div key={i} className="glass-card neon-border rounded-lg p-5">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 p-2 rounded-md bg-[#64FFDA]/10">
                <FiBook size={16} className="text-[#64FFDA]" />
              </div>
              <div>
                <h3 className="text-[#CCD6F6] font-semibold">{item.title}</h3>
                <p className="text-[#64FFDA] text-sm font-mono">{item.place}</p>
              </div>
            </div>
            <span className="font-mono text-xs text-[#8892B0] bg-[#1E2D4A]/60 px-3 py-1 rounded-full whitespace-nowrap">
              {item.year}
            </span>
          </div>
          <p className="text-[#8892B0] text-sm leading-relaxed ml-11">{item.desc}</p>
        </div>
      ))}
    </section>
  )
}
