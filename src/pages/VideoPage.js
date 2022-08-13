import PropTypes from 'prop-types';

import Gallery from 'components/Gallery';
import Button from 'components/Button';
import Loader from 'components/Loader';

const VideoPage = ({ video, isLoading, totalVideo, onNextFetch }) => {
  return (
    <>
      {video && <Gallery video={video} />}

      {isLoading && <Loader />}

      {video && video.length >= 12 && video.length < totalVideo && (
        <Button onNextFetch={onNextFetch} />
      )}
    </>
  );
};

export default VideoPage;
