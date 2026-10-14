import { Link } from "next-view-transitions";

export function Bio() {
  return (
    <section>
      <p className="text-neutral-300">
        My name is Matheus, i'm Software Developer since 2022, i started coding Python to learn logic and almost 1 year later, I discovered HTML and became interested in web development. This is why I delved deeper into <Link href="/techs#javascript" className="text-violet-500/80 js-link">JavaScript</Link>, a language in which I program almost every day to this day.
      </p>
    </section>
  )
}