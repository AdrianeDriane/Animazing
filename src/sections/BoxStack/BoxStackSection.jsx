import React from 'react';
import Section from '../../templates/Section';
import Mobile from '../../templates/Mobile';
import BoxStack from './BoxStackComponents/BoxStack';

export default function BoxStackSection() {
  return (
    <Section color="bg-easterBlue">
      <Mobile
        color="bg-easterBlue"
        align="items-center"
        justify="justify-center"
      >
        <BoxStack />
      </Mobile>
    </Section>
  );
}
