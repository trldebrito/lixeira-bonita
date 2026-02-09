/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Merriweather', 'serif'], // Fontes elegantes
        sans: ['Inter', 'Montserrat', 'sans-serif'],
      },
      // ...
    }
  },
  plugins: [],
}