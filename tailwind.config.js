/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        royalPurple: '#7768AE',

        cardBgColor: '#F0ECEC',

        canvaBlue: '#05ABE0',
        canvaPurple: '#8200F4',

        macOSBg: '#0D1117',
        macOSDockItems: '#161B22',
        macOSClickedDockItem: '#238636',
        macOSIcons: '#2F81F7',
        macOSBorder: '#30363D',

        spotifyGreen: '#1DB954',
        spotifyLightGreen: '#1ED760',
        spotifyWhite: '#FFFFFF',
        spotifyBlack: '#121212',
        spotifyGray: '#535353',
        spotifyLightGray: '#B3B3B3',
      },
      fontFamily: {
        patrickHand: ['Patrick Hand', 'cursive'],
      },
      height: {
        cardHeight: '350px',
        dockHeight: '50px',
        mobileHeight: '800px',
      },
      width: {
        cardWidth: '224px',
        navigationMenuWidth: '500px',
        mobileWidth: '450px',
      },
      transformOrigin: {
        'top-center': 'top center',
      },
    },
  },
  plugins: [],
};
