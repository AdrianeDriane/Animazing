import React from 'react';
import PropTypes from 'prop-types';

function InnerRefDiv({ children, innerRef }) {
  return (
    <div className="h-full w-full" ref={innerRef}>
      {children}
    </div>
  );
}

InnerRefDiv.propTypes = {
  children: PropTypes.node,
  innerRef: PropTypes.object,
};

export default InnerRefDiv;
