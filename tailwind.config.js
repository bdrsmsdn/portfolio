/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'oklch(14% 0.010 40)',   // paper (dark section background)
          2: 'oklch(18% 0.012 40)',          // paper-2 (elevated / hover surface)
          3: 'oklch(22% 0.013 40)',          // paper-3 (rare, deepest hover)
        },
        paper: {
          DEFAULT: 'oklch(96% 0.006 40)',    // ink on dark (near-white text)
          2: 'oklch(74% 0.008 40)',          // ink-2 (secondary text on dark)
          3: 'oklch(58% 0.008 40)',          // muted text on dark
        },
        line: 'oklch(32% 0.010 40)',         // rule / hairline on dark
        accent: {
          DEFAULT: 'oklch(78% 0.15 75)',     // warm amber — interaction-only
          focus: 'oklch(80% 0.19 75)',
        },
        // Inverted (light) band — closing CTA + footer
        cream: {
          DEFAULT: 'oklch(97% 0.010 40)',    // paper-inverse
          2: 'oklch(93% 0.012 40)',
        },
        dusk: {
          DEFAULT: 'oklch(16% 0.010 40)',    // ink-inverse
          2: 'oklch(46% 0.010 40)',          // muted-inverse
        },
        hair: 'oklch(82% 0.012 40)',         // rule-inverse
      },
      fontFamily: {
        display: ['"General Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Switzer"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 5vw + 1rem, 5.25rem)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        'display-s': ['clamp(2.25rem, 3.5vw + 1rem, 3.75rem)', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        // Hero-only — deliberately larger than the standard display scale so the
        // headline commands the full container width, matching the reference.
        hero: ['clamp(3rem, 1.6rem + 5.9vw, 7.5rem)', { lineHeight: '1.0', letterSpacing: '-0.025em' }],
      },
      spacing: {
        '3xs': '0.125rem',
        '2xs': '0.25rem',
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2.5rem',
        '2xl': '4rem',
        '3xl': '6rem',
        '4xl': '9rem',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
        in: 'cubic-bezier(0.7, 0, 0.84, 0)',
        'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'marquee-reverse': 'marquee-reverse 38s linear infinite',
        reveal: 'reveal 420ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        reveal: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
