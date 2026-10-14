import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-outfit)"
      },
      animation: {
        spinReactIcon: "spinIcon 3s linear"
      }
    },
    keyframes: {
      spinIcon: {
        '100%': {
          transform: "rotate(360deg)"
        }
      }
    }
  },
  plugins: [],
} satisfies Config;
