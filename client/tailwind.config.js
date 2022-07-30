/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          450: '#A4742D',
        },
      },
    },
    plugins: [],
  },
};
