import React from 'react';
import Section from '../../templates/Section.jsx';
import Dock from './DockComponents/Dock.jsx';

function MacOSDockSection() {
  return (
    <Section color={'bg-macOSBg'} align={'items-end'}>
      <Dock />
    </Section>
  );
}

export default MacOSDockSection;
