import React from 'react';
import { navigationVariants } from '../utils/navigationVariants';
import { motion } from 'framer-motion';
import NavigationItem from './NavigationItem';

export default function Navigation() {
  return (
    <motion.ul
      variants={navigationVariants}
      className="m-0 p-6 flex flex-col items-center justify-center h-96 w-96 z-10"
    >
      {navItems.map((str) => (
        <NavigationItem key={str} text={str} />
      ))}
    </motion.ul>
  );
}

const navItems = ['Home', 'Works', 'About', 'Contact Us'];
