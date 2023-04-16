import React from 'react';
import Section from '../../templates/Section';
import HamburgerMenuNav from './HamburgerMenu/HamburgerMenuNav';

function HamburgerMenuSection() {
  return (
    <Section
      color={'bg-gradient-to-r from-canvaBlue to-canvaPurple'}
      padding={'p-0'}
      align={'align-center'}
      justify={'justify-start'}
    >
      <HamburgerMenuNav />
    </Section>
  );
}

export default HamburgerMenuSection;
