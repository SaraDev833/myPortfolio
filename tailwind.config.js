/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#320F85',
        'purple': '#320F85',
        'sky': '#1877F2',
        'lightPurple': '#763CAC',
        'darkBlue': '#1A0B2E',
        'darkNavy': '#11071F'
      },
      fontFamily: {
        'Preahvihear': "'Open Sans',  sans-seri"
      }
    },
  },
  plugins: [],
}

