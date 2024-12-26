/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        display:[ "Merriweather", "serif"],
        style:["Great Vibes", "serif"]
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

