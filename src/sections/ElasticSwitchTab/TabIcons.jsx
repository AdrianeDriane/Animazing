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
    return <AiFillHome color="white" size={20} z={10}></AiFillHome>;
  } else if (name === 'Home' && selected !== id) {
    return <AiOutlineHome color="white" size={20} z={10}></AiOutlineHome>;
  }

  if (name === 'Liked' && selected === id) {
    return <AiFillHeart color="white" size={20} z={10}></AiFillHeart>;
  } else if (name === 'Liked' && selected !== id) {
    return <AiOutlineHeart color="white" size={20} z={10}></AiOutlineHeart>;
  }

  if (name === 'Library' && selected === id) {
    return <BsBookFill color="white" size={20} z={10}></BsBookFill>;
  } else if (name === 'Library' && selected !== id) {
    return <BsBook color="white" size={20} z={10}></BsBook>;
  }

  if (name === 'Playlist' && selected === id) {
    return <AiFillPlayCircle color="white" size={20} z={10}></AiFillPlayCircle>;
  } else if (name === 'Playlist' && selected !== id) {
    return (
      <AiOutlinePlayCircle color="white" size={20} z={10}></AiOutlinePlayCircle>
    );
  }
}

TabIcons.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
};
