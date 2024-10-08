/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: "Montserrat, sans-serif"
      },
      colors:{
        primaryRed: "#d8232a"
      }
    },
  },
  plugins: [],
}

