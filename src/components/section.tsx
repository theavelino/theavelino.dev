type SectionProps = {
  id: string
  index: string
  label: string
  title: React.ReactNode
  children: React.ReactNode
}

// Moldura comum: rótulo numerado fixo à esquerda, conteúdo à direita.
export function Section({ id, index, label, title, children }: SectionProps) {
  return (
    <section id={id} className="wrap grid gap-10 border-t border-line py-20 sm:py-28 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <p className="eyebrow lg:sticky lg:top-24">
          <span className="text-accent">{index}</span> — {label}
        </p>
      </div>
      <div className="lg:col-span-9">
        <h2 data-reveal className="mb-14 max-w-[18ch] text-balance font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
