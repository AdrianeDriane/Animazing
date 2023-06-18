import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function WhiteCard({ value, isSpread }) {
  return (
    <motion.div
      className={`absolute bg-white h-52 w-36 shadow-whiteCardShadow shadow-slate-300 rounded-xl hover:cursor-pointer md:h-72 md:w-52 lg:h-96 lg:w-72`}
      animate={{
        translateX: isSpread ? `${value * 2}%` : `${value * 0.15}%`,
        rotate: isSpread ? `${value}deg` : 0,
        transition: {
          type: 'spring',
          damping: 8,
        },
      }}
    />
  );
}

WhiteCard.propTypes = {
  value: PropTypes.number.isRequired,
  isSpread: PropTypes.bool.isRequired,
};
