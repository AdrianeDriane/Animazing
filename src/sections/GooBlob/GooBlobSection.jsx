import React, { useState } from 'react';
import useSound from 'use-sound';

import blobSound from '../../assets/blobSound.mp3';
import Section from '../../templates/Section.jsx';
import './GooBlob.css';
import Blob from './GooBlobComponents/Blob.jsx';

export default function GooBlobSection() {
  const [blobLocationX, setBlobLocationX] = useState(0);
  const [blobLocationY, setBlobLocationY] = useState(0);

  const [play] = useSound(blobSound);

  const handleClick = (event) => {
    play();
    setBlobLocationX(event.clientX);
    setBlobLocationY(event.clientY);
  };

  return (
    <Section color="bg-[#f1dbdb]">
      <div className="blobs flex relative h-full w-full" onClick={handleClick}>
        <Blob
          height="h-32"
          width="w-32"
          left={blobLocationX - 32 * 2}
          top={blobLocationY - 32 * 2}
          stiffness={60}
        />
        <Blob
          height="h-20"
          width="w-20"
          left={blobLocationX - 20 * 2}
          top={blobLocationY - 20 * 2}
          stiffness={30}
        />
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="0"
        height="0"
        className="relative -z-10"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="15"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
            />
          </filter>
        </defs>
      </svg>
    </Section>
  );
}
