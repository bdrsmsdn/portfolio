/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#050B18',
          surface: '#0D1527',
          card: '#0F1A2E',
          accent: '#64FFDA',
          blue: '#4FC3F7',
          purple: '#BB86FC',
          text: '#CCD6F6',
          muted: '#8892B0',
          border: '#1E2D4A',
        },
      },
      fontFamily: {
        mono: ['"Space Mono"', '"JetBrains Mono"', '"Courier New"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'type-cursor': 'typeCursor 1s step-end infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'scan': 'scan 8s linear infinite',
      },
      boxShadow: {
        neon: '0 0 10px rgba(100,255,218,0.4), 0 0 30px rgba(100,255,218,0.15)',
        'neon-blue': '0 0 10px rgba(79,195,247,0.4), 0 0 30px rgba(79,195,247,0.15)',
        card: '0 4px 30px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
