import React from 'react';
import PropTypes from 'prop-types';

function Section({ children, color, align }) {
  return (
    <section
      className={`${color} ${align} h-screen flex justify-center p-10 snap-center shadow-2xl shadow-slate-600`}
    >
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  align: PropTypes.string,
};

Section.defaultProps = {
  align: 'items-center',
};

export default Section;
