import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import Section from '../../templates/Section.jsx';

import ace from './assets/card_images/ace.png';
import eight_clubs from './assets/card_images/eight_clubs.png';
import eight_spades from './assets/card_images/eight_spades.png';
import king_diamonds from './assets/card_images/king_diamonds.png';
import queen_diamonds from './assets/card_images/queen_diamonds.png';
import unflipped_card from './assets/card_images/unflipped_card.png';

const CARD_OFFSET = 10;
const SCALE_FACTOR = 0.06;
const CARD_IMAGES = [
  ace,
  king_diamonds,
  queen_diamonds,
  eight_clubs,
  eight_spades,
  unflipped_card,
];

function CardsStackSection() {
  const [cards, setCards] = useState(CARD_IMAGES);

  const moveToEnd = (from) => {
    const newCards = cards.slice();
    const item = newCards.splice(from, 1)[0];
    newCards.push(item);
    setCards(newCards);
  };

  return (
    <Section color="bg-[#db6044]">
      <div className="relative flex items-center justify-center h-screen">
        <ul className="relative w-cardWidth h-cardHeight">
          {cards.map((image, index) => {
            return (
              <motion.li
                key={image}
                style={{
                  backgroundImage: `url(${image})`,
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
                className="absolute w-cardWidth h-cardHeight rounded-lg origin-top-center 
                list-none bg-no-repeat bg-center bg-cardBgColor 
                cursor-grab shadow-2xl shadow-slate-80000"
              />
            );
          })}
        </ul>
      </div>
    </Section>
  );
}

export default CardsStackSection;
