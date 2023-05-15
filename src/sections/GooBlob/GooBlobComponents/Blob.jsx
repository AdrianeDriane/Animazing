import React from 'react';
import PropTypes from 'prop-types';

export default function Blob({ size }) {
  return (
    <div
      className={`bg-lightCoral rounded-full inline-block h-28 w-28 shadow-blobBoxShadow opacity-60`}
    ></div>
  );
}

Blob.propTypes = {
  size: PropTypes.string,
};
