/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{tsx,ts}",
    "./components/**/*.{tsx,ts}",
  ],
  theme: {
    extend: {
      colors: {
        fondo:      "#F9F7F2",
        primario:   "#2B5292",
        secundario: "#6B8EBF",
        acento:     "#A5C4E7",
        dorado:     "#B88F2D",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
