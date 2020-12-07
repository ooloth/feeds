// Must remain a CommonJS file (not ESM or TS)

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        ],
      },
      height: {
        '1em': '1em',
      },
      lineHeight: {
        0: '0',
      },
      width: {
        '1em': '1em',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
}
