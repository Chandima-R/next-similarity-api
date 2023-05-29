const { fontFamily } = require('@tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container:{
      center: true,
      padding: '1.5rem',
      screens:{
        '2xl': '1440px',
      }
    },
    extend: {
      fontFamily:{
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        ...colors,
        'light-gold': '#F5bc51',
        'dark-gold': '#533519',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss-animate'),
  ],
}
