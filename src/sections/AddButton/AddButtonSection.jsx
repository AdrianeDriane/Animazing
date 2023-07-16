import React from 'react';
import { useCycle } from 'framer-motion';
import useSound from 'use-sound';

import Section from '../../templates/Section';
import AddIconAnimation from './AddButtonComponents/AddIconAnimation.jsx';
import LeftStaggerIcons from './AddButtonComponents/LeftStaggerIcons.jsx';
import RightStaggerIcons from './AddButtonComponents/RightStaggerIcons.jsx';
import rotateSound from '../../assets/rotateSound.mp3';
import { useSoundContext } from '../../components/SoundToggle/soundContext.js';

export default function AddButtonSection() {
  const isSoundMuted = useSoundContext();

  const [isButtonOpened, cycleIsButtonOpened] = useCycle(false, true);
  const [play] = useSound(rotateSound, { volume: isSoundMuted ? 0 : 1 });

  return (
    <Section color="bg-veryDarkPurple">
      <LeftStaggerIcons isButtonOpened={isButtonOpened} />
      <div
        className="hover:cursor-pointer flex items-center justify-center h-20 w-20 rounded-full shadow-xl shadow-slate-800 bg-gradient-to-b from-gradientDarkPurple to-gradientLightPurple"
        onClick={() => {
          play();
          cycleIsButtonOpened();
        }}
      >
        <div className="flex items-center justify-center h-14 w-14 rounded-full shadow-xl bg-gradient-to-b from-plusIconGradientDarkPurple to-plusIconGradientLightPurple">
          <AddIconAnimation isButtonOpened={isButtonOpened} />
        </div>
      </div>
      <RightStaggerIcons isButtonOpened={isButtonOpened} />
    </Section>
  );
}
