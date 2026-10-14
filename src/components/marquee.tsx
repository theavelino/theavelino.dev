import { stack } from "@/content/site"

export function Marquee() {
  const items = stack.flatMap((g) => g.items)
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center whitespace-nowrap">
          <span className="px-6 font-serif text-3xl italic sm:text-4xl">{item}</span>
          <span className="text-accent" aria-hidden>✦</span>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="overflow-hidden border-y border-ink bg-ink py-5 text-paper">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
