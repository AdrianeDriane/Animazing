import FirstPageSection from './sections/FirstPage/FirstPageSection';
import CardsStackSection from './sections/CardsStack/CardsStackSection';
import HamburgerMenuSection from './sections/HamburgerMenu/HamburgerMenuSection';
import MacOSDockSection from './sections/MacOSDock/MacOSDockSection';

function App() {
  return (
    <div className="h-screen overflow-auto snap-y snap-mandatory">
      <FirstPageSection />
      <MacOSDockSection />
      <HamburgerMenuSection />
      <CardsStackSection />
    </div>
  );
}

export default App;
