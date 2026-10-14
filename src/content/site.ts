// Todo o conteúdo do site mora aqui. Edite este arquivo para atualizar textos,
// projetos, stack e links — os componentes só leem estes dados.

export const site = {
  url: "https://theavelino.dev",
  name: "Matheus Avelino",
  shortName: "Matheus",
  handle: "theavelino.dev",
  role: "Desenvolvedor de software",
  tagline: "Construo interfaces para a web com cuidado nos detalhes — do primeiro rascunho ao deploy.",
  location: "Brasil",
  timeZone: "America/Sao_Paulo",
  available: true,
  email: "contact@theavelino.dev",
  avatar: "https://avatars.githubusercontent.com/u/114790698?v=4",
}

export const about = [
  "Programo desde 2022. Comecei com Python, para aprender lógica de programação, e quase um ano depois esbarrei no HTML — foi aí que a web me pegou.",
  "Desde então mergulhei em JavaScript, a linguagem que uso praticamente todos os dias, e no ecossistema em volta dela: TypeScript, React, Next.js e Tailwind CSS.",
  "Gosto de interfaces que parecem simples porque alguém pensou bastante nelas: boa tipografia, transições que fazem sentido e código fácil de manter.",
]

export const facts = [
  { label: "Programando desde", value: "2022" },
  { label: "Linguagem do dia a dia", value: "JavaScript" },
  { label: "Foco", value: "Front-end" },
]

export type TimelineItem = { year: string; title: string; description: string }

export const timeline: TimelineItem[] = [
  {
    year: "2022",
    title: "Python e lógica",
    description: "Primeiro contato com programação, resolvendo problemas e aprendendo a pensar em algoritmos.",
  },
  {
    year: "2023",
    title: "A web",
    description: "Descobri HTML, CSS e JavaScript e passei a construir para o navegador.",
  },
  {
    year: "2024",
    title: "React & Next.js",
    description: "TypeScript, componentes e o App Router. Primeira versão deste portfólio.",
  },
  {
    year: "Hoje",
    title: "Desenvolvimento contínuo",
    description: "JavaScript quase todo dia, sempre buscando interfaces mais rápidas, acessíveis e bem acabadas.",
  },
]

export type Project = {
  name: string
  description: string
  year: string
  tags: string[]
  href?: string
  repo?: string
}

// Adicione seus projetos aqui. `href` é o link do site no ar; `repo`, o código.
export const projects: Project[] = [
  {
    name: "theavelino.dev v2",
    description: "Este site. Página única com layout editorial, tema claro/escuro e conteúdo vindo de um único arquivo.",
    year: "2026",
    tags: ["Next.js 16", "React 19", "Tailwind 4"],
    href: "https://theavelino.dev",
    repo: "https://github.com/theavelino/theavelino.dev",
  },
  {
    name: "theavelino.dev v1",
    description: "Primeiro portfólio: layout bento escuro, título digitado, luz que segue o cursor e view transitions.",
    year: "2024",
    tags: ["Next.js 15", "Tailwind 3", "View Transitions"],
    repo: "https://github.com/theavelino/theavelino.dev/tree/main",
  },
]

export const stack: { group: string; items: string[] }[] = [
  { group: "Linguagens", items: ["JavaScript", "TypeScript", "Python"] },
  { group: "Front-end", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Ferramentas", items: ["Git", "GitHub", "pnpm", "VS Code"] },
]

// Deixe `href` vazio para esconder um link.
export const socials: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com/devmatheusss" },
  { label: "LinkedIn", href: "" },
  { label: "GitLab", href: "" },
]

export const nav = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "stack", label: "Stack" },
  { id: "contato", label: "Contato" },
]
