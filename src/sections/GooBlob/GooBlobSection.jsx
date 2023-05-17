import React, { useRef, useEffect, useState } from 'react';
import Section from '../../templates/Section.jsx';
import './GooBlob.css';
import Blob from './GooBlobComponents/Blob.jsx';

export default function GooBlobSection() {
  const cursorRef = useRef(null);
  const [blobLocationX, setBlobLocationX] = useState(0);
  const [blobLocationY, setBlobLocationY] = useState(0);

  const handleMouseMove = (event) => {
    const cursor = cursorRef.current;
    const rect = cursor.getBoundingClientRect();

    cursor.style.left = event.clientX - rect.width / 2 + 'px';
    cursor.style.top = event.clientY - rect.height / 2 + 'px';

    setBlobLocationX(event.clientX);
    setBlobLocationY(event.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Section color="bg-white">
      <div
        className="blobs flex relative h-full w-full"
        onMouseMove={handleMouseMove}
      >
        <div
          ref={cursorRef}
          className="bg-lightCoral rounded-full inline-block 
      absolute h-10 w-10 shadow-blobBoxShadow opacity-60 z-10"
        ></div>
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
