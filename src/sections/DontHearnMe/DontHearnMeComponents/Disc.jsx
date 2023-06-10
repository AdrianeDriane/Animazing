import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsPlayFill } from 'react-icons/bs';
import { BsPauseFill } from 'react-icons/bs';
import useSound from 'use-sound';

import gigachad from '../../../assets/gigachad.png';
import dontHearnMe from '../../../assets/babyDontHearnMe.mp3';

export default function Disc() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, stop }] = useSound(dontHearnMe);

  const toggleIsPlaying = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      pause();
    }
  }, [isPlaying, play, pause]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('stop na');
      setIsPlaying(false);
      stop();
    }, duration);

    return () => {
      clearInterval(timer);
    };
  }, [duration, stop]);

  return (
    <div className="h-discComponentHeight w-discComponentWidth relative flex justify-center items-center">
      <div className="h-discHeight w-discWidth rounded-full bg-gray-700 shadow-2xl shadow-slate-700 flex items-center justify-center">
        <motion.div
          className="h-80 w-80 rounded-full absolute animate-spin-slow"
          style={{
            background: `url(${gigachad})`,
            backgroundSize: 'cover',
            animationPlayState: isPlaying ? 'running' : 'paused',
          }}
        ></motion.div>
      </div>
      <button
        className="h-16 w-16 rounded-playButtonRound absolute bg-white 
        shadow-playButtonShadow z-10 flex items-center justify-center
        shadow-play border-4 border-gray-700"
        onClick={toggleIsPlaying}
      >
        {isPlaying ? (
          <BsPauseFill fontSize={30} color="rgb(31 41 55)" />
        ) : (
          <BsPlayFill fontSize={30} color="rgb(31 41 55)" />
        )}
      </button>
    </div>
  );
}
