import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#060816",
        panel: "#0c1124",
        line: "rgba(148, 163, 184, 0.15)",
        ink: "#f8fafc",
        muted: "#94a3b8",
        accent: "#8b9cff",
        accent2: "#4fd1c5"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(139, 156, 255, 0.12), 0 20px 60px rgba(15, 23, 42, 0.55)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseLine: "pulseLine 2.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
