/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
      rotate: {
        '135': '135deg',
      },
      gridTemplateRows: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      screens: {
        'bigPhone': {'max': '640px'},
        'phone' : {'max': '450'},
      },
      gridRow: {
        'span-1/2': 'span 0.5 / span 0.5',
        'span-1.5': 'span 1.5 / span 1.5',
      },
    },
  },
  plugins: [],
}

