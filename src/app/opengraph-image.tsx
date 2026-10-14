import { ImageResponse } from "next/og"
import { site } from "@/content/site"

export const alt = `${site.name} — ${site.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f3f0e8",
          color: "#14130f",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, fontFamily: "monospace", color: "#57544b" }}>
          <span>{site.handle}</span>
          <span style={{ color: "#ff4f1a" }}>●</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 150, lineHeight: 0.9, letterSpacing: -4 }}>
          <span>{site.name.split(" ")[0]}</span>
          <span style={{ color: "#ff4f1a", fontStyle: "italic", marginLeft: 90 }}>{site.name.split(" ").slice(1).join(" ")}</span>
        </div>
        <div style={{ display: "flex", borderTop: "2px solid #d4cfc2", paddingTop: 28, fontSize: 34, color: "#57544b", fontFamily: "sans-serif" }}>
          {site.role}
        </div>
      </div>
    ),
    size,
  )
}
