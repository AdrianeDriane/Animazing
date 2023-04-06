import { motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';

import { sectionVariants } from '../utils/sectionVariants';

function MotionSection({ children, isVisible }) {
  return (
    <motion.div
      variants={sectionVariants(isVisible)}
      animate="animate"
      initial="initial"
      exit="initial"
    >
      {children}
    </motion.div>
  );
}

MotionSection.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool,
};

export default MotionSection;
