import React, { useState } from 'react';
import Section from '../../templates/Section';
import WhiteCard from './WhiteCardsComponents/WhiteCard';

export default function WhiteCardsSection() {
  const [isSpread, setIsSpread] = useState(false);

  function toggleIsSpread() {
    setIsSpread((prevValue) => !prevValue);
  }

  return (
    <Section color="bg-white">
      <div
        className="h-96 w-96 relative flex items-center justify-center"
        style={{
          transform: 'perspective(900px) rotateX(45deg) translateZ(0px)',
        }}
        onClick={toggleIsSpread}
      >
        {[-35, -19, 5, 29, 45].map((value, index) => (
          <WhiteCard
            key={index}
            value={value}
            isSpread={isSpread}
            setIsSpread={setIsSpread}
          />
        ))}
      </div>
    </Section>
  );
}
