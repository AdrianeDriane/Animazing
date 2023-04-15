export const hamburgerMenuNavVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 20px 20px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  close: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  hidden: {
    opacity: 0,
  },
};
