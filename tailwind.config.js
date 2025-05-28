const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        expand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        fadeFromBottom: {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        expand: 'expand 0.4s ease-out forwards',
        fadeFromBottom: 'fadeFromBottom 0.6s ease-out',
      },
    },
  },
  plugins: [],
};
