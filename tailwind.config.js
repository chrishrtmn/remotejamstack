module.exports = {
  purge: ['./src/components/**/*.js', './src/pages/**/*.js'],
  darkMode: 'media', // or 'false' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-gray-theme': '#1f2937',
        'red-theme': '#ef4444',
        twitter: '#1DA1F2',
        facebook: '#3b5998',
        linkedin: '#2867B2',
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
