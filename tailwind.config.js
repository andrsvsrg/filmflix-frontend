/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {  // меняем
    screens: {
      'xl': '1280px',
      'pc-big': {'max': '1500px'} ,
      'pc-sm':{'max': '1280px'} ,
      'tab-big' : {'max': '991px'},
      'tab-sm': {'max': '767px'},
      'pc-ph':  {'max': '576px'},
    },
    container: {
      center: true
    },

    extend: {
      colors : {
        'nav-active': '#E8E8E8',
        'nav-noactive': '#A5A5A5',
        'btn-blue':  '#5458F7',
        'bg-login': '#262729',
        'bg-mb-menu': '#181c1f',
        'under-menu': 'rgba(0,0,0,.6)'
      },


    },  // дополняе свойства
  },
  plugins: [],
}
