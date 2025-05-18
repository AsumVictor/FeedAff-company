/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        signika: ['Signika', 'sans-serif'], // 👈 Add this line
      },
      colors: {
        'FeedAff-green': {
          900: '#1a3c1e',
          800: '#224c26',
          700: '#2d5e32',
          600: '#3a713e',
        },
        'FeedAff-yellow': {
          400: '#e6c288',
          500: '#ddb76f',
        }
      },
    },
  },
  plugins: [],
};