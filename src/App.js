import CardsStackSection from './sections/CardsStack/CardsStackSection';
import HamburgerMenuSection from './sections/HamburgerMenu/HamburgerMenuSection';
import MacOSDockSection from './sections/MacOSDock/MacOSDockSection';
import Github from './components/Github';
import ElasticSwitchTabSection from './sections/ElasticSwitchTab/ElasticSwitchTabSection';
import PageSwipeSection from './sections/PageSwipe/PageSwipeSection';

function App() {
  return (
    <div className="h-screen overflow-auto snap-y snap-mandatory">
      <Github />
      <MacOSDockSection />
      <HamburgerMenuSection />
      <PageSwipeSection />
      <ElasticSwitchTabSection />
      <CardsStackSection />
    </div>
  );
}

export default App;
