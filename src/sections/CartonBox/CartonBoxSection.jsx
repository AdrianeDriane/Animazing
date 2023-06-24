import React from 'react';
import Section from '../../templates/Section.jsx';
import CartonBoxContainer from './CartonBoxComponents/CartonBoxContainer.jsx';
import CartonBox from './CartonBoxComponents/CartonBox.jsx';

export default function CartonBoxSection() {
  return (
    <Section color="bg-royalPurple">
      <CartonBoxContainer>
        <CartonBox />
      </CartonBoxContainer>
    </Section>
  );
}
