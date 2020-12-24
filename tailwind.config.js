module.exports = {
  purge: ['./src/components/**/*.js', './src/pages/**/*.js'],
  darkMode: 'media', // or 'false' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-gray-theme': '#1f2937',
        'red-theme': '#ef4444',
        producthunt: '#da542f',
      },
      maxWidth: {
        mh: '720px',
      },
    },
  },
  variants: {
    extend: {},
  },
}
