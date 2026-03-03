import SectionTitle from './SectionTitle'
import { useInView } from '../hooks/useInView'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

const socials = [
  {
    label: 'GitHub',
    Icon: FiGithub,
    href: 'https://github.com/bdrsmsdn',
    value: 'bdrsmsdn',
    color: '#CCD6F6',
  },
  {
    label: 'LinkedIn',
    Icon: FiLinkedin,
    href: 'https://www.linkedin.com/in/bdrsmsdn',
    value: 'bdrsmsdn',
    color: '#4FC3F7',
  },
  {
    label: 'Email',
    Icon: FiMail,
    href: 'mailto:badrasam7@gmail.com',
    value: 'badrasam7@gmail.com',
    color: '#64FFDA',
  },
  {
    label: 'Phone',
    Icon: FiPhone,
    href: 'tel:+6281281817375',
    value: '+62 812-8181-7375',
    color: '#BB86FC',
  },
]

export default function Contact({ email }) {
  const [ref, inView] = useInView()

  return (
    <section
      id="contact"
      ref={ref}
      className={`mb-20 transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <SectionTitle number="07">Get In Touch</SectionTitle>

      <div className="max-w-2xl">
        <p className="text-[#8892B0] leading-relaxed mb-8">
          Currently open to new opportunities — whether it's full-time roles,
          freelance work, or just a good conversation about tech. My inbox is always open.
        </p>

        {/* Primary CTA */}
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-3 px-7 py-4 border border-[#64FFDA] text-[#64FFDA] font-mono text-sm rounded-lg hover:bg-[#64FFDA]/10 transition-all mb-10 group"
        >
          <FiMail size={18} />
          Say Hello
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
        </a>

        {/* Social links */}
        <div className="grid sm:grid-cols-2 gap-4">
          {socials.map(({ label, Icon, href, value, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="glass-card neon-border rounded-lg p-4 flex items-center gap-4 group transition-all"
            >
              <div
                className="p-2.5 rounded-lg shrink-0 transition-all"
                style={{ background: `${color}15` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <div>
                <p className="text-xs font-mono text-[#8892B0]">{label}</p>
                <p className="text-[#CCD6F6] text-sm group-hover:text-[#64FFDA] transition-colors">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
