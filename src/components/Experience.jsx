function ExperienceRow({ item, index }) {
  return (
    <div className="grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-line">
      <div className="md:col-span-1">
        <span className="font-display text-2xl text-paper-3">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="md:col-span-11">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
          <div>
            <h3 className="font-display text-lg text-paper">{item.title}</h3>
            <p className="font-body text-sm text-paper-3">{item.place}</p>
          </div>
          <span className="font-mono text-xs text-paper-3 whitespace-nowrap">{item.year}</span>
        </div>
        <p className="font-body text-sm text-paper-2 leading-relaxed max-w-2xl">{item.desc}</p>
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {item.tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Experience({ items }) {
  return (
    <section id="experience" className="py-24 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-paper-3 mb-2">
          Experience
        </p>
        <h2 className="font-display text-2xl sm:text-3xl text-paper max-w-xl mb-10">
          Building things, one role at a time.
        </h2>

        <div>
          {items.map((item, i) => (
            <ExperienceRow key={item.title + item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
