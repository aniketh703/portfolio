/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#c5de49',
        'brand-lime': '#D6F343',
        'brand-dark': '#0A0A0A',
        'brand-bg': '#F5F5F5',
        'brand-muted': '#666666',
        'brand-border': '#E6E6E6',
        'brand-light': '#F5F5F5',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans:  ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono:  ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        'sm': '0.375rem',
        'DEFAULT': '0.5rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      transitionDuration: { '300': '300ms' },
      opacity: { '60': '0.6', '70': '0.7', '85': '0.85' },
      zIndex: {
        '60': '60', '70': '70', '80': '80', '90': '90',
        '100': '100', '150': '150', '160': '160',
        '200': '200', '250': '250', '300': '300',
      },
    },
  },
  plugins: [],
}
