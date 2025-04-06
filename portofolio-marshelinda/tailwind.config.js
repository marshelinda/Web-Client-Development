/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // Contoh warna primer
        secondary: '#f6993f', // Contoh warna sekunder
        accent: '#e3342f', // Contoh warna aksen
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'], // Contoh font default
      },
    },
  },
  plugins: [],
}