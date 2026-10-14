import { site } from "@/content/site"

export function Footer() {
  return (
    <footer className="bg-ink text-paper/50">
      <div className="wrap flex flex-col gap-4 border-t border-paper/15 py-8 font-mono text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Feito com Next.js & Tailwind CSS</p>
        <a href="#top" className="link-underline w-fit hover:text-paper">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  )
}
