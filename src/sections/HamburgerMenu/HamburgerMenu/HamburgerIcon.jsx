import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export default function HamburgerIcon({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      className={`${
        isOpen ? 'bg-opacity-0' : 'bg-opacity-100'
      } outline-none border-none select-none cursor-pointer absolute top-5 left-5 w-14 h-14 rounded-full bg-opac bg-white flex items-center justify-center z-10`}
    >
      <svg width="30" height="30" viewBox="0 0 23 23">
        <Path
          variants={{
            close: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            close: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            close: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
}

HamburgerIcon.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
};
