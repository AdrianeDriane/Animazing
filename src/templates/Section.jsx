import React from 'react';
import PropTypes from 'prop-types';

function Section({ children, color }) {
  return (
    <section
      className={`${color} h-screen flex justify-center items-center p-10 snap-center shadow-2xl shadow-slate-600 rounded-md`}
    >
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default Section;
