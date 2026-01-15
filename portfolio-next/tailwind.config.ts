import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 
  
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
        primary: "rgb(var(--color-text-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "card-background": "rgb(var(--color-card-background) / <alpha-value>)",
        "card-border": "rgb(var(--color-card-border) / <alpha-value>)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;