/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yinMnBlue: '#465775',
        creamBeige: '#FFFECB',
        timberWolfWhite: '#D7CDCC',
        fairyTalePink: '#EBC3DB',
        celestialBlue: '#4D9DE0',
        royalPurple: '#7768AE',
        alabaster: '#E0DFD5',
        cardBgColor: '#F0ECEC',
      },
      fontFamily: {
        patrickHand: ['Patrick Hand', 'cursive'],
      },
      height: {
        cardHeight: '350px',
      },
      width: {
        cardWidth: '224px',
      },
      transformOrigin: {
        'top-center': 'top center',
      },
    },
  },
  plugins: [],
};
