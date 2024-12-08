/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.svg",
    "./pages/**/*.{js,ts,jsx,tsx}", // Asegúrate de incluir todas las rutas de tus archivos
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      fontSize: {
        base: "20px", // Cambia el tamaño base de la fuente
        lg: "40px",   // Tamaño para texto más grande
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};


