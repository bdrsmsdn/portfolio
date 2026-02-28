import SectionTitle from './SectionTitle'
import { useInView } from '../hooks/useInView'

export default function Education({ items }) {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className={`mb-20 transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <SectionTitle>Education</SectionTitle>
      {items.map((item, i) => (
        <div key={i} className="mb-4">
          <p className="text-sm text-[#8B5E3C]">{item.year}</p>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="italic text-sm">{item.place}</p>
          <p className="text-sm opacity-80">{item.desc}</p>
        </div>
      ))}
    </section>
  )
}
