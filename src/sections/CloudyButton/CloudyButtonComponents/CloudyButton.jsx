import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CloudyButtonSpan from './CloudyButtonSpan';
import { motion } from 'framer-motion';

export default function CloudyButton({ text }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.li
      className="text-[#ffffff] text-base border-4 
    rounded-lg border-solid border-[#275efe] w-48 h-12 uppercase font-bold font-sans tracking-widest 
    text-center leading-10 relative 
    overflow-hidden z-10 m-4 hover:cursor-pointer bg-[#becdfa]"
      onClick={() => setIsClicked((prevVal) => !prevVal)}
      animate={{
        color: isClicked ? '#ffffff' : '#275efe',
      }}
    >
      {text}
      {[...Array(4)].map((_, i) => (
        <CloudyButtonSpan key={i} n={i + 1} isClicked={isClicked} />
      ))}
    </motion.li>
  );
}

CloudyButton.propTypes = {
  text: PropTypes.string.isRequired,
};
