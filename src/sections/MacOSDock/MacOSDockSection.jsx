import React from 'react';
import Section from '../../templates/Section';
import Dock from './DockComponents/Dock';

function MacOSDockSection() {
  return (
    <Section color={'bg-macOSBg'} align={'items-end'}>
      <Dock />
    </Section>
  );
}

export default MacOSDockSection;
