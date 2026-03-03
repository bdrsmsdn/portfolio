import SectionTitle from './SectionTitle'
import { useInView } from '../hooks/useInView'

/* Octagon polygon points for a 200x260 frame */
const OCT = '42,0 158,0 200,36 200,224 158,260 42,260 0,224 0,36'

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
        {/* ── Left: bio ── */}
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
              { label: 'Focus',    value: 'Fullstack Engineering' },
              { label: 'Company',  value: 'BNI' },
              { label: 'Available',value: 'Open to opportunities' },
            ].map(({ label, value }) => (
              <div key={label} className="space-y-1">
                <p className="font-mono text-[#64FFDA] text-xs tracking-wide">{label}</p>
                <p className="text-[#CCD6F6] text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: photo + code ── */}
        <div className="md:col-span-2 flex flex-col gap-5 items-center md:items-start">

          {/* ── Photo frame ── */}
          <div
            style={{
              filter:
                'drop-shadow(0 0 14px rgba(100,255,218,0.45)) drop-shadow(0 0 36px rgba(100,255,218,0.18))',
            }}
          >
            <svg
              width="200"
              height="260"
              viewBox="0 0 200 260"
              overflow="visible"
              style={{ display: 'block' }}
            >
              <defs>
                {/* Clip to octagon */}
                <clipPath id="photoClip">
                  <polygon points={OCT} />
                </clipPath>

                {/* Cartoon / cel-shade filter */}
                <filter id="cartoon" x="-5%" y="-5%" width="110%" height="110%">
                  {/* 1. Boost saturation */}
                  <feColorMatrix type="saturate" values="2.2" />
                  {/* 2. Posterize to 5 levels → flat cartoon colour blocks */}
                  <feComponentTransfer>
                    <feFuncR type="discrete" tableValues="0 0.25 0.5 0.75 1" />
                    <feFuncG type="discrete" tableValues="0 0.25 0.5 0.75 1" />
                    <feFuncB type="discrete" tableValues="0 0.25 0.5 0.75 1" />
                  </feComponentTransfer>
                  {/* 3. Punch contrast */}
                  <feComponentTransfer>
                    <feFuncR type="linear" slope="1.2" intercept="-0.06" />
                    <feFuncG type="linear" slope="1.2" intercept="-0.06" />
                    <feFuncB type="linear" slope="1.2" intercept="-0.06" />
                  </feComponentTransfer>
                </filter>
              </defs>

              {/* Dark fill behind image */}
              <polygon points={OCT} fill="#080e1d" />

              {/* Photo with cartoon filter */}
              <image
                href="/profile.jpg"
                x="0" y="0"
                width="200" height="260"
                preserveAspectRatio="xMidYMin slice"
                clipPath="url(#photoClip)"
                filter="url(#cartoon)"
              />

              {/* Teal overlay gradient (bottom fade for depth) */}
              <defs>
                <linearGradient id="photoFade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="60%" stopColor="#050B18" stopOpacity="0" />
                  <stop offset="100%" stopColor="#050B18" stopOpacity="0.55" />
                </linearGradient>
              </defs>
              <polygon points={OCT} fill="url(#photoFade)" clipPath="url(#photoClip)" />

              {/* Main octagon border */}
              <polygon
                points={OCT}
                fill="none"
                stroke="rgba(100,255,218,0.45)"
                strokeWidth="1.5"
              />

              {/* ── Corner accent lines (top-left) ── */}
              <polyline
                points="0,52 0,36 12,0"
                fill="none" stroke="#64FFDA" strokeWidth="2.5" strokeLinecap="round"
              />
              {/* top-right */}
              <polyline
                points="188,0 200,36 200,52"
                fill="none" stroke="#64FFDA" strokeWidth="2.5" strokeLinecap="round"
              />
              {/* bottom-left */}
              <polyline
                points="0,208 0,224 12,260"
                fill="none" stroke="#64FFDA" strokeWidth="2.5" strokeLinecap="round"
              />
              {/* bottom-right */}
              <polyline
                points="188,260 200,224 200,208"
                fill="none" stroke="#64FFDA" strokeWidth="2.5" strokeLinecap="round"
              />

              {/* ── Floating pixel dots (decorative) ── */}
              {[
                [-14,  80], [-22, 130], [-10, 180],
                [ 214, 60], [ 220, 120], [ 210, 175],
                [  20, -16], [ 90, -20], [160,  -14],
                [  30, 276], [100,  278], [168, 272],
              ].map(([x, y], i) => (
                <rect
                  key={i}
                  x={x} y={y}
                  width={i % 3 === 0 ? 5 : 3}
                  height={i % 3 === 0 ? 5 : 3}
                  fill="#64FFDA"
                  opacity={0.35 + (i % 3) * 0.12}
                  rx="0.5"
                />
              ))}
            </svg>
          </div>

          {/* ── about.json code block ── */}
          <div className="glass-card rounded-lg overflow-hidden w-full">
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
