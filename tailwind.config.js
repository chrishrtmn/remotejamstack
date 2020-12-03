module.exports = {
  purge: ['./src/components/**/*.js', './src/pages/**/*.js'],
  darkMode: 'media', // or 'false' or 'class'
  theme: {
    extend: {
      colors: {
        'theme-black': '#141414',
        'theme-orange': '#FEB679',
        'theme-red': '#F95C73',
        'theme-blue': '#3C82F4',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
