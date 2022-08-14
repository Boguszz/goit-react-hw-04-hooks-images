import Gallery from 'components/Gallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import Information from 'components/Information';

const VideoPage = ({
  video,
  isLoading,
  totalVideo,
  onNextFetch,
  showModal,
  toggleModal,
  openModal,
  title,
  url,
  downloads,
  likes,
  views,
}) => {
  return (
    <>
      {video && <Gallery video={video} openModal={openModal} />}

      {isLoading && <Loader />}

      {video && video.length >= 12 && video.length < totalVideo && (
        <Button onNextFetch={onNextFetch} />
      )}

      {showModal && (
        <Modal onClose={toggleModal} title={title}>
          <Information
            url={url}
            downloads={downloads}
            likes={likes}
            views={views}
            video
          />
        </Modal>
      )}
    </>
  );
};

export default VideoPage;
