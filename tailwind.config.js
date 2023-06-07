/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-one': '#B66D38',
        'color-two': '#EAE2CC',
        'color-three': '#336B6F',
        'color-four': '#1C4046',
      }
    },
  },
  plugins: [require("daisyui")],
}

