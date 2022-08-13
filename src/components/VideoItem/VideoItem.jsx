import { Item } from './VideoItem.styled';

const VideoItem = ({ videoUrl }) => {
  return (
    <Item>
      <video width="320" height="240" controls preload="auto">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Item>
  );
};

export default VideoItem;
