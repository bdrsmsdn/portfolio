import { useEffect, useState } from 'react'
import { FiArrowDown, FiGithub } from 'react-icons/fi'
import { SiLinkedin } from 'react-icons/si'

const roles = [
  'Mobile Developer',
  'Backend Engineer',
  'iOS & Android Dev',
  'React Native Dev',
]

export default function Header({ name, location }) {
  const [displayRole, setDisplayRole] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typedName, setTypedName] = useState('')

  // Name typing effect
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTypedName(name.slice(0, i + 1))
      i++
      if (i === name.length) clearInterval(interval)
    }, 55)
    return () => clearInterval(interval)
  }, [name])

  // Role cycling effect
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && displayRole === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayRole === '') {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayRole(
            isDeleting
              ? current.slice(0, displayRole.length - 1)
              : current.slice(0, displayRole.length + 1),
          )
        },
        isDeleting ? 55 : 95,
      )
    }
    return () => clearTimeout(timeout)
  }, [displayRole, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Greeting */}
        <p
          className="font-mono text-[#64FFDA] text-sm tracking-widest mb-5 opacity-0"
          style={{ animation: 'fadeUp 0.5s ease-out 0.2s forwards' }}
        >
          Hi, my name is
        </p>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#CCD6F6] mb-3 leading-none opacity-0"
          style={{ animation: 'fadeUp 0.5s ease-out 0.4s forwards' }}
        >
          {typedName}
          <span
            className="text-[#64FFDA]"
            style={{ animation: 'typeCursor 1s step-end infinite' }}
          >
            _
          </span>
        </h1>

        {/* Role */}
        <h2
          className="text-3xl md:text-5xl font-bold text-[#8892B0] mb-8 opacity-0"
          style={{ animation: 'fadeUp 0.5s ease-out 0.6s forwards' }}
        >
          <span className="text-[#64FFDA] font-mono mr-2">&gt;</span>
          {displayRole}
          <span
            className="inline-block w-[3px] h-7 md:h-10 bg-[#64FFDA] ml-1 align-middle rounded-full"
            style={{ animation: 'typeCursor 1s step-end infinite' }}
          />
        </h2>

        {/* Description */}
        <p
          className="text-[#8892B0] text-base md:text-lg max-w-xl mb-10 leading-relaxed opacity-0"
          style={{ animation: 'fadeUp 0.5s ease-out 0.8s forwards' }}
        >
          Software Engineer building reliable mobile apps and backend systems.
          Currently at{' '}
          <span className="text-[#CCD6F6]">BNI</span>, based in{' '}
          <span className="text-[#CCD6F6]">{location}</span>.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 mb-14 opacity-0"
          style={{ animation: 'fadeUp 0.5s ease-out 1s forwards' }}
        >
          <a
            href="#projects"
            className="px-6 py-3 border border-[#64FFDA] text-[#64FFDA] font-mono text-sm rounded hover:bg-[#64FFDA]/10 transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-[#64FFDA] text-[#050B18] font-mono font-semibold text-sm rounded hover:bg-[#64FFDA]/85 transition-all"
          >
            Get In Touch
          </a>
          <a
            href="https://github.com/bdrsmsdn"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-3 border border-[#1E2D4A] text-[#8892B0] rounded hover:border-[#64FFDA] hover:text-[#64FFDA] transition-all"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/bdrsmsdn"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-3 border border-[#1E2D4A] text-[#8892B0] rounded hover:border-[#64FFDA] hover:text-[#64FFDA] transition-all"
            aria-label="LinkedIn"
          >
            <SiLinkedin size={18} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="flex flex-col items-start gap-1 text-[#8892B0] opacity-0"
          style={{ animation: 'fadeUp 0.5s ease-out 1.2s forwards' }}
        >
          <span className="font-mono text-xs tracking-widest opacity-60">SCROLL</span>
          <FiArrowDown size={16} className="text-[#64FFDA] animate-bounce" />
        </div>
      </div>
    </section>
  )
}
