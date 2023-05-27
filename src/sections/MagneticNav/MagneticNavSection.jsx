import React, { useRef } from 'react';
import Section from '../../templates/Section';

export default function MagneticNavSection() {
  const cursorRef = useRef(null);

  const handleMouseMove = (event) => {
    const cursor = cursorRef.current;

    if (cursor) {
      const rect = cursor.getBoundingClientRect();
      const cursorWidth = rect.width;
      const cursorHeight = rect.height;

      // Calculate the position of the cursor based on the cursor coordinates
      const posX = event.clientX - cursorWidth / 2;
      const posY = event.clientY - cursorHeight / 2;

      // Update the position of the cursor
      cursor.style.left = `${posX}px`;
      cursor.style.top = `${posY}px`;
    }
  };

  return (
    <Section color="bg-spotifyBlack">
      <div
        className="h-full w-full cursor-none overflow-hidden relative"
        onMouseMove={handleMouseMove}
      >
        <div
          ref={cursorRef}
          className="absolute z-50 h-min w-min flex items-center justify-center"
        >
          <div className="h-3 w-3 bg-red-600 rounded-full absolute left-0 top-0 z-50"></div>
          <div className="h-10 w-10 border-red-600 border-2 rounded-full absolute left-0 top-0 z-50"></div>
        </div>
      </div>
    </Section>
  );
}
