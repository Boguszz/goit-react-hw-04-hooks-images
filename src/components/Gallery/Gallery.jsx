import GalleryItem from 'components/GalleryItem';
import VideoItem from 'components/VideoItem';

import { List } from './Gallery.styled';

const Gallery = ({ images, openModal, video }) => {
  return (
    <List>
      {images &&
        images.map(
          ({
            id,
            description,
            smallImage,
            largeImage,
            views,
            downloads,
            likes,
          }) => (
            <GalleryItem
              key={id}
              description={description}
              smallImage={smallImage}
              largeImage={largeImage}
              openModal={openModal}
              views={views}
              downloads={downloads}
              likes={likes}
            />
          )
        )}

      {video &&
        video.map(item => (
          <VideoItem key={item.id} videoUrl={item.videos.large.url} />
        ))}
    </List>
  );
};

export default Gallery;
