/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          light: '#b5ffd7',
          primary: '#82ffce',
          dark: '#0fc89b',
        },
        pink: {
          100: '#ff78f1',
          200: '#ff8d97',
          300: '#f67470',
        },
        gray: {
          100: '#f5f5f5',
          200: '#f0f0f0',
          300: '#e0e0e0',
          400: '#dddddd',
          500: '#bbbbbb',
          600: '#888888',
          700: '#444444',
          800: '#333333',
          900: '#111111',
        },
        error: '#F93B3B',
      },
      fontFamily: {
        apple: ['-apple-system', 'sans-serif'],
        neo: ['neodgm'],
      },
      fontSize: {
        h1: ['1.5rem', { lineHeight: '140%' }],
        h2: ['1.375rem', { lineHeight: '140%' }],
        h3: ['1.25rem', { lineHeight: '150%' }],
        h4: ['1.125rem', { lineHeight: '150%' }],
        h5: ['1.5rem', { lineHeight: '140%' }],
        t1: ['1rem', { lineHeight: '140%' }],
        t2: ['1rem', { lineHeight: '150%' }],
        b1: ['1rem', { lineHeight: '140%' }],
        b2: ['0.875rem', { lineHeight: '140%' }],
        b3: ['0.75rem', { lineHeight: '140%' }],
        btn: ['1rem', { lineHeight: '120%' }],
        cap: ['0.625rem', { lineHeight: '120%' }],
        effect_t: ['1.375rem', { lineHeight: '140%' }],
        effect_b: ['0.875rem', { lineHeight: '140%' }],
      },
      backgroundImage: {
        'grid-pattern': "url('/images/bg.png')",
        404: "url('/images/404.png')",
      },
      boxShadow: {
        card: '2px 3px 0px 0px #000',
      },
      dropShadow: {
        black: '2px 3px 0px #000',
      },
      gridTemplateColumns: {
        3: 'repeat(3,1fr)',
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(100px)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 1s ease-in-out',
        'slide-down': 'slide-down 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
