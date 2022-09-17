/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: true,
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      backgroundImage:{
        'code': "url('../img/coding.jpg')",
        'cpp': "url('../img/cpp.png')",
        'js': "url('../img/js.png')",
        'html': "url('../img/HTML.png')",
        'node': "url('../img/node.png')",
        'python': "url('../img/Python.png')",
        'laravel': "url('../img/laravel.png')",
        'rn': "url('../img/reactNative.png')",
        'tw': "url('../img/Tailwind.png')",
        'db': "url('../img/db.png')",
        'pokeball': "url('../img/pokeball.png')",

      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary' : '#0065fb',
        'secondary' : '#cc00a6',
        'terciary' : '#61AEC9'
      }),
      textColor:{
        'primary' : '#0065fb',
        'secundary' : '#cc00a6',
        'terciary' : '#61AEC9'
      },
      fontFamily:{
        Montserrat: ["Monserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}
