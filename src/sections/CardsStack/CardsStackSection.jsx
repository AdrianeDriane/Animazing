import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import Section from '../../templates/Section';

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;
const CARD_COLORS = [
  '#7FB285',
  '#A790A5',
  '#8DE4FF',
  '#E5E8B6',
  '#272635',
  '#EBBAB9',
];

function CardStackSection() {
  const [cards, setCards] = useState(CARD_COLORS);

  const moveToEnd = (from) => {
    const newCards = cards.slice();
    const item = newCards.splice(from, 1)[0];
    newCards.push(item);
    setCards(newCards);
  };

  return (
    <Section color="bg-celestialBlue">
      <div style={wrapperStyle}>
        <ul style={cardWrapStyle}>
          {cards.map((color, index) => {
            return (
              <motion.li
                key={color}
                style={{
                  ...cardStyle,
                  backgroundColor: color,
                  cursor: 'grab',
                }}
                animate={{
                  top: index * -CARD_OFFSET,
                  scale: 1 - index * SCALE_FACTOR,
                  zIndex: cards.length - index,
                  transition: { duration: 0.5 },
                }}
                drag={'y'}
                dragConstraints={{
                  top: 0,
                  bottom: 0,
                }}
                onDragEnd={() => moveToEnd(index)}
                className="shadow-2xl"
              />
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

const wrapperStyle = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const cardWrapStyle = {
  position: 'relative',
  width: '220px',
  height: '350px',
};

const cardStyle = {
  position: 'absolute',
  width: '220px',
  height: '350px',
  borderRadius: '8px',
  transformOrigin: 'top center',
  listStyle: 'none',
};

export default CardStackSection;
