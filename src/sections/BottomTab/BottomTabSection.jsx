import React, { useState } from 'react';
import Section from '../../templates/Section.jsx';
import Mobile from '../../templates/Mobile.jsx';
import BottomTabBar from './BottomTabComponents/BottomTabBar.jsx';

export default function BottomTabSection() {
  const [isTabSelected, setIsTabSelected] = useState(0);

  function backgroundColor(isTabSelected) {
    if (isTabSelected === 0) {
      return 'bg-easterPink';
    } else if (isTabSelected === 1) {
      return 'bg-easterGreen';
    } else if (isTabSelected === 2) {
      return 'bg-easterBlue';
    } else if (isTabSelected === 3) {
      return 'bg-easterPurple';
    }
  }

  return (
    <Section color="bg-easterWhite">
      <Mobile
        color={backgroundColor(isTabSelected)}
        align="items-end"
        justify="justify-center"
      >
        <BottomTabBar
          isTabSelected={isTabSelected}
          setIsTabSelected={setIsTabSelected}
        />
      </Mobile>
    </Section>
  );
}
