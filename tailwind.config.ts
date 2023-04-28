/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './composables/**/*.{js,ts}',
        './plugins/**/*.{js,ts}',
        './app.{js,ts,vue}'
    ],
    important: true,
    // safelist: ["dark"],
    // darkMode: "class",
    theme: {
        screens: {
            'xs': '475px',
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                hd: {
                    Text: '#495277',
                    hoverText: '#A9B598',
                    Green: '#98AE87',
                    hoverGreen: '#AABE99',
                    clickGreen: '#709657',
                    Yellow: '#F1E390',
                    Bg: '#F4F4F4'
                }
            },
            animation: {
                move: 'svgMove 5s ',
            },
            keyframes: {
                svgMove: {
                    '0%': { strokeDasharray: '0, 600px' },
                    '100%': { strokeDasharray: '600px, 0' },
                }
            },
        }
    },
    plugins: []
}