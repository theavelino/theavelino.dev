"use client"

import Typewriter from "typewriter-effect"

export function Title() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString("theavelino")
          .pauseFor(500)
          .typeString(".")
          .pauseFor(500)
          .typeString("dev")
          .start()
      }}
      options={{
        wrapperClassName: "text-3xl",
        cursor: "_",
        autoStart: true
      }}
    />
  )
}