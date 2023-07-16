import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

import recycleLogo from '../../../assets/cartonBoxSvgs/recycle_logo.svg';
import qrScanMe from '../../../assets/cartonBoxSvgs/qr_scan_me.svg';
import scotchTape from '../../../assets/cartonBoxSvgs/scotch_tape.svg';
import fragileLogosFirstRow from '../../../assets/cartonBoxSvgs/fragile_logos_firstrow.svg';
import fragileLogosSecondRow from '../../../assets/cartonBoxSvgs/fragile_logos_secondrow.svg';
import charmander from '../../../assets/cartonBoxSvgs/charmander.svg';

import whosThatPokemon from '../../../assets/whos_that_pokemon.mp3';

import { useSoundContext } from '../../../components/SoundToggle/soundContext.js';

export default function CartonBox() {
  const isSoundMuted = useSoundContext();
  const [isHeld, setIsHeld] = useState(false);
  const [play, { stop }] = useSound(whosThatPokemon, {
    volume: isSoundMuted ? 0 : 1,
  });

  const handleMouseDown = () => {
    setIsHeld(true);
    play();
  };
  const handleMouseUp = () => {
    setIsHeld(false);
    stop();
  };

  return (
    <div
      className="cube relative hover:cursor-pointer"
      style={{
        transformStyle: 'preserve-3d',
        transform:
          'translateZ(-50px) rotateX(-18deg) rotateY(40deg) translateX(-100px)',
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      draggable="false"
    >
      <div
        className="front absolute h-cartonBoxHeight w-cartonBoxWidth bg-cartonBoxDark z-50"
        style={{ transform: 'rotateY(0deg) translateZ(100px)' }}
      >
        <img
          src={fragileLogosFirstRow}
          alt="Logos First Row"
          className="absolute top-24 left-2 select-none"
          draggable="false"
        />
        <img
          src={fragileLogosSecondRow}
          alt="Logos Second Row"
          className="absolute top-36 left-2 select-none"
          draggable="false"
        />
      </div>

      <div
        className="back absolute h-cartonBoxHeight w-cartonBoxWidth bg-cartonBoxDark"
        style={{ transform: 'rotateY(180deg) translateZ(100px)' }}
      />

      <div
        className="right absolute h-cartonBoxHeight w-cartonBoxWidth bg-cartonBoxLight"
        style={{ transform: 'rotateY(90deg) translateZ(100px)' }}
      />

      <div
        className="left absolute h-cartonBoxHeight w-cartonBoxWidth bg-cartonBoxLight z-50"
        style={{ transform: 'rotateY(-90deg) translateZ(100px)' }}
      >
        <img
          src={scotchTape}
          alt="Scotch Tape Strip"
          className="absolute top-0 left-20 select-none"
          draggable="false"
        />
        <img
          src={recycleLogo}
          alt="Recycle Logo"
          className="absolute top-36 left-2 select-none"
          draggable="false"
        />
        <img
          src={qrScanMe}
          alt="QR Code"
          className="absolute top-36 left-28 select-none"
          draggable="false"
        />
      </div>

      <div
        className="top absolute h-cartonBoxHeight w-cartonBoxWidth z-50"
        style={{
          transform: 'rotateX(90deg) translateZ(100px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          className="cover-back w-cartonBoxWidth h-cartonCoverHeight bg-cartonBoxVeryLight z-50"
          style={{ transform: 'rotateX(0deg)', transformOrigin: 'top' }} //open and close cover here positive
          initial={{ transform: 'rotateX(0deg)' }}
          animate={{
            transform: isHeld ? 'rotateX(200deg)' : 0,
            transition: {
              type: 'spring',
              damping: 20,
              delay: 1,
            },
          }}
        >
          <div
            style={{
              content: '',
              height: '20%',
              width: '100%',
              position: 'absolute',
              top: 80,
              left: 0,
              backgroundColor: '#0004',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              zIndex: '50',
            }}
          />
        </motion.div>
        <motion.div
          className="cover-front w-cartonBoxWidth h-cartonCoverHeight bg-cartonBoxVeryLight flex z-50"
          style={{ transform: 'rotateX(0deg)', transformOrigin: 'bottom' }} //open and close cover here negative
          initial={{ transform: 'rotateX(0deg)' }}
          animate={{
            transform: isHeld ? 'rotateX(-200deg)' : 0,
            transition: {
              type: 'spring',
              damping: 20,
            },
          }}
        >
          <div
            style={{
              content: '',
              height: '20%',
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundColor: '#0004',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
              zIndex: '50',
            }}
          />
        </motion.div>
      </div>

      <div
        className="bottom absolute h-cartonBoxHeight w-cartonBoxWidth bg-cartonBoxLight shadow-cartonBoxShadow"
        style={{ transform: 'rotateX(-90deg) translateZ(100px)' }}
      />
      <div
        className="content"
        style={{
          transform: 'rotateY(-45deg) translateZ(-100px) rotateX(10deg)',
        }}
      >
        <motion.div
          className="charmander absolute h-64 w-64"
          style={{
            transform: 'translateY(0px) translateX(-50px)', //make charmander go out here negative
          }}
          initial={{ transform: 'translateY(0px) translateX(-50px)' }}
          animate={{
            transform: isHeld
              ? 'translateY(-150px) translateX(-50px)'
              : 'translateY(0px) translateX(-50px)',
            transition: {
              type: 'spring',
              delay: isHeld ? 2 : 0,
            },
          }}
        >
          <img
            src={charmander}
            alt="Charmander"
            draggable="false"
            className="select-none"
          />
        </motion.div>
      </div>
    </div>
  );
}
