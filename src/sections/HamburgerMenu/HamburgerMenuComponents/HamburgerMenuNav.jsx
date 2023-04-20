import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { hamburgerMenuNavVariants } from '../utils/hamburgerMenuNavVariants';
import { useDimensions } from '../utils/useDimensions';
import Navigation from './Navigation';
import HamburgerIcon from './HamburgerIcon';

export default function HamburgerMenuNav() {
  const [isOpen, toggleIsOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      className="relative top-0 left-0 bottom-0 w-4/5 h-full flex items-start justify-center pt-40"
      animate={isOpen ? 'open' : 'close'}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-full bg-white h-full rounded-2xl"
        variants={hamburgerMenuNavVariants}
        animate={isOpen ? 'open' : 'close'}
      ></motion.div>
      <Navigation />
      <HamburgerIcon
        isOpen={isOpen}
        toggle={() => {
          toggleIsOpen();
        }}
      />
    </motion.nav>
  );
}
