import SectionTitle from './SectionTitle'
import { useInView } from '../hooks/useInView'

export default function About({ text, tagline }) {
  const [ref, inView] = useInView()

  return (
    <section
      id="about"
      ref={ref}
      className={`mb-28 transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <SectionTitle number="01">About Me</SectionTitle>

      <div className="grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-3 space-y-4">
          <p className="text-[#8892B0] leading-relaxed text-[0.95rem]">{text}</p>
          {tagline && (
            <p className="font-mono text-[#64FFDA] text-sm mt-4 opacity-80">
              // {tagline}
            </p>
          )}

          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              { label: 'Location', value: 'Jakarta, Indonesia' },
              { label: 'Focus', value: 'Fullstack Engineering' },
              { label: 'Company', value: 'BNI' },
              { label: 'Available', value: 'Open to opportunities' },
            ].map(({ label, value }) => (
              <div key={label} className="space-y-1">
                <p className="font-mono text-[#64FFDA] text-xs tracking-wide">{label}</p>
                <p className="text-[#CCD6F6] text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="glass-card rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E2D4A] bg-[#0D1527]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 font-mono text-xs text-[#8892B0]">about.json</span>
            </div>
            <pre className="p-5 font-mono text-xs text-[#8892B0] leading-6 overflow-x-auto">
{`{
  `}<span style={{color:'#4FC3F7'}}>"role"</span>{`: "Fullstack Engineer",
  `}<span style={{color:'#4FC3F7'}}>"mobile"</span>{`: ["iOS", "Android", "RN"],
  `}<span style={{color:'#4FC3F7'}}>"backend"</span>{`: "ASP.NET + SQL Server + IIS",
  `}<span style={{color:'#4FC3F7'}}>"security"</span>{`: ["SAST", "DAST", "Pentest"],
  `}<span style={{color:'#4FC3F7'}}>"years_exp"</span>{`: `}<span style={{color:'#BB86FC'}}>3</span>{`,
  `}<span style={{color:'#4FC3F7'}}>"loves"</span>{`: "Vibe coding + Roblox",
  `}<span style={{color:'#4FC3F7'}}>"coffee"</span>{`: `}<span style={{color:'#FF7B72'}}>true</span>{`
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
