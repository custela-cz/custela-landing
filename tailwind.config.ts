import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#BFFF37',
          dark: '#99CC2E',
        },
        black: '#0A0A0A',
        surface: '#141416',
        g: {
          0: '#f9fafb',
          1: '#f3f4f6',
          2: '#e5e7eb',
          3: '#d1d5db',
          4: '#9ca3af',
          5: '#6b7280',
          6: '#4b5563',
          7: '#374151',
          8: '#1f2937',
          9: '#111827',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        rs: '12px',
        rm: '16px',
        rl: '20px',
      },
      boxShadow: {
        ss: '0 1px 3px rgba(0,0,0,.06)',
        sm: '0 4px 16px rgba(0,0,0,.06)',
        sx: '0 8px 40px rgba(0,0,0,.08)',
      },
    },
  },
  plugins: [],
}
export default config
