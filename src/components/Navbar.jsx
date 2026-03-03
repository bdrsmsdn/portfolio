import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

function PlanetLogo() {
  return (
    <svg
      viewBox="0 0 56 56"
      width="38"
      height="38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="logo"
    >
      {/* Large sparkle — top left */}
      <path
        d="M10 10 L11.4 14.6 L16 16 L11.4 17.4 L10 22 L8.6 17.4 L4 16 L8.6 14.6 Z"
        fill="#64FFDA"
      />
      {/* Small sparkle — top right */}
      <path
        d="M43 6 L43.9 8.6 L46.5 9.5 L43.9 10.4 L43 13 L42.1 10.4 L39.5 9.5 L42.1 8.6 Z"
        fill="#64FFDA"
        opacity="0.75"
      />
      {/* Back half of orbit ring (behind planet) */}
      <ellipse
        cx="30"
        cy="32"
        rx="19"
        ry="7"
        transform="rotate(-30 30 32)"
        stroke="#64FFDA"
        strokeWidth="1.5"
        strokeDasharray="22 36"
        strokeDashoffset="0"
        fill="none"
        opacity="0.4"
      />
      {/* Planet body */}
      <circle
        cx="30"
        cy="32"
        r="11"
        fill="#050B18"
        stroke="#64FFDA"
        strokeWidth="1.5"
      />
      {/* Front half of orbit ring (in front of planet) */}
      <ellipse
        cx="30"
        cy="32"
        rx="19"
        ry="7"
        transform="rotate(-30 30 32)"
        stroke="#64FFDA"
        strokeWidth="1.5"
        strokeDasharray="36 22"
        strokeDashoffset="22"
        fill="none"
      />
    </svg>
  )
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050B18]/90 backdrop-blur-md border-b border-[#1E2D4A]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group hover:opacity-80 transition-opacity"
          aria-label="Home"
        >
          <PlanetLogo />
          <span className="font-mono text-[#8892B0] text-sm group-hover:text-[#64FFDA] transition-colors hidden sm:inline">
            univertse
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              className="text-[#8892B0] hover:text-[#64FFDA] transition-colors font-mono text-sm group"
            >
              <span className="text-[#64FFDA] text-xs mr-1 opacity-70">
                {String(i + 1).padStart(2, '0')}.
              </span>
              {label}
            </a>
          ))}
          <a
            href="/Badra_Samsudin_Ramdan_Nugraha_CV.pdf"
            download
            className="px-4 py-2 text-sm font-mono border border-[#64FFDA] text-[#64FFDA] rounded hover:bg-[#64FFDA]/10 transition-all ml-2"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#64FFDA] p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1527]/95 backdrop-blur-md border-b border-[#1E2D4A] px-6 py-6">
          <div className="flex flex-col gap-5">
            {navLinks.map(({ href, label }, i) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-[#8892B0] hover:text-[#64FFDA] transition-colors font-mono"
              >
                <span className="text-[#64FFDA] text-xs mr-2">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                {label}
              </a>
            ))}
            <a
              href="/Badra_Samsudin_Ramdan_Nugraha_CV.pdf"
              download
              className="mt-1 px-4 py-2 text-sm font-mono border border-[#64FFDA] text-[#64FFDA] rounded hover:bg-[#64FFDA]/10 transition-all text-center"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
