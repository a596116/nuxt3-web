/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}',
  ],
  important: true,
  // safelist: ["dark"],
  // darkMode: "class",
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    fontSize: {
      ...defaultTheme.fontSize,
      h1: [
        '2.5rem',
        {
          fontWeight: '500',
          lineHeight: '3rem',
        },
      ],
      h2: [
        '2rem',
        {
          fontWeight: '500',
          lineHeight: '2.375rem',
        },
      ],
      h3: [
        '1.75rem',
        {
          fontWeight: '500',
          lineHeight: '2rem',
        },
      ],
      h4: [
        '1.5rem',
        {
          fontWeight: '500',
          lineHeight: '1.75rem',
        },
      ],
      h5: [
        '1.25rem',
        {
          fontWeight: '500',
          lineHeight: '1.5rem',
        },
      ],
      h6: [
        '1rem',
        {
          fontWeight: '500',
          lineHeight: '1.25rem',
        },
      ],
      body: [
        '1rem',
        {
          fontWeight: '400',
          lineHeight: '1.5rem',
        },
      ],
      small: [
        '0.875rem',
        {
          fontWeight: '400',
          lineHeight: '1.25rem',
        },
      ],
      tiny: [
        '0.75rem',
        {
          fontWeight: '400',
          lineHeight: '1.25rem',
        },
      ],
    },
    extend: {
      colors: {
        hd: {
          primary: 'var(--hd-primary)',
          success: 'var(--hd-success)',
          secondary: 'var(--hd-secondary)',
          hover: 'var(--hd-hover)',
          click: 'var(--hd-click)',
          bg: 'var(--hd-bg)',
          black: 'var(--hd-black)',
          'black-50': 'var(--hd-black-50)',
          white: 'var(--hd-white)',
          'white-50': 'var(--hd-white-50)',
          disable: 'var(--hd-disable)',
          danger: 'var(--hd-danger)',
          warning: 'var(--hd-warning)',
          info: 'var(--hd-info)',
        },
      },
      animation: {
        move: 'svgMove 5s ',
      },
      keyframes: {
        svgMove: {
          '0%': { strokeDasharray: '0, 600px' },
          '100%': { strokeDasharray: '600px, 0' },
        },
      },
    },
  },
  plugins: [],
}
