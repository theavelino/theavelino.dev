import { GithubIcon, GitlabIcon, LinkedinIcon, MessagesSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CustomLink } from "./custom-link";

export function Sidebar() {
  return (
    <aside className="sm:h-[512px] sm:w-10 flex sm:flex-col items-center gap-4 sm:row-span-2">
      <div className="size-10 shrink-0 rounded-base ring ring-violet-500/20">
        <Image
          src={"https://avatars.githubusercontent.com/u/114790698?v=4"}
          alt="Matheus's Avatar"
          width={128}
          height={128}
          className="object-cover w-full rounded-base"
        />
      </div>
      <ul className="flex sm:flex-col sm:gap-2 sm:bg-neutral-800/80 sm:w-full sm:p-1 rounded-base">
        <li>
          <CustomLink href="https://github.com/devmatheusss" overlayLabel="GitHub">
            <GithubIcon size={20} className="group-hover:stroke-violet-500 transition" />
          </CustomLink>
        </li>
        <li>
          <CustomLink href="https://linkedin.com/in/matheus-mattos-avelino" overlayLabel="LinkedIn">
            <LinkedinIcon size={20} className="group-hover:stroke-violet-500 transition" />
          </CustomLink>
        </li>
        <li>
          <CustomLink href="https://gitlab.com/devmatheusss" overlayLabel="GitLab">
            <GitlabIcon size={20} className="group-hover:stroke-violet-500 transition" />
          </CustomLink>
        </li>
      </ul>
      <div className="sm:w-full sm:p-1 ml-auto sm:ml-0 rounded-xl sm:bg-neutral-800/80">
        <Link href="mailto:contact@theavelino.dev" target="_blank" className="p-3 sm:aspect-square sm:p-0 group flex items-center sm:justify-center gap-2">
          <MessagesSquareIcon size={20} className="group-hover:stroke-violet-500 transition" />
          <span className="sm:hidden text-sm group-hover:text-violet-500 transition shrink-0">Contact me</span>
        </Link>
        {/* <CustomLink href="mailto:contact@theavelino.dev" overlayLabel="Contact">
          <MessagesSquareIcon size={20} className="group-hover:stroke-violet-500 transition" />
        </CustomLink> */}
      </div>
    </aside>
  )
}