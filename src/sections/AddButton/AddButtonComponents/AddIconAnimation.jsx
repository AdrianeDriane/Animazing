import React from 'react';
import { motion } from 'framer-motion';
import { HiPlus } from 'react-icons/hi';
import PropTypes from 'prop-types';

export default function AddIconAnimation({ isButtonOpened }) {
  return (
    <motion.div
      className="flex items-center justify-center h-full w-full rounded-full bg-transparent"
      initial={{
        scale: 1,
        rotate: 0,
      }}
      animate={{
        rotate: isButtonOpened ? 135 : 0,
        scale: [0.8, 1.2, 1],
        transition: {
          duration: 1,
          type: 'spring',
          bounce: 0.5,
          damping: 10,
        },
      }}
    >
      <HiPlus color="#2E1E62" fontSize={40} />
    </motion.div>
  );
}

AddIconAnimation.propTypes = {
  isButtonOpened: PropTypes.bool.isRequired,
};
