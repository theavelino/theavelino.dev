"use client"

import { useEffect, useState } from "react"

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const id = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(id)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="eyebrow rounded-full border border-line px-4 py-2 transition-colors hover:border-ink hover:text-ink"
    >
      <span aria-live="polite">{copied ? "Copiado ✓" : "Copiar e-mail"}</span>
    </button>
  )
}
