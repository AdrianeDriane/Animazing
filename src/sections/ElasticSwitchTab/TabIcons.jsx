import {
  AiFillHeart,
  AiFillHome,
  AiFillPlayCircle,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlinePlayCircle,
} from 'react-icons/ai';
import { BsBookFill, BsBook } from 'react-icons/bs';
import PropTypes from 'prop-types';

export default function TabIcons(name, id, selected) {
  if (name === 'Home' && selected === id) {
    return (
      <AiFillHome
        className="text-2xl sm:text-xl"
        color="white"
        z={10}
      ></AiFillHome>
    );
  } else if (name === 'Home' && selected !== id) {
    return (
      <AiOutlineHome
        className="text-2xl sm:text-xl"
        color="white"
        z={10}
      ></AiOutlineHome>
    );
  }

  if (name === 'Liked' && selected === id) {
    return (
      <AiFillHeart
        className="text-2xl sm:text-xl"
        color="white"
        z={10}
      ></AiFillHeart>
    );
  } else if (name === 'Liked' && selected !== id) {
    return (
      <AiOutlineHeart
        className="text-2xl sm:text-xl"
        color="white"
        z={10}
      ></AiOutlineHeart>
    );
  }

  if (name === 'Library' && selected === id) {
    return (
      <BsBookFill
        className="text-2xl sm:text-xl"
        color="white"
        z={10}
      ></BsBookFill>
    );
  } else if (name === 'Library' && selected !== id) {
    return (
      <BsBook className="text-2xl sm:text-xl" color="white" z={10}></BsBook>
    );
  }

  if (name === 'Playlist' && selected === id) {
    return (
      <AiFillPlayCircle
        className="text-2xl sm:text-xl"
        color="white"
        z={10}
      ></AiFillPlayCircle>
    );
  } else if (name === 'Playlist' && selected !== id) {
    return (
      <AiOutlinePlayCircle
        className="text-2xl sm:text-xl"
        color="white"
        z={10}
      ></AiOutlinePlayCircle>
    );
  }
}

TabIcons.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
};
