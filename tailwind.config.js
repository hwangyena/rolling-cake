import { color } from './src/lib/color';

/** @type {import('tailwindcss').Config} */
export const enabled = true;
export const content = ['./src/**/*.{ts,tsx}'];
export const theme = {
  extend: {
    colors: {
      primary: {
        blue: {
          10: color.primary.blue[10],
          20: color.primary.blue[20],
          30: color.primary.blue[30],
          40: color.primary.blue[40],
          50: color.primary.blue[50],
          60: color.primary.blue[60],
          70: color.primary.blue[70],
          80: color.primary.blue[80],
          90: color.primary.blue[90],
        },
        green: {
          10: color.primary.green[10],
          20: color.primary.green[20],
          30: color.primary.green[30],
          40: color.primary.green[40],
          50: color.primary.green[50],
          60: color.primary.green[60],
          70: color.primary.green[70],
          80: color.primary.green[80],
          90: color.primary.green[90],
        },
      },
      secondary: {
        pink: {
          10: color.secondary.pink[10],
          20: color.secondary.pink[20],
          30: color.secondary.pink[30],
          40: color.secondary.pink[40],
          50: color.secondary.pink[50],
          60: color.secondary.pink[60],
          70: color.secondary.pink[70],
          80: color.secondary.pink[80],
          90: color.secondary.pink[90],
        },
        yellow: {
          10: color.secondary.yellow[10],
          20: color.secondary.yellow[20],
          30: color.secondary.yellow[30],
          40: color.secondary.yellow[40],
          50: color.secondary.yellow[50],
          60: color.secondary.yellow[60],
          70: color.secondary.yellow[70],
          80: color.secondary.yellow[80],
          90: color.secondary.yellow[90],
        },
        mint: {
          10: color.secondary.mint[10],
          20: color.secondary.mint[20],
          30: color.secondary.mint[30],
          40: color.secondary.mint[40],
          50: color.secondary.mint[50],
          60: color.secondary.mint[60],
          70: color.secondary.mint[70],
          80: color.secondary.mint[80],
          90: color.secondary.mint[90],
        },
      },
      grayscale: {
        gray1: color.grayscale.gray1,
        gray2: color.grayscale.gray2,
        gray3: color.grayscale.gray3,
        gray4: color.grayscale.gray4,
        gray5: color.grayscale.gray5,
        gray6: color.grayscale.gray6,
        gray7: color.grayscale.gray7,
        gray8: color.grayscale.gray8,
        gray9: color.grayscale.gray9,
      },
      bg: {
        white: color.bg.white,
        black: color.bg.black,
        error: color.bg.error,
      },

      /// lagacy
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
      b1: ['1.05rem', { lineHeight: '140%' }],
      b2: ['1rem', { lineHeight: '140%' }],
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
};
export const plugins = [];
