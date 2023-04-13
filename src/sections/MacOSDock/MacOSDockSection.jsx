import React from 'react';
import Section from '../../templates/Section';
import Dock from './dock/Dock';

function MacOSDockSection() {
  return (
    <Section color={'bg-macOSBg'}>
      <Dock />
    </Section>
  );
}

export default MacOSDockSection;
