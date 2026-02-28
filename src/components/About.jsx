import SectionTitle from './SectionTitle'
import { useInView } from '../hooks/useInView'

export default function About({ text }) {
  const [ref, inView] = useInView()

  return (
    <section
      ref={ref}
      className={`mb-20 transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <SectionTitle>About</SectionTitle>
      <p className="leading-relaxed whitespace-pre-line">{text}</p>
    </section>
  )
}
