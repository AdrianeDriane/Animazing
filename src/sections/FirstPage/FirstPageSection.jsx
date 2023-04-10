import React from 'react';
import Section from '../../templates/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { arrowDownVariants } from './utils/arrowDownVariants';

function FirstPageSection() {
  return (
    <Section color={'bg-white'}>
      <div className="flex flex-col gap-40 justify-center items-center">
        <h1 className="font-patrickHand text-8xl text-center">
          Use arrow keys to scroll!
        </h1>
        <motion.div
          variants={arrowDownVariants}
          initial="floating"
          animate="floating"
        >
          <FontAwesomeIcon icon={faArrowDown} size="6x" />
        </motion.div>
      </div>
    </Section>
  );
}

export default FirstPageSection;
