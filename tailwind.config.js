/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "accent-green": "var(--accent-green)",
        "accent-purple": "var(--accent-purple)",
        "accent-orange": "var(--accent-orange)",
        card: "var(--bg-card)",
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
      },
    },
  },
  plugins: [],
}
