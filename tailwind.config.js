/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      borderRadius:{
          'hari': ["0% 0% 56% 70% / 10% 10% 14% 14%"],
      },
      fontFamily:{
        'good':["Readex Pro", "serif"],
      }
    },
  },
  plugins: [],
}

