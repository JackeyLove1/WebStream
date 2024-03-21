/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      height: {
        header: '72px',
        main: 'calc(100vh - 72px)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}