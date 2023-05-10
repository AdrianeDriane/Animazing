import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CloudyButtonSpan from './CloudyButtonSpan';
import { motion } from 'framer-motion';

export default function CloudyButton({ text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      className="text-cloudyButtonGoldenRod text-base border-4 
    rounded-lg border-solid border-cloudyButtonGoldenRod w-48 h-12 uppercase font-bold font-sans tracking-widest 
    text-center leading-10 relative 
    overflow-hidden z-10 m-4"
      initial={{
        color: '#DAA520',
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      animate={{
        color: isHovered ? '#000000' : '#DAA520',
      }}
    >
      {text}
      {[...Array(4)].map((_, i) => (
        <CloudyButtonSpan key={i} n={i + 1} isHovered={isHovered} />
      ))}
    </motion.li>
  );
}

CloudyButton.propTypes = {
  text: PropTypes.string.isRequired,
};
