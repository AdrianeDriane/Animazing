import React from 'react';
import PropTypes from 'prop-types';

export default function Mobile({ children }) {
  return (
    <div className="border-8 z-10 rounded-3xl h-mobileHeight w-mobileWidth shadow-2xl shadow-slate-800">
      {children}
    </div>
  );
}

Mobile.propTypes = {
  children: PropTypes.node,
};
