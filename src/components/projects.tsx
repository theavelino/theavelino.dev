import { projects, socials } from "@/content/site"
import { Section } from "./section"

const github = socials.find((s) => s.label === "GitHub")?.href

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Projects() {
  return (
    <Section
      id="projetos"
      index="02"
      label="Projetos"
      title={
        <>
          Coisas que eu <em className="text-accent">construí.</em>
        </>
      }
    >
      <ul className="border-t border-ink">
        {projects.map((project, i) => {
          const main = project.href ?? project.repo
          return (
            <li
              key={project.name}
              data-reveal
              className="group relative grid gap-4 border-b border-line py-8 transition-colors hover:bg-paper-2 sm:grid-cols-[3rem_1fr_auto] sm:gap-6 sm:px-4"
            >
              <span className="font-mono text-sm text-ink-2">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="flex items-center gap-3 font-serif text-4xl leading-none sm:text-5xl">
                  {main ? (
                    <a
                      href={main}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-transform duration-500 after:absolute after:inset-0 group-hover:translate-x-2"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                  <Arrow className="size-7 -translate-x-2 text-accent opacity-0 transition duration-500 group-hover:translate-x-2 group-hover:opacity-100" />
                </h3>
                <p className="mt-4 max-w-[60ch] text-ink-2">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-2">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-start gap-4 sm:flex-col sm:items-end sm:justify-between">
                <span className="font-mono text-sm text-ink-2">{project.year}</span>
                {project.href && project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="eyebrow link-underline relative z-10 hover:text-ink"
                  >
                    Código
                  </a>
                )}
              </div>
            </li>
          )
        })}
      </ul>

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="group mt-10 inline-flex items-center gap-2 text-lg"
        >
          <span className="link-underline">Mais projetos no GitHub</span>
          <Arrow className="size-5 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      )}
    </Section>
  )
}
