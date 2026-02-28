import { useEffect, useRef, useState } from 'react'
import SectionTitle from './SectionTitle'

function ExperienceItem({ item, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const isLeft = index % 2 === 0

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
      className={`relative flex pl-8 md:pl-0 ${
        isLeft
          ? 'md:justify-start md:pr-8 md:text-right'
          : 'md:justify-end md:pl-8 md:text-left'
      }`}
    >
      {/* Mobile: dot on left */}
      <div className="absolute left-0 top-2 w-3 h-3 bg-[#8B5E3C] rounded-full md:hidden" />
      {/* Desktop: dot in center */}
      <div className="absolute left-1/2 top-2 w-3 h-3 bg-[#8B5E3C] rounded-full -translate-x-1/2 hidden md:block" />

      <div
        className={`w-full md:w-[45%] transition-all duration-700 ease-out ${
          visible
            ? 'opacity-100 translate-y-0 translate-x-0'
            : isLeft
            ? 'opacity-0 translate-y-4 md:translate-y-0 md:-translate-x-10'
            : 'opacity-0 translate-y-4 md:translate-y-0 md:translate-x-10'
        }`}
      >
        <p className="text-sm text-[#8B5E3C]">{item.year}</p>
        <h3 className="font-semibold">{item.title}</h3>
        <p className="italic text-sm">{item.place}</p>
        <p className="text-sm opacity-80 mt-1">{item.desc}</p>
      </div>
    </div>
  )
}

export default function Experience({ items }) {
  return (
    <section className="mb-20">
      <SectionTitle>Career Experience</SectionTitle>
      <div className="relative">
        {/* Mobile: line on left | Desktop: line in center */}
        <div className="absolute left-[5px] md:left-1/2 top-0 h-full w-[2px] bg-[#8B5E3C]/30 md:-translate-x-1/2" />
        <div className="space-y-16">
          {items.map((item, i) => (
            <ExperienceItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
