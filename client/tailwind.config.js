/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          450: '#192824',
          500: '#22d2a0',
        },
      },
      height: {
        tall: '550px',
      },
    },
    plugins: [],
  },
};
