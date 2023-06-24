import React from 'react';
import recycleLogo from '../../../assets/cartonBoxSvgs/recycle_logo.svg';
import qrScanMe from '../../../assets/cartonBoxSvgs/qr_scan_me.svg';
import scotchTape from '../../../assets/cartonBoxSvgs/scotch_tape.svg';
import fragileLogosFirstRow from '../../../assets/cartonBoxSvgs/fragile_logos_firstrow.svg';
import fragileLogosSecondRow from '../../../assets/cartonBoxSvgs/fragile_logos_secondrow.svg';

export default function CartonBox() {
  return (
    <div
      className="cube relative"
      style={{
        transformStyle: 'preserve-3d',
        transform:
          'translateZ(-50px) rotateX(-18deg) rotateY(40deg) translateX(-100px)',
      }}
    >
      <div
        className="front absolute h-cartonBoxHeight w-cartonBoxWidth bg-cartonBoxDark"
        style={{ transform: 'rotateY(0deg) translateZ(100px)' }}
      >
        <img
          src={fragileLogosFirstRow}
          alt="Logos First Row"
          className="absolute top-24 left-2"
        />
        <img
          src={fragileLogosSecondRow}
          alt="Logos Second Row"
          className="absolute top-36 left-2"
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
        className="left absolute h-cartonBoxHeight w-cartonBoxWidth bg-cartonBoxLight"
        style={{ transform: 'rotateY(-90deg) translateZ(100px)' }}
      >
        <img
          src={scotchTape}
          alt="Scotch Tape Strip"
          className="absolute top-0 left-20"
        />
        <img
          src={recycleLogo}
          alt="Recycle Logo"
          className="absolute top-36 left-2"
        />
        <img src={qrScanMe} alt="QR Code" className="absolute top-36 left-28" />
      </div>

      <div
        className="top absolute h-cartonBoxHeight w-cartonBoxWidth"
        style={{
          transform: 'rotateX(90deg) translateZ(100px)',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="cover-back w-cartonBoxWidth h-cartonCoverHeight bg-cartonBoxVeryLight"
          style={{ transform: 'rotateX(0deg)', transformOrigin: 'top' }} //open and close cover here
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
            }}
          />
        </div>
        <div
          className="cover-front w-cartonBoxWidth h-cartonCoverHeight bg-cartonBoxVeryLight flex"
          style={{ transform: 'rotateX(0deg)', transformOrigin: 'bottom' }} //open and close cover here
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
            }}
          />
        </div>
      </div>

      <div
        className="bottom absolute h-cartonBoxHeight w-cartonBoxWidth bg-cartonBoxLight shadow-cartonBoxShadow"
        style={{ transform: 'rotateX(-90deg) translateZ(100px)' }}
      />
    </div>
  );
}
