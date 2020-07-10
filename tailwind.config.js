const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        'book-purple': '#48009c',
        'book-light' : '#8e7ffb',
        'book-accent': '#00ffff'
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