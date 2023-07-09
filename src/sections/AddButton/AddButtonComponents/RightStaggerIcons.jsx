import React from 'react';
import useSound from 'use-sound';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { GiAmericanFootballBall } from 'react-icons/gi';
import { GiAngularSpider } from 'react-icons/gi';
import { GiBandit } from 'react-icons/gi';
import { GiBatteredAxe } from 'react-icons/gi';

import bumpSound from '../../../assets/bumpSound.mp3';

export default function RightStaggerIcons({ isButtonOpened }) {
  const [play] = useSound(bumpSound);

  const rightIconsVariant = {
    initial: {
      x: -30,
      scale: 0,
      rotate: -45,
      y: 0,
    },
  };

  const rightIcons = [
    <motion.button
      key="1"
      className="h-16 w-16 rounded-full bg-staggeringIconsBackgroundGray shadow-sm shadow-slate-800 flex justify-center items-center"
      variants={rightIconsVariant}
      initial="initial"
      animate={{
        x: isButtonOpened ? 0 : -30,
        scale: isButtonOpened ? 1 : 0,
        rotate: isButtonOpened ? 0 : -45,
        transition: { delay: 0.2, type: 'spring', damping: 12 },
      }}
      whileTap={{ y: -10 }}
      onClick={play}
    >
      <GiAmericanFootballBall fontSize={35} color="#D4D3D6" />
    </motion.button>,
    <motion.button
      key="2"
      className="h-14 w-14 rounded-full bg-staggeringIconsBackgroundGray shadow-sm shadow-slate-800 flex justify-center items-center"
      variants={rightIconsVariant}
      initial="initial"
      animate={{
        x: isButtonOpened ? 0 : -30,
        scale: isButtonOpened ? 1 : 0,
        rotate: isButtonOpened ? 0 : -45,
        transition: { delay: 0.4, type: 'spring', damping: 12 },
      }}
      whileTap={{ y: -10 }}
      onClick={play}
    >
      <GiAngularSpider fontSize={30} color="#D4D3D6" />
    </motion.button>,
    <motion.button
      key="3"
      className="h-12 w-12 rounded-full bg-staggeringIconsBackgroundGray shadow-sm shadow-slate-800 flex justify-center items-center"
      variants={rightIconsVariant}
      initial="initial"
      animate={{
        x: isButtonOpened ? 0 : -30,
        scale: isButtonOpened ? 1 : 0,
        rotate: isButtonOpened ? 0 : -45,
        transition: { delay: 0.6, type: 'spring', damping: 12 },
      }}
      whileTap={{ y: -10 }}
      onClick={play}
    >
      <GiBandit fontSize={25} color="#D4D3D6" />
    </motion.button>,
    <motion.button
      key="4"
      className="h-10 w-10 rounded-full bg-staggeringIconsBackgroundGray shadow-sm shadow-slate-800 flex justify-center items-center"
      variants={rightIconsVariant}
      initial="initial"
      animate={{
        x: isButtonOpened ? 0 : -30,
        scale: isButtonOpened ? 1 : 0,
        rotate: isButtonOpened ? 0 : -45,
        transition: { delay: 0.8, type: 'spring', damping: 12 },
      }}
      whileTap={{ y: -10 }}
      onClick={play}
    >
      <GiBatteredAxe fontSize={20} color="#D4D3D6" />
    </motion.button>,
  ];

  return (
    <motion.div className="flex items-center justify-between ml-5 h-20 w-60">
      {rightIcons}
    </motion.div>
  );
}

RightStaggerIcons.propTypes = {
  isButtonOpened: PropTypes.bool.isRequired,
};
