import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

import clickSound from '../../assets/clickSound.mp3';
import Section from '../../templates/Section.jsx';
import TabIcons from './TabIcons.jsx';

import { useSoundContext } from '../../components/SoundToggle/soundContext.js';

const tabs = [
  { name: 'Home' },
  { name: 'Liked' },
  { name: 'Library' },
  { name: 'Playlist' },
];

export default function ElasticSwitchTabSection() {
  const isSoundMuted = useSoundContext();
  const [play] = useSound(clickSound, { volume: isSoundMuted ? 0 : 1 });

  const [isSelected, setIsSelected] = useState(0);

  return (
    <Section color={'bg-spotifyGreen'}>
      <div className="relative rounded-3xl bg-spotifyBlack p-2 flex items-start justify-start shadow-md">
        {tabs.map(({ name }, id) => (
          <motion.div
            className="h-8 relative flex flex-row items-center justify-center px-4 m-0 font-sans text-xl font-bold text-spotifyWhite rounded-3xl cursor-pointer"
            key={id}
            onTap={() => {
              play();
              setIsSelected(id);
            }}
          >
            <div className="pr-2 z-10">{TabIcons(name, id, isSelected)}</div>
            <span className="relative z-10">{name}</span>
            {id === isSelected && (
              <motion.div
                className="w-full h-full absolute rounded-2xl top-0 left-0 bg-spotifyLightGreen"
                layoutId="isSelected"
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 20,
                }}
              ></motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
