/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'bg': '#323437',
      'main': '#e2b714',
      'sub': '#646669',
      'alt': '#2c2e31',
      'text': '#d1d0c5',
      'error': '#ca4754',
    },
    fontFamily: {
      brand: ['Lexend Deca', 'sans-serif'],
      main: ['Roboto Mono', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      base: '1rem',
      xl: '1.25rem',
      'title': '2rem',
      'filter': '1em',
    },
    extend: {
      borderRadius: {
        'st': '2rem',
      },
      spacing: {
        'xt': '550px',
        'st': '1250px',
      },
      screens: {
        'md': '550px'
      }
    }
  }
}