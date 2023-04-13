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

        macOSBg: '#0D1117',
        macOSDockItems: '#161B22',
        macOSClickedDockItem: '#238636',
        macOSIcons: '#2F81F7',
        macOSBorder: '#30363D',
      },
      fontFamily: {
        patrickHand: ['Patrick Hand', 'cursive'],
      },
      height: {
        cardHeight: '350px',
        dockHeight: '50px',
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
