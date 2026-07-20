import { Mail } from 'lucide-react'

export default function Contact({ email, phone }) {
  return (
    <section id="contact" className="bg-cream text-dusk py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl sm:text-5xl font-medium text-dusk text-balance mb-6">
          Let&rsquo;s build something together.
        </h2>
        <p className="font-body text-dusk-2 leading-relaxed max-w-xl mx-auto mb-10">
          Currently open to new opportunities — whether it&rsquo;s full-time roles, freelance
          work, or just a good conversation about tech. My inbox is always open.
        </p>

        <a href={`mailto:${email}`} className="btn-pill-inverse">
          <Mail size={14} />
          Say Hello
        </a>

        <p className="font-mono text-xs text-dusk-2 mt-6">
          Or reach me directly at{' '}
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="underline underline-offset-4 hover:text-dusk transition-colors">
            {phone}
          </a>
        </p>
      </div>
    </section>
  )
}
