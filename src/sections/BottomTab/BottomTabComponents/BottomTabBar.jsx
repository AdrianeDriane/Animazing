import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import bell_curve from '../assets/bell_curve.png';
import TabIcons from '../../ElasticSwitchTab/TabIcons.jsx';

const tabs = [
  { name: 'Home', color: '#FCBAD3' },
  { name: 'Liked', color: '#AEDDCD' },
  { name: 'Library', color: '#A8D8EA' },
  { name: 'Playlist', color: '#AA96DA' },
];

export default function BottomTabBar({ isTabSelected, setIsTabSelected }) {
  const boundingRoundedBox = useMemo(
    () => (
      <img
        className="h-full w-full"
        src={bell_curve}
        alt=""
        draggable="false"
      />
    ),
    []
  );

  return (
    <div className="h-20 w-full bg-boundingRoundedBox flex items-center justify-evenly px-16">
      {tabs.map(({ name, color }, id) => (
        <motion.div
          className="h-8 relative flex flex-row items-center justify-center px-4 m-0 font-sans text-xl font-bold text-spotifyWhite rounded-3xl cursor-pointer"
          key={id}
          onTap={() => {
            setIsTabSelected(id);
          }}
        >
          <motion.span
            className="relative flex items-center justify-center z-10 h-12 w-12 rounded-full"
            transition={{
              type: 'spring',
              stiffness: 100,
            }}
            style={{
              background: isTabSelected !== id ? 'transparent' : color,
            }}
            animate={{
              y: isTabSelected === id ? -10 : 0,
            }}
          >
            {TabIcons(name, id, isTabSelected)}
          </motion.span>
          {id === isTabSelected && (
            <motion.div
              className="-top-24 h-40 w-40 absolute flex items-center justify-center"
              layoutId="isTabSelected"
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
            >
              {boundingRoundedBox}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
