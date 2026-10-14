import Link from "next/link"

export default function NotFound() {
  return (
    <main className="wrap flex min-h-svh flex-col items-start justify-center gap-8">
      <p className="eyebrow">Erro 404</p>
      <h1 className="font-serif text-7xl leading-none sm:text-9xl">
        Página <em className="text-accent">perdida.</em>
      </h1>
      <Link href="/" className="link-underline text-lg">
        ← Voltar para o início
      </Link>
    </main>
  )
}
