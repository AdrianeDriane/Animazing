import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { BiHomeAlt2 } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { RxPerson } from 'react-icons/rx';
import useSound from 'use-sound';

import clickSound from '../../../assets/clickSound.mp3';
import { navigationItemVariants } from '../utils/navigationItemVariants.js';
export default function NavigationItem({ text }) {
  const [play] = useSound(clickSound);

  function iconBasedOnText(text) {
    text = text.toLowerCase();
    if (text === 'home') {
      return <BiHomeAlt2 size={30} className="mr-10 " />;
    } else if (text === 'inbox') {
      return <AiOutlineMessage size={30} className="mr-10" />;
    } else if (text === 'contact') {
      return <FiMail size={30} className="mr-10" />;
    } else if (text === 'about') {
      return <RxPerson size={30} className="mr-10" />;
    }
  }

  return (
    <motion.li
      variants={navigationItemVariants}
      onClick={() => {
        play();
      }}
      whileTap={{ scale: 0.9 }}
      className="m-0 p-0 list-none mb-5 flex items-center cursor-pointer"
    >
      <motion.div
        className="flex items-center justify-start pl-10"
        whileHover={{ x: 40, fontStyle: 'italic' }}
      >
        {iconBasedOnText(text)}
        <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-canvaBlue to-canvaPurple font-semibold font-sans sm:text-3xl">
          {text}
        </h2>
      </motion.div>
    </motion.li>
  );
}

NavigationItem.propTypes = {
  text: PropTypes.string.isRequired,
};
