import { useRef } from 'react';

import CardsStackSection from './sections/CardsStack/CardsStackSection';
import HamburgerMenuSection from './sections/HamburgerMenu/HamburgerMenuSection';
import MacOSDockSection from './sections/MacOSDock/MacOSDockSection';
import { IsRefInView } from './utils/IsRefInView';

function App() {
  const cardsStackSectionRef = useRef();
  const hamburgerMenuSectionRef = useRef();
  const macOSDockSectionRef = useRef();

  return (
    <div className="h-screen overflow-auto snap-y snap-mandatory bg-alabaster">
      <CardsStackSection
        innerRef={cardsStackSectionRef}
        isVisible={IsRefInView(cardsStackSectionRef)}
      />
      <HamburgerMenuSection
        innerRef={hamburgerMenuSectionRef}
        isVisible={IsRefInView(hamburgerMenuSectionRef)}
      />
      <MacOSDockSection
        innerRef={macOSDockSectionRef}
        isVisible={IsRefInView(macOSDockSectionRef)}
      />
    </div>
  );
}

export default App;
