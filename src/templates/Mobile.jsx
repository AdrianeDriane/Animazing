import React from 'react';
import PropTypes from 'prop-types';

export default function Mobile({ children, color, align, justify }) {
  return (
    <div
      className={`${color} flex ${align} ${justify} border-mobileBorderWidth z-10 rounded-3xl h-mobileHeight w-mobileWidth shadow-2xl shadow-slate-800 overflow-hidden`}
    >
      {children}
    </div>
  );
}

Mobile.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
};

Mobile.defaultProps = {
  align: 'items-start',
  justify: 'justify-normal',
};
