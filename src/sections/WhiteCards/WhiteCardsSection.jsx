import React from 'react';
import Section from '../../templates/Section';
import WhiteCard from './WhiteCardsComponents/WhiteCard';

export default function WhiteCardsSection() {
  return (
    <Section color="bg-white">
      <div className="h-96 w-96 relative flex items-center justify-center">
        {[-40, -24, 0, -24, -40].map((id) => (
          <WhiteCard key={id} />
        ))}
      </div>
    </Section>
  );
}
