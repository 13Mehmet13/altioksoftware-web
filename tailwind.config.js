/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#060b16',
        panel: '#0b1427',
        accent: '#2ea3ff',
        accentSoft: '#57d5ff',
      },
      boxShadow: {
        glow: '0 0 40px rgba(46, 163, 255, 0.25)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(110, 196, 255, 0.14) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}
