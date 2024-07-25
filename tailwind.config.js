/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}', './node_modules/flowbite/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [require('flowbite/plugin')],
}
