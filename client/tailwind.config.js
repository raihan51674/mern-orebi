/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary :"#262626",
        lightText :"#6D6D6D",
        destructive :"#b91c1c",

      }
    },
  },
  plugins: [],
}