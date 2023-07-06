import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CloudyButtonSpan from './CloudyButtonSpan';
import { motion } from 'framer-motion';

export default function CloudyButton({ text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      className="text-[#453c17] text-base border-4 
    rounded-lg border-solid border-[#453c17] w-48 h-12 uppercase font-bold font-sans tracking-widest 
    text-center leading-10 relative 
    overflow-hidden z-10 m-4 hover:cursor-pointer"
      initial={{
        color: '#DAA520',
      }}
      onClick={() => setIsHovered((prevVal) => !prevVal)}
      animate={{
        color: isHovered ? '#ffd11a' : '#453c17',
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
