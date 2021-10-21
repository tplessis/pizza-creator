module.exports = {
  mode: 'jit',
  prefix: '',
  purge: {
    content: ['./src/**/*.{html,ts}'],
    safelist: [
      'border-green-500',
    ]
  }
  ,
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'lato': ['lato', 'sans-serif']
    },
    extend: {
      rotate: {
        '30': '30deg',
        '-30': '-30deg'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
