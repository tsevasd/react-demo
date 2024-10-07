/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'primary-variant': 'var(--color-primary-variant)',
        'primary-variant-light': 'var(--color-primary-variant-light)',
        'secondary': 'var(--color-secondary)',
        'error': 'var(--color-error)',
        'success': 'var(--color-success)',
        'titlecolor': 'var(--color-titlecolor)',
        'bodycolor': 'var(--color-bodycolor)',
        'textcolor': 'var(--color-textcolor)',
        'darkcolor': 'var(--color-darkcolor)',
        'area': 'rgba(var(--color-area), <alpha-value>)'
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}