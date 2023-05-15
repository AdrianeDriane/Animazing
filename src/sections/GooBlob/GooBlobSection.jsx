import React from 'react';
import Section from '../../templates/Section.jsx';
import './GooBlob.css';
import Blob from './GooBlobComponents/Blob.jsx';

export default function GooBlobSection() {
  return (
    <Section color="bg-white">
      <div className="blobs text-center items-center justify-center flex relative h-full w-full top-0 left-0 right-0 bottom-0">
        <Blob />
        <Blob />
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
