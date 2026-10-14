"use client"

import { useEffect, useState } from "react"

export function MouseEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return <div
    className="size-16 rounded-full blur-[50px] absolute bg-white/20 -z-10"
    style={{
      top: position.y - 32,
      left: position.x - 32
    }}
  />
}