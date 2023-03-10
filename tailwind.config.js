/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs", "./views/**/*.ejs", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}
