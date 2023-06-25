import React from 'react';
import PropTypes from 'prop-types';

export default function CartonBoxContainer({ children }) {
  return (
    <div
      className="scene h-min w-min flex justify-center items-center"
      style={{ perspective: '400px' }}
    >
      {children}
    </div>
  );
}

CartonBoxContainer.propTypes = {
  children: PropTypes.node,
};
