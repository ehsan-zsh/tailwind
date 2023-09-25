/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      container:{
        'padding' : '2px'
      },
      extend: {
        colors : {
            'black-700':'#373737',
            'black-300' :'#505050',
            'green' : '#46a634',
            'green-light' : '#5caf21',
            'gray-icon' :'#575757'
        },
      },
    },
    plugins: [],
  }