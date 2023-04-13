import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { MouseProvider } from '../mouse/MouseProvider';
import DockItem from './DockItem';
import DockIcon from './DockIcon';

const DockContext = createContext(null);

export const useDock = () => {
  return useContext(DockContext);
};

export default function Dock() {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState();

  const openLink = (e, link) => {
    e.stopPropagation();
    window.open(link);
  };

  useEffect(() => {
    setWidth(ref.current.clientWidth);
  }, []);

  const dockItems = Array.from({ length: 8 }, (_, index) => (
    <DockItem key={index} />
  ));

  return (
    <MouseProvider>
      <div className="relative inset-x-0 z-40 flex justify-center">
        <div className="flex w-full justify-center">
          <DockContext.Provider value={{ hovered, width }}>
            <nav
              ref={ref}
              className="flex justify-center rounded-macos bg-macOSBg py-3 px-4 ring-1 ring-macOSBorder rounded-lg"
              onMouseOver={() => setHovered(true)}
              onMouseOut={() => setHovered(false)}
            >
              <ul className="flex h-dockHeight items-end justify-center space-x-3">
                {dockItems}

                <li className="self-center" aria-hidden="true">
                  <hr className="!mx-2 block h-10 w-px border-none bg-macOSBorder" />
                </li>
                <DockItem
                  id="dock-item-twitter"
                  onClick={(e) => openLink(e, 'https://twitter.com/')}
                >
                  <DockIcon name="Twitter" />
                </DockItem>
                <DockItem
                  id="dock-item-github"
                  onClick={(e) =>
                    openLink(
                      e,
                      'https://github.com/AdrianeDriane/Animazing/tree/master'
                    )
                  }
                >
                  <DockIcon name="Github" />
                </DockItem>
              </ul>
            </nav>
          </DockContext.Provider>
        </div>
      </div>
    </MouseProvider>
  );
}
