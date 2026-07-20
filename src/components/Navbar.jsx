import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

function Logomark() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="30"
      height="30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="30" height="30" rx="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 6v4M16 22v4M6 16h4M22 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Work' },
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
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 text-paper hover:text-paper-2 transition-colors"
          aria-label="Home"
        >
          <Logomark />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-body text-sm text-paper-2 hover:text-paper transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-pill">
            Let&rsquo;s Connect
          </a>
          <a
            href="/Badra_Samsudin_Ramdan_Nugraha_CV.pdf"
            download
            className="icon-badge"
            aria-label="Download resume (PDF)"
          >
            <Download size={16} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-paper p-1 icon-badge !w-10 !h-10"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ink border-b border-line px-6 py-6">
          <div className="flex flex-col gap-5">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-paper-2 hover:text-paper transition-colors"
              >
                {label}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-1">
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-pill">
                Let&rsquo;s Connect
              </a>
              <a
                href="/Badra_Samsudin_Ramdan_Nugraha_CV.pdf"
                download
                className="icon-badge"
                aria-label="Download resume (PDF)"
              >
                <Download size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
