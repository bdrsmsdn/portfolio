import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

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
          className="font-mono text-[#CCD6F6] font-bold text-lg hover:text-[#64FFDA] transition-colors"
        >
          <span className="text-[#64FFDA]">&lt;</span>
          badra
          <span className="text-[#64FFDA]">/&gt;</span>
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
