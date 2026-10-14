import { Bio } from "@/components/bio";
import { Title } from "@/components/title";

export default function Home() {
  return (
    <div className="col-span-2 rounded-xl bg-neutral-800/80 shadow-xl p-4 flex flex-col gap-4">
      <Title />
      <Bio />
    </div>
  )
}