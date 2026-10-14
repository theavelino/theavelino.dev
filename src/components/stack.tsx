import { stack } from "@/content/site"
import { Section } from "./section"

export function Stack() {
  return (
    <Section
      id="stack"
      index="03"
      label="Stack"
      title={
        <>
          Ferramentas do <em className="text-accent">dia a dia.</em>
        </>
      }
    >
      <div className="grid gap-12 sm:grid-cols-3">
        {stack.map((group, i) => (
          <div key={group.group} data-reveal style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}>
            <h3 className="eyebrow border-b border-ink pb-3">{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between border-b border-line py-3 text-xl transition-[padding,color] hover:pl-2 hover:text-accent"
                >
                  {item}
                  <span className="size-1.5 rounded-full bg-current opacity-30" aria-hidden />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
