import React from 'react';
import PropTypes from 'prop-types';

export default function Mobile({ children, color }) {
  return (
    <div
      className={`${color} border-mobileBorderWidth z-10 rounded-3xl h-mobileHeight w-mobileWidth shadow-2xl shadow-slate-800 overflow-hidden`}
    >
      {children}
    </div>
  );
}

Mobile.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};
