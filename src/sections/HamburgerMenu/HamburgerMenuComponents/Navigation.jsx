import React from 'react';
import { navigationVariants } from '../utils/navigationVariants.js';
import { motion } from 'framer-motion';
import NavigationItem from './NavigationItem.jsx';

export default function Navigation() {
  return (
    <motion.ul
      variants={navigationVariants}
      className="m-0 flex flex-col items-start justify-center h-96 w-96 z-10"
    >
      {navItems.map((str) => (
        <NavigationItem key={str} text={str} />
      ))}
    </motion.ul>
  );
}

const navItems = ['Home', 'Inbox', 'Contact', 'About'];
