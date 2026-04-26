import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "#063D2E",
        emeraldDeep: "#0A5C43",
        mint: "#DDFBEA",
        mintSoft: "#F3FFF8",
        charcoal: "#10231C"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(6, 61, 46, 0.14)",
        glow: "0 20px 80px rgba(16, 185, 129, 0.22)"
      },
      backgroundImage: {
        radialMint: "radial-gradient(circle at top left, rgba(46, 204, 113, 0.18), transparent 35%), radial-gradient(circle at 80% 10%, rgba(6, 61, 46, 0.10), transparent 28%)"
      }
    }
  },
  plugins: []
};
export default config;
