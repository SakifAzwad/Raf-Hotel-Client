/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: "'Raleway', sans-serif",
      },
      colors:
    {

      'col0': '#FAF6F1',
      'col1': '#5D5C61',
      'col2': '#379683',
      'col3': '#7395AE',
      'col4': '#557A95',
      'col5': '#B1A296',
    }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
  darkMode: "class",
}

