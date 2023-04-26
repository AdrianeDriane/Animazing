import React from 'react';
import { motion, useCycle } from 'framer-motion';
import { HiPlus } from 'react-icons/hi';

import Section from '../../templates/Section';

export default function AddButtonSection() {
  const [isButtonOpened, cycleIsButtonOpened] = useCycle(false, true);

  return (
    <Section color="bg-veryDarkPurple">
      <div
        className="hover:cursor-pointer flex items-center justify-center h-20 w-20 rounded-full shadow-xl shadow-slate-800 bg-gradient-to-b from-gradientDarkPurple to-gradientLightPurple"
        onClick={() => {
          cycleIsButtonOpened();
        }}
      >
        <div className="flex items-center justify-center h-14 w-14 rounded-full shadow-xl bg-gradient-to-b from-plusIconGradientDarkPurple to-plusIconGradientLightPurple">
          <motion.div
            className="flex items-center justify-center h-full w-full rounded-full bg-transparent"
            initial={{
              scale: 1,
              rotate: 0,
            }}
            animate={{
              rotate: isButtonOpened ? 135 : 0,
              scale: [0.8, 1.2, 1],
              transition: {
                duration: 1,
                type: 'spring',
                bounce: 0.5,
                damping: 10,
              },
            }}
          >
            <HiPlus color="#2E1E62" fontSize={40} />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
