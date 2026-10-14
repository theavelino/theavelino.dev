"use client"

import { useEffect } from "react"

// Observa todo elemento com [data-reveal] e o marca como "in" quando entra na tela.
export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.setAttribute("data-reveal", "in")
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    )
    document.querySelectorAll("[data-reveal]:not([data-reveal='in'])").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
