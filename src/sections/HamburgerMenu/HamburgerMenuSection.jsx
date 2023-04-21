import React from 'react';
import Section from '../../templates/Section.jsx';
import HamburgerMenuNav from './HamburgerMenuComponents/HamburgerMenuNav.jsx';
import Mobile from '../../templates/Mobile.jsx';

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
