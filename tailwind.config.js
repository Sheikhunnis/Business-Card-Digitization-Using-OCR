/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            keyframes: {
                'laser-scan': {
                    '0%, 100%': { top: '0%' },
                    '50%': { top: '99%' },
                }
            },
            animation: {
                'laser-scan': 'laser-scan 2.5s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
