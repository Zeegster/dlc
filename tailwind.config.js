/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 

  module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{mont:'Montserrat'},
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'blue-50': '#E0F6FF',
      'blue-100': '#43688F',
      'blue-200': '#7FAEDF',
      'blue-300': '#68A6E7',
      'blue-400': '#43688F',
      'blue-500': '#4391E21C',
      'blue-600': '#71A0D180',
      'blue-700': '#4391E2',

      'green-100': '#00bf39',
      'red-100': '#f50505',

      'violent-100': '#D2BFE4',
      'white-blue-100': '#ABE5F2',
      'gray-200': '#43688F59',
      'red-200': '#FC285B59',
      
      'gray-100': '#D9D9D9'
    },
    extend: {
      
    },
  },
  plugins: [require("daisyui")],
})