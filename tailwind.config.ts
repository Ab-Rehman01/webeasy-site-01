import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      // ← Add this block
      keyframes: {
        glowLine: {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        glowLine: "glowLine 3s linear infinite",
      },
      backgroundImage: {
        glow: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
      },
      // ← End additions

    },
  },
  plugins: [],
};

export default config;
