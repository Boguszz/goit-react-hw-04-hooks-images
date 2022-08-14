import { RiDownload2Fill } from 'react-icons/ri';
import { IoEyeSharp } from 'react-icons/io5';
import { AiFillLike } from 'react-icons/ai';

import { Popup, List, Item, Text } from './Information.styled';

const Information = ({ url, description, downloads, views, likes, video }) => {
  return (
    <div>
      {!video && <img src={url} alt={description} loading="lazy" />}

      {video && (
        <video width="100%" height="100%" controls preload="auto">
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <Popup>
        <List>
          <Item>
            <RiDownload2Fill />
            <Text>{downloads}</Text>
          </Item>
          <Item>
            <IoEyeSharp />
            <Text>{views}</Text>
          </Item>
          <Item>
            <AiFillLike />
            <Text>{likes}</Text>
          </Item>
        </List>
      </Popup>
    </div>
  );
};

export default Information;
