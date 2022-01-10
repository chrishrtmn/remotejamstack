module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'false' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'md-red': '0 0 6px 0 rgba(239, 68, 68, 1)',
      },
      colors: {
        'dark-gray-theme': '#1f2937',
        'red-theme': '#ef4444',
        twitter: '#1DA1F2',
        facebook: '#3b5998',
        linkedin: '#2867B2',
        producthunt: '#da542f',
      },
      maxWidth: {
        masthead: '720px',
      },
      screens: {
        header_nav: '880px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  variants: {
    extend: {},
  },
}
