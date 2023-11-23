/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1080px',
      xl: '1200px',
      xlg: '1400px',
    },
    container: {
      center: true,
    },
    colors: {
      white: '#FFFFFF',
      lightpurple: '#B08AF8',
      darkpurple: '#130D19',
      orange: '#ECC080',
      neongreen: '#efff67',
      purpleblue: '#0003ff',
    },
    extend: {
      fontFamily: {
        primary: ['Arimo', 'sans-serif',  ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: []
};