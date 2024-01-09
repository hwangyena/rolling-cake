/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: true,
  content: ['./src/**/*.{ts,tsx}'],
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
          400: '#ff54ed',
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
        error: '#f93b3b',
        yellow: '#fae64d',
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
      backgroundColor: {},
      boxShadow: {
        card: '2px 3px 0px 0px #000',
        button: '1px 1px 0px 0px #000',
        popup: '0px 4px 15px 0px rgba(0, 0, 0, 0.25)',
      },
      dropShadow: {
        black_light: '1px 1px 0px #000',
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
        'cursor-bounce': {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 0.3, 1)',
          },
          '50%': {
            transform: 'translateY(20%)',
          },
        },
        'bg-opacity': {
          '0%': { opacity: 0 },
        },
        waviy: {
          '0%, 40%, 100%': {
            transform: 'translateY(0)',
          },
          '20%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      animation: {
        'slide-up': 'slide-up 1s ease-in-out',
        'slide-down': 'slide-down 1s ease-in-out',
        'cursor-bounce': 'cursor-bounce 1s ease-out infinite',
        'bg-opacity': 'bg-opacity 0.3s ease',
        waviy: 'waviy 2s infinite',
      },
    },
  },
  plugins: [],
};
