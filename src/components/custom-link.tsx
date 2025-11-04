import Link, { type LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode,
  overlayLabel: string
}

export function CustomLink({ children, overlayLabel, ...props }: CustomLinkProps) {
  return (
    <div className='relative'>
      <a {...props} target='_blank' rel='external noreferrer' className="p-3 sm:p-0 peer group rounded-base transition aspect-square w-full flex items-center justify-center">
        {children}
        <span className='sr-only'>{overlayLabel}</span>
      </a>
      <span className="hidden sm:block opacity-0 peer-hover:opacity-100 select-none absolute right-full top-1/2 -translate-y-1/2 px-2 py-1 rounded-base text-xs bg-neutral-800/80 mr-3 transition">
        {overlayLabel}
      </span>
    </div>
  )
}