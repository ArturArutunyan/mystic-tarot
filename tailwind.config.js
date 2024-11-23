/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      container: {
        screens: {
          'sm': '540px',
          'md': '720px',
          'lg': '960px',
          'xl': '1140px',
        },
      },
    },
  },
  plugins: [],
};