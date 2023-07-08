import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function CloudyButtonSpan({ n, isClicked }) {
  return (
    <motion.span
      className="absolute w-1/4 h-full bg-[#275efe] rounded-cloudyButtonSpanRound -z-10"
      style={{
        left: `${(n - 1) * 25}%`,
      }}
      initial={{
        y: '150%',
        scale: 1,
      }}
      animate={{
        y: isClicked ? 0 : '150%',
        scale: isClicked ? 2 : 1,
        transition: { duration: 0.5, delay: (n - 1) * 0.1 },
      }}
    />
  );
}

CloudyButtonSpan.propTypes = {
  n: PropTypes.number.isRequired,
  isClicked: PropTypes.bool.isRequired,
};
