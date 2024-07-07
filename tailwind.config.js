/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        cutive: ["var(--font-cutive)"],
        nyght: ["var(--font-nyght)"],
      },
      colors: {
        mono: {
          200: "#6C6D6D",
          900: "#0A0B0C",
        },
      },
    },
  },
  plugins: [],
};
