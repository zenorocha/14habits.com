const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        'book-yellow': '#fce62e',
        'book-gray': '#1a1a1c',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
  ],
  plugins: [
    require('@tailwindcss/ui'),
  ]
}