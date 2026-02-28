import { useEffect, useRef, useState } from 'react'
import SectionTitle from './SectionTitle'

const onTiltMove = (e) => {
  const el = e.currentTarget
  const { left, top, width, height } = el.getBoundingClientRect()
  const x = (e.clientX - left) / width - 0.5
  const y = (e.clientY - top) / height - 0.5
  el.style.transform = `perspective(500px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale3d(1.06,1.06,1.06)`
  el.style.transition = 'transform 0.1s ease, background 0.3s, color 0.3s, box-shadow 0.3s'
}

const onTiltLeave = (e) => {
  e.currentTarget.style.transform = ''
  e.currentTarget.style.transition = 'transform 0.5s ease, background 0.3s, color 0.3s, box-shadow 0.3s'
}

export default function Skills({ items }) {
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="mb-20">
      <SectionTitle>Skills</SectionTitle>
      <ul ref={ref} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map((skill, i) => (
          <li
            key={skill}
            onMouseMove={onTiltMove}
            onMouseLeave={onTiltLeave}
            className={`bg-white border border-[#8B5E3C]/30 rounded-md px-4 py-2 shadow-sm
              hover:bg-[#8B5E3C] hover:text-white hover:shadow-lg cursor-default
              transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
              }`}
            style={{ transitionDelay: visible ? `${i * 50}ms` : '0ms' }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
