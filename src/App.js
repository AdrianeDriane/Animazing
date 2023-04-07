import { useRef } from 'react';
import { useInView } from 'framer-motion';

import FirstPageSection from './sections/FirstPage/FirstPageSection';
import CardsStackSection from './sections/CardsStack/CardsStackSection';
import HamburgerMenuSection from './sections/HamburgerMenu/HamburgerMenuSection';
import MacOSDockSection from './sections/MacOSDock/MacOSDockSection';

function App() {
  const firstPageSectionRef = useRef();
  const cardsStackSectionRef = useRef();
  const hamburgerMenuSectionRef = useRef();
  const macOSDockSectionRef = useRef();

  return (
    <div className="h-screen overflow-auto snap-y snap-mandatory bg-alabaster">
      <FirstPageSection
        innerRef={firstPageSectionRef}
        isVisible={useInView(firstPageSectionRef)}
      />
      <CardsStackSection
        innerRef={cardsStackSectionRef}
        isVisible={useInView(cardsStackSectionRef)}
      />
      <HamburgerMenuSection
        innerRef={hamburgerMenuSectionRef}
        isVisible={useInView(hamburgerMenuSectionRef)}
      />
      <MacOSDockSection
        innerRef={macOSDockSectionRef}
        isVisible={useInView(macOSDockSectionRef)}
      />
    </div>
  );
}

export default App;
