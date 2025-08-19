/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        bordeaux: '#7f1d1d',
        beige: '#f8f5f0',
        gold: '#d4af37',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montez: ['"Montez"', 'cursive'],
        raleway: ['Raleway', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


