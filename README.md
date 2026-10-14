# theavelino.dev

Portfólio pessoal de Matheus Avelino — v2.

Página única com layout editorial: tipografia grande com serifa, tema claro/escuro, animações de entrada e conteúdo centralizado em um único arquivo.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, gerado de forma estática)
- React 19 + TypeScript
- Tailwind CSS 4
- Fontes: Instrument Serif, Geist e Geist Mono (`next/font`)

Sem dependências de UI além disso: ícones são SVG inline e as interações são componentes pequenos.

## Rodando

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # build de produção
pnpm typecheck
```

## Editando o conteúdo

Todos os textos, projetos, stack e links ficam em [`src/content/site.ts`](src/content/site.ts).

- **Projetos:** adicione itens em `projects` (`href` = site no ar, `repo` = código).
- **Redes sociais:** preencha `href` em `socials`; links vazios ficam escondidos.
- **Disponibilidade:** `site.available` liga/desliga o selo "Disponível para novos projetos".

## Estrutura

```
src/app/            layout, página, 404, imagem Open Graph, favicon, sitemap e robots
src/components/     seções (hero, sobre, projetos, stack, contato) e componentes interativos
src/content/site.ts conteúdo do site
legacy/v1/          primeira versão do portfólio (arquivada)
docs/               notas — ver docs/portfolio-v1.md
```
