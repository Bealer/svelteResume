/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const mycolors = require('./src/lib/theme.json')
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      '2xs': '0.675rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.75rem'
    },
    extend: {
      minWidth: {
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '48': '12rem',
        '64': '16rem',
        '96': '24rem'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'blue': mycolors.blue,
      'purple': mycolors.purple,
      'pink': mycolors.pink,
      'orange': mycolors.orange,
      'green': mycolors.green,
      'yellow': mycolors.yellow,
      'gray-dark': mycolors['gray-dark'],
      'gray': mycolors.gray,
      'gray-light': mycolors['gray-light'],
      'white': colors.white,
      'primary': "var(--primary)", //light blue
      'secondary': "var(--secondary)", // light green
      'tertiary': "var(--tertiary)", // light yellow
    },
  },
  plugins: [],
}

