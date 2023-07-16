import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import useSound from 'use-sound';

import bleepSound from '../../../assets/bleepSound.mp3';
import { hamburgerMenuNavVariants } from '../utils/hamburgerMenuNavVariants.js';
import { useDimensions } from '../utils/useDimensions.js';
import Navigation from './Navigation.jsx';
import HamburgerIcon from './HamburgerIcon.jsx';
import { useSoundContext } from '../../../components/SoundToggle/soundContext.js';

export default function HamburgerMenuNav() {
  const isSoundMuted = useSoundContext();
  const [play] = useSound(bleepSound, { volume: isSoundMuted ? 0 : 1 });

  const [isOpen, toggleIsOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className="relative top-0 left-0 bottom-0 w-4/5 h-full flex items-start justify-center pt-20"
      animate={isOpen ? 'open' : 'close'}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-full bg-white h-full rounded-r-2xl"
        variants={hamburgerMenuNavVariants}
        animate={isOpen ? 'open' : 'close'}
      />
      <Navigation />
      <HamburgerIcon
        isOpen={isOpen}
        toggle={() => {
          play();
          toggleIsOpen();
        }}
      />
    </motion.nav>
  );
}
