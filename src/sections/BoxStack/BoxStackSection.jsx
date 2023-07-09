import React from 'react';
import Section from '../../templates/Section.jsx';
import Mobile from '../../templates/Mobile.jsx';
import BoxStack from './BoxStackComponents/BoxStack.jsx';

export default function BoxStackSection() {
  return (
    <Section color="bg-[#ff7a00]">
      <Mobile
        color="bg-[#ff7a00]"
        align="items-center"
        justify="justify-center"
      >
        <BoxStack />
      </Mobile>
    </Section>
  );
}
