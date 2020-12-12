module.exports = {
  purge: ['./src/components/**/*.js', './src/pages/**/*.js'],
  darkMode: 'media', // or 'false' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'static-light': "url('/images/static-light.png')",
        'static-dark': "url('/images/static-dark.png')",
      }),
      colors: {
        'black-theme': '#141414',
        'orange-theme': '#FEB679',
        'red-theme': '#F95C73',
        'blue-theme': '#3C82F4',
      },
      fontFamily: {
        cursive: ['Pacifico', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
