/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        'stags-red': 'rgb(220,52,68)'
      }
    },
  },
  plugins: [],

}