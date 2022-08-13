import PropTypes from 'prop-types';
import { Item } from './GalleryItem.styled';

const GalleryItem = ({ description, smallImage, largeImage, openModal }) => {
  return (
    <Item onClick={openModal}>
      <img src={smallImage} alt={description} data-large={largeImage} />
    </Item>
  );
};

GalleryItem.prototype = {
  description: PropTypes.string,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default GalleryItem;
