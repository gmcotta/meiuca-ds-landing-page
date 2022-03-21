module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      md: '768px',
      lg: '1366px',
      xl: '1440px'
    },
    extend: {
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px'
      }
    },
  },
  plugins: [],
}
