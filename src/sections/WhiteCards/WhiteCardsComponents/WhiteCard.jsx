import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function WhiteCard({ id }) {
  return (
    <motion.div
      className="absolute bg-white h-96 w-72 shadow-whiteCardShadow 
    shadow-slate-300 rounded-xl hover:cursor-pointer"
    />
  );
}

WhiteCard.propTypes = {
  id: PropTypes.number,
};
