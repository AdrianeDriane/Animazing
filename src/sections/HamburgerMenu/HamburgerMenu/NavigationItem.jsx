import { motion } from 'framer-motion';
import { navigationItemVariants } from '../utils/navigationItemVariants';
import PropTypes from 'prop-types';
import { BiHomeAlt2 } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { RxPerson } from 'react-icons/rx';

export default function NavigationItem({ text }) {
  function iconBasedOnText(text) {
    text = text.toLowerCase();
    if (text === 'home') {
      return <BiHomeAlt2 size={35} className="mr-10 " />;
    } else if (text === 'inbox') {
      return <AiOutlineMessage size={35} className="mr-10" />;
    } else if (text === 'contact') {
      return <FiMail size={35} className="mr-10" />;
    } else if (text === 'about') {
      return <RxPerson size={35} className="mr-10" />;
    }
  }

  return (
    <motion.li
      variants={navigationItemVariants}
      whileTap={{ scale: 0.9 }}
      className="m-0 p-0 list-none mb-5 flex items-center cursor-pointer"
    >
      <motion.div
        className="flex items-center justify-start pl-10"
        whileHover={{ x: 40, fontStyle: 'italic' }}
      >
        {iconBasedOnText(text)}
        <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-canvaBlue to-canvaPurple font-semibold font-sans">
          {text}
        </h1>
      </motion.div>
    </motion.li>
  );
}

NavigationItem.propTypes = {
  text: PropTypes.string.isRequired,
};
