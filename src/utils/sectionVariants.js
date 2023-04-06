export const sectionVariants = (isVisible) => ({
  initial: {
    scale: 0.1,
    x: '-20vw',
  },
  animate: {
    scale: isVisible ? 0.9 : 0.1,
    x: isVisible ? 0 : '-20vw',
    transition: {
      duration: 1,
      scale: {
        type: 'spring',
        stiffness: '50',
      },
    },
  },
});
