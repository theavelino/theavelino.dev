import { site, socials } from "@/content/site"
import { CopyEmail } from "./copy-email"

export function Contact() {
  const links = socials.filter((s) => s.href)

  return (
    <section id="contato" className="bg-ink text-paper">
      <div className="wrap py-24 sm:py-32">
        <p className="eyebrow !text-paper/60">
          <span className="text-accent">04</span> — Contato
        </p>
        <h2 data-reveal className="mt-10 font-serif text-6xl leading-[0.9] tracking-tight sm:text-8xl lg:text-9xl">
          Vamos construir
          <br />
          <em className="text-accent">algo juntos?</em>
        </h2>

        <div data-reveal className="mt-16 flex flex-col gap-6 border-t border-paper/20 pt-10 md:flex-row md:items-center md:justify-between">
          <a
            href={`mailto:${site.email}`}
            className="link-underline w-fit break-all text-2xl sm:text-4xl"
          >
            {site.email}
          </a>
          <div className="[&_button]:border-paper/30 [&_button]:text-paper/70 [&_button:hover]:border-paper [&_button:hover]:text-paper">
            <CopyEmail email={site.email} />
          </div>
        </div>

        {links.length > 0 && (
          <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-lg text-paper/70 transition-colors hover:text-paper"
                >
                  <span className="link-underline">{link.label}</span>
                  <span className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
