import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function CloudyButtonSpan({ n, isHovered }) {
  return (
    <motion.span
      className="absolute w-1/4 h-full bg-[#453c17] rounded-cloudyButtonSpanRound -z-10"
      style={{
        left: `${(n - 1) * 25}%`,
      }}
      initial={{
        y: '150%',
        scale: 1,
      }}
      animate={{
        y: isHovered ? 0 : '150%',
        scale: isHovered ? 2 : 1,
        transition: { duration: 0.5, delay: (n - 1) * 0.1 },
      }}
    />
  );
}

CloudyButtonSpan.propTypes = {
  n: PropTypes.number.isRequired,
  isHovered: PropTypes.bool.isRequired,
};
