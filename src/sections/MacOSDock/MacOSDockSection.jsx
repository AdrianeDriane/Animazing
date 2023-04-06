import React from 'react';
import Section from '../../templates/Section';
import PropTypes from 'prop-types';
import MotionSection from '../../components/MotionSection';
import InnerRefDiv from '../../components/InnerRefDiv';

function MacOSDockSection({ innerRef, isVisible }) {
  return (
    <MotionSection isVisible={isVisible}>
      <Section color={'bg-fairyTalePink'}>
        <InnerRefDiv innerRef={innerRef}></InnerRefDiv>
      </Section>
    </MotionSection>
  );
}

MacOSDockSection.propTypes = {
  innerRef: PropTypes.object,
  isVisible: PropTypes.bool,
};

export default MacOSDockSection;
