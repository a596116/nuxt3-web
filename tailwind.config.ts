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
                    Text: '#3C486B',
                    hoverText: '#A9B598',
                    Green: '#C9DBB2',
                    hoverGreen: '#BFCCB5',
                    clickGreen: '#AAC8A7',
                    Yellow: '#FFEEB3',
                    Bg: '#F4F5FE'
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