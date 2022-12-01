/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            spacing: {
                'h-header': 'var(--h-header)',
                'p-body': 'var(--p-body)',
            },
            maxWidth: {
                container: 'var(--max-container)',
            },
            colors: {
                primary: 'hsl(var(--clr-primary) / <alpha-value>)',
                'primary-dark': 'hsl(var(--clr-primary-dark) / <alpha-value>)',
                'primary-light': 'hsl(var(--clr-primary-light) / <alpha-value>)',
                text: 'hsl(var(--clr-text) / <alpha-value>)',
                'text-dark': 'hsl(var(--clr-text-dark) / <alpha-value>)',
                bg: 'hsl(var(--clr-bg) / <alpha-value>)',
                white: 'hsl(var(--clr-white) / <alpha-value>)',
                transparent: 'transparent',
                current: 'currentColor',
            },
            zIndex: {},
            boxShadow: {
                test: '0 0 1px 1px red',
            },
        },
        screens: {
            xxl: { min: '1400px' },
            xl: { max: '1399px' },
            lg: { max: '1199px' },
            md: { max: '991px' },
            sm: { max: '767px' },
            xs: { max: '575px' },
            'can-hover': { raw: '(hover: hover)' },
            'cannot-hover': { raw: '(hover: none)' },
        },
    },
    plugins: [],
};
