const metaItems = (profile) => [
  { label: 'Location', value: profile.location },
  { label: 'Focus', value: 'Fullstack Engineering' },
  { label: 'Company', value: 'BNI' },
  { label: 'Available', value: 'Open to opportunities' },
]

export default function About({ profile }) {
  return (
    <section id="about" className="py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-paper-3 mb-8">About</p>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Left: identity + bio */}
          <div className="md:col-span-3 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/profiles.jpg"
                alt={profile.name}
                width="56"
                height="56"
                className="w-14 h-14 rounded-full object-cover border border-line"
              />
              <div>
                <p className="font-display text-lg text-paper leading-tight">{profile.name}</p>
                <p className="font-body text-sm text-paper-3">{profile.role}</p>
              </div>
            </div>

            <p className="font-body text-paper-2 leading-relaxed max-w-2xl text-[1.05rem]">
              {profile.about}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {metaItems(profile).map(({ label, value }) => (
                <div key={label}>
                  <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-paper-3 mb-1">
                    {label}
                  </p>
                  <p className="font-body text-sm text-paper">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: skill summary, typographic block (no fake window chrome) */}
          <div className="md:col-span-2 border-t border-line pt-6 md:border-t-0 md:border-l md:pl-8 md:pt-0">
            <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-paper-3 mb-4">
              Snapshot
            </p>
            <dl className="space-y-3 font-mono text-sm leading-7">
              <div className="flex gap-3">
                <dt className="text-paper-3 shrink-0">role</dt>
                <dd className="text-paper-2">{profile.role}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-paper-3 shrink-0">mobile</dt>
                <dd className="text-paper-2">iOS, Android, React Native</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-paper-3 shrink-0">backend</dt>
                <dd className="text-paper-2">ASP.NET Core, SQL Server, IIS</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-paper-3 shrink-0">security</dt>
                <dd className="text-paper-2">SAST, DAST, Pentest</dd>
              </div>
              <div className="flex gap-3">
                <dt className="text-paper-3 shrink-0">years&nbsp;exp</dt>
                <dd className="text-paper-2">3+</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
