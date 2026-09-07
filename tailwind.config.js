/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pip: {
          red:         '#E53514',
          charcoal:    '#171717',
          dark:        '#111111',
          mid:         '#444444',
          muted:       '#888888',
          border:      '#E5E5E3',
          'border-md': '#CCCCCA',
          surface:     '#F7F7F5',
          'warm-grey': '#F2F1EF',
          green:       '#2C6E49',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1380px',
      },
    },
  },
  plugins: [],
};
