import { Mail, Github, Linkedin, Phone } from 'lucide-react'
import SectionTitle from './SectionTitle'

export default function Contact({ phone, email, github, linkedin }) {
  return (
    <section className="mb-24">
      <SectionTitle>Contact</SectionTitle>
      <div className="flex flex-col gap-4 text-[#8B5E3C]">
        <div className="flex gap-6">
          <a
            href={`tel:${phone}`}
            className="hover:opacity-70 transition-opacity"
            aria-label="Phone"
          >
            <Phone size={22} />
          </a>
          <a
            href={`mailto:${email}`}
            className="hover:opacity-70 transition-opacity"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}
