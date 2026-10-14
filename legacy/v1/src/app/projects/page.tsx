import { ArrowLeftIcon } from "lucide-react";
import { Link } from "next-view-transitions";

export default function ProjectsPage() {
  return (
    <div className="col-span-2 rounded-xl bg-blue-600/20 shadow-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Link href="/" title="Back to about me" className="opacity-50 hover:opacity-100 transition-opacity" >
          <ArrowLeftIcon size={28} fontWeight="700" />
        </Link>
        <h1 className="text-3xl font-semibold">Projects</h1>
      </div>
    </div>
  )
}