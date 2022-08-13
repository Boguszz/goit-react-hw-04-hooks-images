import PropTypes from 'prop-types';
import { Item } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  description,
  smallImage,
  largeImage,
  openModal,
}) => {
  return (
    <Item onClick={openModal}>
      <img src={smallImage} alt={description} data-large={largeImage} />
    </Item>
  );
};

ImageGalleryItem.prototype = {
  description: PropTypes.string,
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
