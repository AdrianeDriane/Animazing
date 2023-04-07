import React from 'react';
import PropTypes from 'prop-types';

function InnerRefDiv({ children, innerRef }) {
  return (
    <div className="h-1/4 w-full absolute" ref={innerRef}>
      {children}
    </div>
  );
}

InnerRefDiv.propTypes = {
  children: PropTypes.node,
  innerRef: PropTypes.object,
};

export default InnerRefDiv;
