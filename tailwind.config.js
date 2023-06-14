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

        easterBlue: '#A8D8EA',
        easterPurple: '#AA96DA',
        easterPink: '#FCBAD3',
        easterYellow: '#FFFFD2',
        easterGreen: '#AEDDCD',
        easterWhite: '#F9F9F9',

        boundingRoundedBox: '#202E4E',

        veryDarkPurple: '#0C0B14',
        gradientDarkPurple: '#2E1E62',
        gradientLightPurple: '#413372',
        plusIconGradientDarkPurple: '#6642DB',
        plusIconGradientLightPurple: '#907ADD',
        staggeringIconsBackgroundGray: '#262333',
        staggeringIconsWhite: '#D4D3D6',

        cloudyButtonGoldenRod: '#DAA520',

        lightCoral: '#F08080',
      },
      fontFamily: {
        spaceMono: ['Space Mono', 'monospace'],
      },
      height: {
        cardHeight: '350px',
        dockHeight: '50px',
        mobileHeight: '650px',
        discComponentHeight: '500px',
        discHeight: '360px',
      },
      width: {
        cardWidth: '224px',
        navigationMenuWidth: '500px',
        mobileWidth: '385px',
        discComponentWidth: '500px',
        discWidth: '360px',
      },
      transformOrigin: {
        'top-center': 'top center',
      },
      borderWidth: {
        mobileBorderWidth: '10px',
      },
      borderRadius: {
        mobileRound: '50px',
        cloudyButtonSpanRound: '50%',
        playButtonRound: '27px',
      },
      boxShadow: {
        blobBoxShadow: '10px 10px 5px 0px rgba(0, 0, 0, 0.75)',
        playButtonShadow:
          '0px 1px 2px rgba(255, 255, 255, 1), 0px 2px 1px rgba(0, 0, 0, 0.15)',
        whiteCardShadow: '0px 5px 13px 5px',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
