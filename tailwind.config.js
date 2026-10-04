/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#06080c',
        surface: '#0c1118',
        raised: '#121a24',
        edge: '#1c2634',
        fg: '#e9eef6',
        mute: '#8794a6',
        brand: '#2ea3ff',
        heat: '#ff6a2b',
        accent: '#2ea3ff',
        accentSoft: '#57d5ff',
      },
      fontFamily: {
        display: ['"Chakra Petch"', 'system-ui', 'sans-serif'],
        sans: ['Geist', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
