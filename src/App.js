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
import GooBlobSection from './sections/GooBlob/GooBlobSection.jsx';
import DontHearnMeSection from './sections/DontHearnMe/DontHearnMeSection.jsx';
import WhiteCardsSection from './sections/WhiteCards/WhiteCardsSection.jsx';
import CartonBoxSection from './sections/CartonBox/CartonBoxSection.jsx';

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
      <div className="h-screen overflow-auto snap-y snap-mandatory selection:bg-none">
        <Github />
        <MacOSDockSection />
        <AddButtonSection />
        <BottomTabSection />
        <HamburgerMenuSection />
        <BoxStackSection />
        <ElasticSwitchTabSection />
        <CardsStackSection />
        <CartonBoxSection />
        <DontHearnMeSection />
        <CloudyButtonSection />
        <GooBlobSection />
        <WhiteCardsSection />
      </div>
    </>
  );
}

export default App;
