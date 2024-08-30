/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs':'450px',
      'sm': '600px',
      'md': '768px',
      'lg': '1024px',
      'mlg': '1125px',
      'xl': '1300px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

