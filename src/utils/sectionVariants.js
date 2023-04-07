export const sectionVariants = (isVisible) => ({
  initial: {
    scale: 0.5,
  },
  animate: {
    scale: isVisible ? 0.9 : 0.5,
    transition: {
      duration: 1,
      ease: 'easeInOut',
      scale: {
        type: 'spring',
        stiffness: '50',
      },
    },
  },
});
