import React from 'react';
import Section from '../../templates/Section.jsx';
import CloudyButton from './CloudyButtonComponents/CloudyButton.jsx';

export default function CloudyButtonSection() {
  const list = ['eat', 'sleep', 'gym', 'code'];

  return (
    <Section color="bg-[#e4ecfa]">
      <ul className="list-none m-0 p-0">
        {list.map((item, index) => (
          <CloudyButton key={index} text={item} />
        ))}
      </ul>
    </Section>
  );
}
