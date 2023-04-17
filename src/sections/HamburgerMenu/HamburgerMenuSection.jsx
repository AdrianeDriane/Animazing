import React from 'react';
import Section from '../../templates/Section';
import HamburgerMenuNav from './HamburgerMenu/HamburgerMenuNav';
import Mobile from '../../templates/Mobile';

function HamburgerMenuSection() {
  return (
    <Section
      color={'bg-gradient-to-r from-canvaBlue to-canvaPurple'}
      padding={'p-0'}
    >
      <Mobile>
        <HamburgerMenuNav />
      </Mobile>
    </Section>
  );
}

export default HamburgerMenuSection;
