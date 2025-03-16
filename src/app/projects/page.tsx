import { ArrowLeftIcon } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";

import Portfolio from '@/assets/portfolio.png'
import FinanceAIImage from '@/assets/finance_ai.png'

const projects = [
  {
    id: 1,
    name: "Portfolio",
    image: Portfolio,
    repository: "https:/github.com/devmatheusss/theavelino.dev",
    technologies: [
      {
        name: "NextJS",
        colors: {
          background: "rgb(38 38 38 / 0.5)",
          text: "rgb(163 163 163)"
        },
      },
      {
        name: "TypeScript",
        colors: {
          background: "rgb(30 64 175 / 0.5)",
          text: "rgb(96 165 250)"
        },
      },
      {
        name: "TailwindCSS",
        colors: {
          background: "rgb(21 94 117 / 0.5)",
          text: "rgb(34 211 238)"
        },
      },
    ]
  },
  {
    id: 2,
    name: "finance.ai",
    image: FinanceAIImage,
    repository: "https:/github.com/devmatheusss/finance.ai",
    technologies: [
      {
        name: "NextJS",
        colors: {
          background: "rgb(38 38 38 / 0.5)",
          text: "rgb(163 163 163)"
        },
      },
      {
        name: "TypeScript",
        colors: {
          background: "rgb(30 64 175 / 0.5)",
          text: "rgb(96 165 250)"
        },
      },
      {
        name: "TailwindCSS",
        colors: {
          background: "rgb(21 94 117 / 0.5)",
          text: "rgb(34 211 238)"
        },
      },
    ]
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex-1 rounded-xl flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Link href="/" title="Back to about me" className="opacity-20 hover:opacity-50 transition-opacity" >
          <ArrowLeftIcon size={28} fontWeight="700" />
        </Link>
        <h1 className="text-3xl font-semibold">Projects</h1>
      </div>

      <section className="grid grid-cols-2 gap-4">
        {projects.map(project => (
          <Link href={project.repository} target="_blank" rel="noreferrer external" key={project.id} className="flex flex-col justify-between w-full relative overflow-hidden p-4 aspect-video rounded-lg hover:scale-105 transition-all ease-in-out border-2 border-transparent hover:border-neutral-700 group">
            <Image
              src={project.image}
              alt={project.name}
              width={1920}
              height={1080}
              className="absolute aspect-video object-cover inset-0 -z-10 opacity-50 group-hover:opacity-100 transition"
            />
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-medium">{project.name}</h3>
              <span className="text-sm font-medium text-neutral-400">2 weeks ago</span>
            </div>
            <ul className="flex gap-2 text-xs">
              {project.technologies.map(tech => (
                <li key={tech.name} className="px-2 py-1 rounded-full" style={{ backgroundColor: tech.colors.background, color: tech.colors.text }}>{tech.name}</li>
              ))}
            </ul>
          </Link>
        ))}
        <div className="flex items-center justify-center bg-neutral-800/50 backdrop-blur-sm select-none aspect-video rounded-lg transition-all ease-in-out border-2 border-transparent hover:border-neutral-700 group">
          <span>Coming Soon...</span>
        </div>
      </section>
    </div>
  )
}