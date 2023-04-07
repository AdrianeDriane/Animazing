import React from 'react';
import Section from '../../templates/Section';
import PropTypes from 'prop-types';
import MotionSection from '../../components/MotionSection';
import InnerRefDiv from '../../components/InnerRefDiv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { arrowDownVariants } from './utils/arrowDownVariants';

function FirstPageSection({ innerRef, isVisible }) {
  return (
    <MotionSection isVisible={isVisible}>
      <Section color={'bg-timberWolfWhite'}>
        <InnerRefDiv innerRef={innerRef}></InnerRefDiv>
        <div className="flex flex-col gap-96 justify-center items-center">
          <h1 className="font-patrickHand text-9xl">
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
    </MotionSection>
  );
}

FirstPageSection.propTypes = {
  innerRef: PropTypes.object,
  isVisible: PropTypes.bool,
};

export default FirstPageSection;
