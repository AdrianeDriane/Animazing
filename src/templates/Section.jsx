import React from 'react';
import PropTypes from 'prop-types';

function Section({ children, color, align, justify, padding }) {
  return (
    <section
      className={`${color} snap-center h-screen flex ${justify} ${align} ${padding} shadow-2xl shadow-slate-600 overflow-hidden`}
    >
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  padding: PropTypes.string,
};

Section.defaultProps = {
  align: 'items-center',
  justify: 'justify-center',
  padding: 'p-10',
};

export default Section;
