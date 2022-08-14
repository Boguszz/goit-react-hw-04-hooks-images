import { Item } from './VideoItem.styled';
import poster from './poster.jpg';

const VideoItem = ({
  videoUrl,
  openModal,
  views,
  downloads,
  likes,
  description,
}) => {
  return (
    <Item onClick={openModal}>
      <video
        height="240"
        preload="auto"
        data-description={description}
        data-large={videoUrl}
        data-views={views}
        data-downloads={downloads}
        data-likes={likes}
        poster={!videoUrl && poster}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Item>
  );
};

export default VideoItem;
