import { about, facts, timeline } from "@/content/site"
import { Section } from "./section"

export function About() {
  const [lead, ...paragraphs] = about

  return (
    <Section
      id="sobre"
      index="01"
      label="Sobre"
      title={
        <>
          Da lógica em Python <em className="text-accent">à web.</em>
        </>
      }
    >
      <div className="grid gap-10 md:grid-cols-9">
        <p data-reveal className="text-pretty text-2xl leading-snug md:col-span-9 sm:text-3xl">
          {lead}
        </p>
        <div className="space-y-5 text-lg leading-relaxed text-ink-2 md:col-span-5 md:col-start-5">
          {paragraphs.map((p) => (
            <p key={p} data-reveal>
              {p}
            </p>
          ))}
        </div>
      </div>

      <dl className="mt-20 grid border-t border-line sm:grid-cols-3">
        {facts.map((fact, i) => (
          <div
            key={fact.label}
            data-reveal
            style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            className="border-b border-line py-6 sm:border-b-0 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0"
          >
            <dt className="eyebrow">{fact.label}</dt>
            <dd className="mt-3 font-serif text-5xl">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-24">
        <h3 className="eyebrow mb-6">Trajetória</h3>
        <ol className="border-t border-line">
          {timeline.map((item) => (
            <li
              key={item.year}
              data-reveal
              className="grid gap-2 border-b border-line py-6 sm:grid-cols-[7rem_1fr_1.4fr] sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-sm text-accent">{item.year}</span>
              <span className="text-xl font-medium">{item.title}</span>
              <span className="text-ink-2">{item.description}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
