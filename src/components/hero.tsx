import Image from "next/image"
import { site } from "@/content/site"

export function Hero() {
  const [first, ...rest] = site.name.split(" ")

  return (
    <section id="top" className="wrap flex min-h-[calc(100svh-4rem)] flex-col justify-between gap-12 pt-10 pb-10 sm:pt-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {site.available ? (
          <p className="eyebrow flex items-center gap-2 animate-rise">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative size-2 rounded-full bg-accent" />
            </span>
            Disponível para novos projetos
          </p>
        ) : (
          <span />
        )}
        <p className="eyebrow animate-rise [animation-delay:100ms]">Portfólio — {new Date().getFullYear()}</p>
      </div>

      <h1 className="font-serif leading-[0.82] tracking-[-0.02em] text-[clamp(4.5rem,19vw,15rem)]">
        <span className="block animate-rise [animation-delay:150ms]">{first}</span>
        <span className="block animate-rise pl-[0.6em] italic text-accent [animation-delay:300ms]">{rest.join(" ")}</span>
      </h1>

      <div className="grid gap-8 border-t border-line pt-6 sm:grid-cols-12">
        <div className="flex items-center gap-4 sm:col-span-4 animate-rise [animation-delay:450ms]">
          <Image
            src={site.avatar}
            alt={`Foto de ${site.shortName}`}
            width={56}
            height={56}
            priority
            className="size-14 rounded-full object-cover grayscale"
          />
          <div>
            <p className="font-medium">{site.role}</p>
            <p className="eyebrow mt-1">{site.location}</p>
          </div>
        </div>
        <p className="text-balance text-xl leading-snug text-ink-2 sm:col-span-6 sm:text-2xl animate-rise [animation-delay:550ms]">
          {site.tagline}
        </p>
        <a
          href="#sobre"
          aria-label="Rolar para Sobre"
          className="group hidden size-14 place-self-end place-items-center rounded-full border border-line transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink sm:col-span-2 sm:grid animate-rise [animation-delay:650ms]"
        >
          <svg viewBox="0 0 24 24" className="size-5 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            <path d="M12 4v16m0 0-6-6m6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}
