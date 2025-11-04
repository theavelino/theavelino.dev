import { Bio } from "@/components/bio";
import { Title } from "@/components/title";
import { Link } from "next-view-transitions";

export default function Home() {
  const period = 1

  return (
    <div className="rounded-xl sm:px-4 flex flex-col gap-4">
      <Title />
      <Bio />
      <section className="flex gap-2">
        <div className="flex flex-col gap-4 p-4 rounded-xl bg-neutral-800/50 w-fit">
          <strong className="text-3xl font-semibold">Software Engineer</strong>
          <div className="flex flex-col gap-2">
            <div className="w-full h-1 rounded-full overflow-hidden bg-neutral-700">
              <div className="bg-violet-500 w-1/2 h-full" style={{ width: `${(100 / 8) * period}%` }} />
            </div>
            <span className="text-xs text-neutral-500 font-medium">{period} / 8 period</span>
          </div>
        </div>
        <Link href="/projects" className="relative group flex flex-1 items-center justify-between px-6 bg-blue-600/20 rounded-xl shadow-xl border-2 border-transparent hover:cursor-pointer hover:border-neutral-500/50 transition overflow-hidden">
          <h2 className="text-4xl font-semibold leading-none">Projects</h2>
          <div className="absolute -right-8 grid grid-cols-2 grid-rows-2 gap-2">
            <div className="aspect-video bg-neutral-500/50 w-32 rounded-lg hover:scale-105 transition" />
            <div className="aspect-video bg-neutral-500/50 w-32 rounded-lg hover:scale-105 transition" />
            <div className="aspect-video bg-neutral-500/50 w-32 rounded-lg hover:scale-105 transition" />
            <div className="aspect-video bg-neutral-500/50 w-32 rounded-lg hover:scale-105 transition" />
          </div>
          {/* <div className="flex items-end h-full">
            <div className="h-20 w-20 -mb-5 group-hover:-rotate-6 transition bg-neutral-800 rounded-t-xl shadow-2xl z-20 border-2 border-neutral-600 border-b-0 -rotate-12" />
            <div className="h-20 w-20 -mb-5 group-hover:rotate-3 transition bg-neutral-800 rounded-t-xl shadow-xl z-10 border-2 border-neutral-600 border-b-0 rotate-6 -ml-2" />
          </div> */}
        </Link>
      </section>
    </div>
  )
}