# Portfólio v1 — análise

Registro do portfólio original (`theavelino.dev`, commits `b01b1f1`..`378dc7f`), feito antes da reescrita para a v2.
O código da v1 foi arquivado em `legacy/v1/` (e continua intacto na branch `main` e no histórico do git).

## Stack

- Next.js 15.0.3 (App Router, Turbopack no dev), React 19 RC, TypeScript
- Tailwind CSS 3.4, fonte Outfit (`next/font/google`)
- `next-view-transitions` (transições entre rotas via View Transitions API)
- `typewriter-effect` (título digitado), `lucide-react` (ícones)
- pnpm

## Estrutura

```
src/app/layout.tsx         layout raiz: MouseEffect + Sidebar + grid com cards "Projects" e "Techs"
src/app/page.tsx           home: título digitado + bio
src/app/projects/page.tsx  página Projects (só o cabeçalho, sem conteúdo)
src/app/techs/page.tsx     página Techs (só um <h2> "JavaScript")
src/components/
  sidebar.tsx              avatar do GitHub + links sociais com tooltip
  custom-link.tsx          link externo com label que aparece no hover
  mouse-effect.tsx         "luz" borrada que segue o cursor
  title.tsx                typewriter "theavelino.dev" com cursor "_"
  bio.tsx                  texto de apresentação
  icons/react.tsx          SVG do React (gira no hover do card Techs)
  icons/github.tsx         SVG do GitHub (não usado)
```

## Design

- Tema escuro único (`color-scheme: dark`), tudo centralizado na tela, `overflow-hidden`.
- Layout tipo *bento*: caixa fixa de 512px de altura × `max-w-4xl`, grid 2 colunas.
  - Card grande de conteúdo (`col-span-2`), trocado por rota.
  - Dois cards fixos embaixo: **Projects** (azul, com "pastas" que giram no hover) e **Techs** (violeta, com logo do React girando).
- Sidebar estreita (40px) à esquerda com avatar + indicador verde "online", GitHub, LinkedIn, GitLab e contato.
- Microinterações: blob de luz seguindo o mouse, tooltips, view transition no link "JavaScript" da bio → seção na página Techs.

## Conteúdo

- Nome: Matheus Avelino — handle no GitHub `devmatheusss` (avatar `avatars.githubusercontent.com/u/114790698`).
- Bio: desenvolvedor desde 2022; começou com Python para aprender lógica, cerca de 1 ano depois conheceu HTML e foi para o desenvolvimento web; programa em JavaScript quase todo dia.
- Contato: `contact@theavelino.dev`.
- Texto em inglês, mas `<html lang="pt-BR">`.

## Pontos em aberto / limitações

- Páginas Projects e Techs ficaram vazias (só cabeçalho).
- Links de LinkedIn e GitLab apontam para o GitHub (placeholder).
- Layout de altura fixa e `overflow-hidden` no body: quebra em telas pequenas, sem versão mobile.
- `MouseEffect` re-renderiza a cada `mousemove` (state React) e usa `position: absolute`.
- Sem metadados de SEO/Open Graph além do `<title>`; README ainda é o padrão do `create-next-app`.
- React em versão RC e `@types/react` 18 (desalinhado).
