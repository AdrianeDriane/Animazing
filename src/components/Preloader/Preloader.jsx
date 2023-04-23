import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [hackedTextEffect, setHackedTextEffect] = useState('ANIMAZING');

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  //   useEffect(() => {
  let iterations = 0;

  const interval = setInterval(() => {
    setHackedTextEffect(
      hackedTextEffect
        .split('')
        .map(() => letters[Math.floor(Math.random() * 26)])
        .join('')
    );

    if (iterations >= 9) clearInterval(interval);

    iterations += 1;
  }, 30);
  //   }  );

  return (
    <motion.div
      className="h-screen w-screen z-20 absolute bg-spotifyWhite"
      initial={{ x: 0, borderRadius: '0%' }}
      animate={{
        x: viewportWidth,
        borderRadius: '100%',
        transition: {
          delay: 4.5,
          duration: 1,
          type: 'spring',
        },
      }}
    >
      <motion.div
        className="h-full w-full bg-spotifyBlack flex items-center justify-center"
        initial={{ y: 0, borderRadius: '0%' }}
        animate={{
          y: viewportHeight,
          borderRadius: '100%',
          transition: {
            delay: 4,
            duration: 1,
            type: 'spring',
          },
        }}
      >
        <motion.h1 className="text-spotifyWhite text-8xl font-spaceMono">
          {hackedTextEffect}
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
