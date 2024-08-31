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
      'gmd':'900px',
      'lg': '1024px',
      'mlg': '1125px',
      'm2lg':'1250px',
      'xl': '1300px',
      '2xl': '1536px',
      '3xl':'1900px',
      '4xl':'2500px',
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

