import { Github, Linkedin, ArrowUpRight, Heart } from 'lucide-react'

export default function Footer({ contact }) {
  const links = [
    { label: 'GitHub', Icon: Github, href: contact.github, handle: contact.github.replace('https://', '') },
    { label: 'LinkedIn', Icon: Linkedin, href: contact.linkedin, handle: contact.linkedin.replace('https://', '') },
  ]

  return (
    <footer className="bg-cream text-dusk pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 gap-8 pb-8">
          {links.map(({ label, Icon, href, handle }) => (
            <div key={label} className="border-t border-hair pt-4">
              <p className="font-mono text-xs uppercase tracking-wide text-dusk-2 mb-2">{label}</p>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 font-body text-dusk hover:text-dusk-2 transition-colors"
              >
                <span className="truncate">{handle}</span>
                <span className="flex items-center gap-2 shrink-0">
                  <Icon size={16} />
                  <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </span>
              </a>
            </div>
          ))}
        </div>

        <p className="text-center font-mono text-xs text-dusk-2 flex items-center justify-center gap-1.5">
          Made with <Heart size={12} className="text-dusk-2" fill="currentColor" /> by Badra S.
        </p>
      </div>
    </footer>
  )
}
