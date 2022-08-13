import PropTypes from 'prop-types';
import GalleryItem from 'components/GalleryItem';
import VideoItem from 'components/VideoItem';

import { List } from './Gallery.styled';

const Gallery = ({ images, openModal, video }) => {
  return (
    <List>
      {images &&
        images.map(({ id, description, smallImage, largeImage }) => (
          <GalleryItem
            key={id}
            description={description}
            smallImage={smallImage}
            largeImage={largeImage}
            openModal={openModal}
          />
        ))}

      {video &&
        video.map(item => (
          <VideoItem key={item.id} videoUrl={item.videos.large.url} />
        ))}
    </List>
  );
};

Gallery.prototype = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string,
      smallImage: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;
