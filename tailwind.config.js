/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Exo 2"'],
      },
      colors: {
        gold: '#FFD700',
        liver: '#534B4F',
        lower: 'rgba(83,75,79,0.38)',
        // golder: '#BFB750',
        golder: '#454545',
        goldlight: 'rgba(234,225,111,0.26)',
        darker: '#333333',
        lighter: 'rgba(243,236,151,0.64)',
        primary1:'#454545',
        lowGold:'#f5d455',
        highGold:'#daba4a',

      },
      // Add your custom gradients here
      gradients: {
        'gold-liver': ['45deg', '#FFD700', '#534B4F'],
      },
    },
  },
  variants: {},
  plugins: [
    // require('flowbite/plugin')
  ],
}

