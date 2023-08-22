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
        h1: ['24px', { lineHeight: '140%' }],
        h2: ['22px', { lineHeight: '140%' }],
        h3: ['20px', { lineHeight: '150%' }],
        h4: ['18px', { lineHeight: '150%' }],
        h5: ['24px', { lineHeight: '140%' }],
        t1: ['16px', { lineHeight: '140%' }],
        t2: ['16px', { lineHeight: '150%' }],
        b1: ['16px', { lineHeight: '140%' }],
        b2: ['14px', { lineHeight: '140%' }],
        b3: ['12px', { lineHeight: '140%' }],
        btn: ['16px', { lineHeight: '120%' }],
        cap: ['10px', { lineHeight: '120%' }],
        effect_t: ['22px', { lineHeight: '140%' }],
        effect_b: ['14px', { lineHeight: '140%' }],
      },
      backgroundImage: {
        'grid-pattern': "url('/images/bg.png')",
      },
      backgroundColor: {},
      gridTemplateColumns: {
        3: 'repeat(3,1fr)',
      },
    },
  },
  plugins: [],
};
