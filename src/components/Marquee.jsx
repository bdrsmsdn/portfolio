// Decorative skills ticker — echoes the reference's horizontal tag strip.
// aria-hidden: the same skill names are real, accessible content in the Skills section below.
function Row({ items, reverse }) {
  return (
    <div className="marquee-pause overflow-hidden">
      <div
        className={`marquee-track gap-8 py-2 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {[...items, ...items].map((label, i) => (
          <span
            key={i}
            className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-paper-3 shrink-0"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee({ items }) {
  const names = items.map((s) => s.name)
  const half = Math.ceil(names.length / 2)
  const rowA = names.slice(0, half)
  const rowB = names.slice(half)

  return (
    <div aria-hidden="true" className="border-y border-line py-6 space-y-3 select-none">
      <Row items={rowA.length ? rowA : names} />
      <Row items={rowB.length ? rowB : names} reverse />
    </div>
  )
}
