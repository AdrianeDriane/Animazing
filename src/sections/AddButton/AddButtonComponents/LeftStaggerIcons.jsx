import React from 'react';
import useSound from 'use-sound';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { AiFillAliwangwang } from 'react-icons/ai';
import { AiFillCrown } from 'react-icons/ai';
import { AiFillGitlab } from 'react-icons/ai';
import { AiFillBuild } from 'react-icons/ai';

import bumpSound from '../../../assets/bumpSound.mp3';

export default function LeftStaggerIcons({ isButtonOpened }) {
  const [play] = useSound(bumpSound);

  const leftIconsVariant = {
    initial: {
      x: 30,
      scale: 0,
      rotate: 45,
      y: 0,
    },
  };

  const leftIcons = [
    <motion.button
      key="1"
      className="h-16 w-16 rounded-full bg-staggeringIconsBackgroundGray shadow-sm shadow-slate-800 flex justify-center items-center"
      variants={leftIconsVariant}
      initial="initial"
      animate={{
        x: isButtonOpened ? 0 : 30,
        scale: isButtonOpened ? 1 : 0,
        rotate: isButtonOpened ? 0 : 45,
        transition: { delay: 0.2, type: 'spring', damping: 12 },
      }}
      whileTap={{ y: -10 }}
      onClick={play}
    >
      <AiFillAliwangwang fontSize={40} color="#D4D3D6" />
    </motion.button>,
    <motion.button
      key="2"
      className="h-14 w-14 rounded-full bg-staggeringIconsBackgroundGray shadow-sm shadow-slate-800 flex justify-center items-center"
      variants={leftIconsVariant}
      initial="initial"
      animate={{
        x: isButtonOpened ? 0 : 30,
        scale: isButtonOpened ? 1 : 0,
        rotate: isButtonOpened ? 0 : 45,
        transition: { delay: 0.4, type: 'spring', damping: 12 },
      }}
      whileTap={{ y: -10 }}
      onClick={play}
    >
      <AiFillCrown fontSize={32} color="#D4D3D6" />
    </motion.button>,
    <motion.button
      key="3"
      className="h-12 w-12 rounded-full bg-staggeringIconsBackgroundGray shadow-sm shadow-slate-800 flex justify-center items-center"
      variants={leftIconsVariant}
      initial="initial"
      animate={{
        x: isButtonOpened ? 0 : 30,
        scale: isButtonOpened ? 1 : 0,
        rotate: isButtonOpened ? 0 : 45,
        transition: { delay: 0.6, type: 'spring', damping: 12 },
      }}
      whileTap={{ y: -10 }}
      onClick={play}
    >
      <AiFillGitlab fontSize={24} color="#D4D3D6" />
    </motion.button>,
    <motion.button
      key="4"
      className="h-10 w-10 rounded-full bg-staggeringIconsBackgroundGray shadow-sm shadow-slate-800 flex justify-center items-center"
      variants={leftIconsVariant}
      initial="initial"
      animate={{
        x: isButtonOpened ? 0 : 30,
        scale: isButtonOpened ? 1 : 0,
        rotate: isButtonOpened ? 0 : 45,
        transition: { delay: 0.8, type: 'spring', damping: 12 },
      }}
      whileTap={{ y: -10 }}
      onClick={play}
    >
      <AiFillBuild fontSize={16} color="#D4D3D6" />
    </motion.button>,
  ];

  return (
    <div className="flex items-center justify-between flex-row-reverse mr-5 h-20 w-60">
      {leftIcons}
    </div>
  );
}

LeftStaggerIcons.propTypes = {
  isButtonOpened: PropTypes.bool.isRequired,
};
