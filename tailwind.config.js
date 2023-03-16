/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs", "./views/**/*.ejs", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        'dark-main': '#0f0e17',
        'light-main': '#fffffe',
        'primary': '#ff8906',
        'secondary': '#e53170',
        'highlight-text': '#a7a9be',
        'heading-light': '#00214d',
        'primary-light': '#00ebc7',
        'secondary-light': '#ff5470',
        'highlight-text-light': '#1b2d45'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}
