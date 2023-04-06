import React from 'react';
import Section from '../../templates/Section';
import PropTypes from 'prop-types';
import MotionSection from '../../components/MotionSection';
import InnerRefDiv from '../../components/InnerRefDiv';

function HamburgerMenuSection({ innerRef, isVisible }) {
  return (
    <MotionSection isVisible={isVisible}>
      <Section color={'bg-royalPurple'}>
        <InnerRefDiv innerRef={innerRef}></InnerRefDiv>
      </Section>
    </MotionSection>
  );
}

HamburgerMenuSection.propTypes = {
  innerRef: PropTypes.object,
  isVisible: PropTypes.bool,
};

export default HamburgerMenuSection;
