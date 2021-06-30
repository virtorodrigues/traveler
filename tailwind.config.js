const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: "#123952",
      secondary: "#F25D27",
      background: "#F5F8FA",
      border: "#DCE2E6",
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
      serif: ['Roboto', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
