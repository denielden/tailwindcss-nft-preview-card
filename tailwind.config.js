module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      width: {
        '80': '22rem'
      },
      colors: {
        'soft-blue': 'hsl(215, 51%, 70%)',
        'cyan': 'hsl(178, 100%, 50%)',
        'blue': 'hsl(217, 54%, 11%)',
        'card-blue': 'hsl(216, 50%, 16%)',
        'white': 'hsl(0, 0%, 100%)',
        'line': 'hsl(215, 32%, 27%)',
      },
      fontFamily: {
        'sans': ['Outfit', 'sans-serif']
      }
    },
  },
  plugins: [],
}
