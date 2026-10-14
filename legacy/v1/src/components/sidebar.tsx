import { GithubIcon, GitlabIcon, LinkedinIcon, MessagesSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CustomLink } from "./custom-link";

export function Sidebar() {
  return (
    <aside className="h-[512px] w-10 flex flex-col items-center gap-4">
      <div className="relative size-10 rounded-xl shadow-xl">
        <Image
          src={"https://avatars.githubusercontent.com/u/114790698?v=4"}
          alt="Matheus's Avatar"
          width={128}
          height={128}
          className="object-cover w-full rounded-xl"
        />
        <div className="size-2 bg-green-500 rounded-full absolute -right-0.5 -bottom-0.5" />
      </div>
      <ul className="flex flex-col gap-2 bg-neutral-800/80 w-full p-1 rounded-xl">
        <li>
          <CustomLink href="https://github.com/devmatheusss" overlayLabel="GitHub">
            <GithubIcon size={20} />
          </CustomLink>
        </li>
        <li>
          <CustomLink href="https://github.com/devmatheusss" overlayLabel="LinkedIn">
            <LinkedinIcon size={20} />
          </CustomLink>
        </li>
        <li>
          <CustomLink href="https://github.com/devmatheusss" overlayLabel="GitLab">
            <GitlabIcon size={20} />
          </CustomLink>
        </li>
      </ul>
      <div className="w-full p-1 rounded-xl bg-neutral-800/80">
        <CustomLink href="mailto:contact@theavelino.dev" overlayLabel="Contact">
          <MessagesSquareIcon size={20} />
        </CustomLink>
      </div>
    </aside>
  )
}