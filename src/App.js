import CardsStackSection from './sections/CardsStack/CardsStackSection.jsx';
import HamburgerMenuSection from './sections/HamburgerMenu/HamburgerMenuSection.jsx';
import MacOSDockSection from './sections/MacOSDock/MacOSDockSection.jsx';
import Github from './components/Github.jsx';
import ElasticSwitchTabSection from './sections/ElasticSwitchTab/ElasticSwitchTabSection.jsx';
import BoxStackSection from './sections/BoxStack/BoxStackSection.jsx';
import BottomTabSection from './sections/BottomTab/BottomTabSection.jsx';

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
