import { nav, site } from "@/content/site"
import { Clock } from "./clock"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <a href="#top" className="font-mono text-sm tracking-tight">
          {site.handle}
          <span className="animate-pulse text-accent">_</span>
        </a>

        <nav aria-label="Seções" className="hidden md:block">
          <ul className="flex gap-8 text-sm">
            {nav.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="group flex items-baseline gap-1.5 text-ink-2 transition-colors hover:text-ink">
                  <span className="font-mono text-[10px] text-accent">0{i + 1}</span>
                  <span className="link-underline">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <span className="eyebrow hidden sm:inline">
            {site.location} · <Clock timeZone={site.timeZone} />
          </span>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
