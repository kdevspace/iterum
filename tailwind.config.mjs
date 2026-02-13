/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        codex: {
          black: '#0a0a0f',
          dark: '#0f1419',
          darker: '#1a1f2e',
          card: '#141922',
          border: '#2a2f3e',
          gold: '#c9a84c',
          'gold-dim': '#8a7030',
          green: '#4ade80',
          'green-dim': '#166534',
          blue: '#60a5fa',
          indigo: '#4f46e5',
          text: '#e2e8f0',
          'text-dim': '#94a3b8',
          'text-muted': '#64748b',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        serif: ['Cormorant Garamond', 'EB Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(4px)' },
          '100%': { opacity: '1', filter: 'blur(0px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
