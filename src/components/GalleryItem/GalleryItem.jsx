import { Item } from './GalleryItem.styled';

const GalleryItem = ({
  description,
  smallImage,
  largeImage,
  openModal,
  views,
  downloads,
  likes,
}) => {
  return (
    <Item onClick={openModal}>
      <img
        src={smallImage}
        alt={description}
        data-description={description}
        data-large={largeImage}
        data-views={views}
        data-downloads={downloads}
        data-likes={likes}
      />
    </Item>
  );
};

export default GalleryItem;
