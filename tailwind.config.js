/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#fa7807',
        blue: {
          500: '#263238',
          900: '#263238',
        },
      },
    },
  },
  plugins: [],
}
