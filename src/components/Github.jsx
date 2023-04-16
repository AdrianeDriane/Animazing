import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

export default function Github() {
  return (
    <a
      href="https://github.com/AdrianeDriane/Animazing"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillGithub className="fixed top-10 right-16" size={50} color="white" />
    </a>
  );
}
