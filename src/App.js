import CardsStackSection from './sections/CardsStack/CardsStackSection.jsx';
import HamburgerMenuSection from './sections/HamburgerMenu/HamburgerMenuSection.jsx';
import MacOSDockSection from './sections/MacOSDock/MacOSDockSection.jsx';
import Github from './components/Github.jsx';
import ElasticSwitchTabSection from './sections/ElasticSwitchTab/ElasticSwitchTabSection.jsx';
import BoxStackSection from './sections/BoxStack/BoxStackSection.jsx';
import BottomTabSection from './sections/BottomTab/BottomTabSection.jsx';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader/Preloader.jsx';
import AddButtonSection from './sections/AddButton/AddButtonSection.jsx';
import CloudyButtonSection from './sections/CloudyButton/CloudyButtonSection.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  function preloaderHandler() {
    if (isLoading) {
      return <Preloader />;
    }
  }

  return (
    <>
      {preloaderHandler()}
      <div className="h-screen overflow-auto snap-y snap-mandatory">
        <Github />
        <MacOSDockSection />
        <AddButtonSection />
        <ElasticSwitchTabSection />
        <CardsStackSection />
        <HamburgerMenuSection />
        <BottomTabSection />
        <BoxStackSection />
        <CloudyButtonSection />
      </div>
    </>
  );
}

export default App;
