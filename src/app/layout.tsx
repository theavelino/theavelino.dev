import { MouseEffect } from '@/components/mouse-effect'
import './globals.css'
import type { Metadata } from "next"
import { Outfit } from 'next/font/google'
import { Sidebar } from '@/components/sidebar'
import { Link } from "next-view-transitions"
import { ReactIcon } from '@/components/icons/react'
import { ViewTransitions } from 'next-view-transitions'

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })

export const metadata: Metadata = {
  title: "theavelino.dev"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>

      <html lang="pt-BR">
        <body className={`${outfit.variable} font-sans antialiased`}>
          <MouseEffect />
          <div id='master'>
            <Sidebar />
            <main className='flex w-full'>
              {children}
            </main>
            {/* <footer className="flex gap-4">
              <Link href="/projects" className="group flex flex-1 items-center justify-between px-6 bg-blue-600/20 rounded-xl shadow-xl border-2 border-transparent hover:cursor-pointer hover:border-neutral-500/50 transition overflow-hidden">
                <h2 className="text-4xl font-semibold leading-none">Projects</h2>
                <div className="flex items-end h-full">
                  <div className="h-20 w-20 -mb-5 group-hover:-rotate-6 transition bg-neutral-800 rounded-t-xl shadow-2xl z-20 border-2 border-neutral-600 border-b-0 -rotate-12" />
                  <div className="h-20 w-20 -mb-5 group-hover:rotate-3 transition bg-neutral-800 rounded-t-xl shadow-xl z-10 border-2 border-neutral-600 border-b-0 rotate-6 -ml-2" />
                </div>
              </Link>
              <Link href="/techs" className="group relative flex items-center justify-between px-6 bg-violet-600/20 rounded-xl shadow-xl border-2 border-transparent hover:cursor-pointer hover:border-neutral-500/50 transition overflow-hidden">
              <h2 className="text-4xl font-semibold leading-none">Techs</h2>
              <div className="size-32 absolute -bottom-16 right-6 group-hover:animate-spinReactIcon">
                <ReactIcon className="!fill-violet-800" />
              </div>
            </Link>
            </footer> */}
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}