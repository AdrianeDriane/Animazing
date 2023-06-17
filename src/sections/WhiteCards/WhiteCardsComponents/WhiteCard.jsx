import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function WhiteCard({ value, isSpread }) {
  return (
    <motion.div
      className={`absolute bg-white h-96 w-72 shadow-whiteCardShadow shadow-slate-300 rounded-xl hover:cursor-pointer`}
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
