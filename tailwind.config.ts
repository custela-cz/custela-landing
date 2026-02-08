import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lime: '#BFFF37',
        'lime-hover': '#A8E62E',
        'lime-light': '#D4FF70',
        dark: '#0A0A0A',
        'dark-secondary': '#111111',
        'dark-card': '#0F0F0F',
        'gray-text': '#888888',
        'gray-muted': '#555555',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        btn: '10px',
        card: '16px',
      },
    },
  },
  plugins: [],
}
export default config
