# theavelino.dev — contexto do projeto

Portfólio pessoal de Matheus Avelino (GitHub `devmatheusss`, repo `theavelino/theavelino.dev`). O usuário escreve em português; o site é em pt-BR.

## Versões

- **v2 (atual, na raiz):** Next.js 16 + React 19 + Tailwind 4, página única com estilo editorial.
- **v1 (arquivada em `legacy/v1/`):** Next.js 15, bento escuro com sidebar. Análise completa em `docs/portfolio-v1.md`. `legacy/` fica fora do `tsconfig` e do build.

## Convenções da v2

- Conteúdo só em `src/content/site.ts`; componentes apenas leem esses dados. Não invente projetos nem fatos sobre o autor — o que não for conhecido fica para ele preencher.
- Design tokens em `src/app/globals.css` (`--paper`, `--ink`, `--ink-2`, `--line`, `--accent`), expostos ao Tailwind via `@theme inline` (`bg-paper`, `text-ink`, `text-accent`...). O tema escuro troca os valores em `[data-theme="dark"]`; use a variante `dark:`.
- Tema: script inline no `<head>` (`layout.tsx`) aplica `data-theme` e a classe `js` antes da pintura; `ThemeToggle` salva em `localStorage("theme")`.
- Animação de entrada: adicione `data-reveal` ao elemento (opcional `--reveal-delay`); `RevealObserver` cuida do resto. Sem JS ou com `prefers-reduced-motion`, tudo aparece direto.
- Fontes: `font-serif` (Instrument Serif) para títulos, `font-sans` (Geist) para texto, `font-mono`/`.eyebrow` (Geist Mono) para rótulos.
- Seções novas: use `components/section.tsx` (rótulo numerado + título) e adicione o item em `nav`.
- Comentários e textos de interface em português; estilo de código sem ponto e vírgula, aspas duplas.

## Comandos

`pnpm dev`, `pnpm build`, `pnpm typecheck`.
