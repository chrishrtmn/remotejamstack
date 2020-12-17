module.exports = {
  purge: ['./src/components/**/*.js', './src/pages/**/*.js'],
  darkMode: 'media', // or 'false' or 'class'
  theme: {
    extend: {
      colors: {
        'black-theme': '#141414',
        'orange-theme': '#FEB679',
        'red-theme': '#F95C73',
        'blue-theme': '#3C82F4',
      },
      maxWidth: {
        mh: '710px',
      },
    },
  },
  variants: {
    extend: {},
  },
}
