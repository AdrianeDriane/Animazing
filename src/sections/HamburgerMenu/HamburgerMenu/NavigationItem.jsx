import { motion } from 'framer-motion';
import { navigationItemVariants } from '../utils/navigationItemVariants';
import PropTypes from 'prop-types';

export default function NavigationItem({ text }) {
  return (
    <motion.li
      variants={navigationItemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="m-0 p-0 list-none mb-5 flex items-center cursor-pointer"
    >
      <div>
        <h1 className="text-6xl">{text}</h1>
      </div>
    </motion.li>
  );
}

NavigationItem.propTypes = {
  text: PropTypes.string.isRequired,
};
