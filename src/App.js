import CardsStackSection from './sections/CardsStack/CardsStackSection';
import HamburgerMenuSection from './sections/HamburgerMenu/HamburgerMenuSection';
import MacOSDockSection from './sections/MacOSDock/MacOSDockSection';
import Github from './components/Github';
import ElasticSwitchTabSection from './sections/ElasticSwitchTab/ElasticSwitchTabSection';
import BoxStackSection from './sections/BoxStack/BoxStackSection';
import BottomTabSection from './sections/BottomTab/BottomTabSection';

function App() {
  return (
    <div className="h-screen overflow-auto snap-y snap-mandatory">
      <Github />
      <MacOSDockSection />
      <HamburgerMenuSection />
      <BottomTabSection />
      <BoxStackSection />
      <ElasticSwitchTabSection />
      <CardsStackSection />
    </div>
  );
}

export default App;
