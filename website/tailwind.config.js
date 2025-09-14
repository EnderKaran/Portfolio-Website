/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Bu satır hala gerekli!
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'card-background': 'rgb(var(--color-card-background) / <alpha-value>)',
        'card-border': 'rgb(var(--color-card-border) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}