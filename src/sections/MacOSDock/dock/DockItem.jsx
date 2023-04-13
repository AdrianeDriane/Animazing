import { useEffect, useRef, useState } from 'react';
import { useEvent } from 'react-use';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useMouse } from '../mouse/MouseProvider'; //
import { useDock } from './Dock'; //

const DOCK_ITEM_SIZE = 50;
const INCREASE_AMP_BY = 40;

export default function DockItem({ children, id, onClick }) {
  const ref = useRef(null);
  const mouse = useMouse();
  const dock = useDock();
  const [elCenterX, setElCenterX] = useState(null);

  const dimension = useTransform(mouse.position.x, (mouseX) => {
    return (
      DOCK_ITEM_SIZE +
      INCREASE_AMP_BY *
        Math.cos((((mouseX - elCenterX) / dock.width) * Math.PI) / 2) ** 8
    );
  });

  const spring = useSpring(DOCK_ITEM_SIZE, {
    damping: 10,
    stiffness: 150,
    mass: 0.01,
  });

  useEffect(() => {
    return dimension.on('change', (val) => {
      if (dock.hovered) {
        spring.set(val);
      } else {
        spring.set(DOCK_ITEM_SIZE);
      }
    });
  }, [spring, dimension, dock.hovered]);

  useEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    setElCenterX(rect.x + rect.width / 2);
  }, []);

  useEvent('resize', () => {
    const rect = ref.current.getBoundingClientRect();
    setElCenterX(rect.x + rect.width / 2);
  });

  return (
    <li className="relative">
      <motion.button
        ref={ref}
        id={id}
        className="flex flex-none select-none items-center justify-center rounded-3xl
        bg-macOSDockItems outline-none ring-1 ring-white/10 focus-visible:ring-4"
        style={{
          height: spring,
          width: spring,
          transition: 'filter .50s',
        }}
        whileHover={{ backgroundColor: '#30363D', borderRadius: '15%' }}
        whileFocus={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        onClick={onClick}
      >
        {children}
      </motion.button>
    </li>
  );
}
