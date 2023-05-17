import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function Blob({ height, width, left, top, stiffness }) {
  return (
    <motion.div
      className={`bg-lightCoral rounded-full inline-block 
      absolute ${height} ${width} shadow-blobBoxShadow opacity-60 z-10`}
      layout
      intial={{
        left: 0,
        top: 0,
      }}
      animate={{
        left: left + 'px',
        top: top + 'px',
        transition: {
          type: 'spring',
          stiffness: stiffness,
          damping: 8,
        },
      }}
    ></motion.div>
  );
}

Blob.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  left: PropTypes.number,
  top: PropTypes.number,
  stiffness: PropTypes.number,
};
