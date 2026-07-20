import { ArrowUpRight, Github, Linkedin } from 'lucide-react'

export default function Header({ profile }) {
  const current = profile.experience[0]
  const blurb = `Backend systems, mobile apps, and web platforms. Currently ${current.title} at ${current.place}, ${profile.location}.`

  return (
    <section id="hero" className="min-h-[92dvh] flex flex-col justify-center pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-paper-3 mb-6">
          {profile.name}
        </p>

        <h1 className="font-display text-hero font-medium text-paper text-balance [overflow-wrap:anywhere] min-w-0">
          {profile.tagline}
        </h1>

        <div className="mt-10 grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-pill">
              Let&rsquo;s Connect
              <ArrowUpRight size={14} />
            </a>
            <a href="#projects" className="icon-badge" aria-label="View projects">
              <ArrowUpRight size={18} />
            </a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noreferrer"
              className="icon-badge"
              aria-label="GitHub profile"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="icon-badge"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-3">
            <p className="font-mono text-xs uppercase tracking-wide leading-7 text-paper-3 max-w-sm">
              {blurb}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
