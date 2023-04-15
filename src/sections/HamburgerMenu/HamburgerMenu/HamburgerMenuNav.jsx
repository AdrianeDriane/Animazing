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

  console.log(isOpen);

  return (
    <motion.nav
      className="relative top-0 left-0 bottom-0 w-full h-full flex items-center justify-center"
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="absolute top-0 left-0 bottom-0 w-full bg-white bg-opacity-50 h-full"
        variants={hamburgerMenuNavVariants}
        animate={isOpen ? 'open' : 'hidden'}
      ></motion.div>
      <Navigation />
      <HamburgerIcon
        toggle={() => {
          console.log('toggleIsOpen is called');
          toggleIsOpen();
        }}
      />
    </motion.nav>
  );
}