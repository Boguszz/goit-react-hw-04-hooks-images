import PropTypes from 'prop-types';

import Gallery from 'components/Gallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

const HomePage = ({
  images,
  openModal,
  isLoading,
  totalImages,
  onNextFetch,
  showModal,
  toggleModal,
  currentImageDescription,
  currentImageUrl,
  downloads,
  views,
  likes,
}) => {
  return (
    <>
      {images && <Gallery images={images} openModal={openModal} />}

      {isLoading && <Loader />}

      {images && images.length >= 12 && images.length < totalImages && (
        <Button onNextFetch={onNextFetch} />
      )}

      {showModal && (
        <Modal
          onClose={toggleModal}
          currentImageUrl={currentImageUrl}
          currentImageDescription={currentImageDescription}
          downloads={downloads}
          views={views}
          likes={likes}
        />
      )}
    </>
  );
};

HomePage.prototype = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string,
      smallImage: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
      views: PropTypes.number,
      downloads: PropTypes.number,
      likes: PropTypes.number,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  totalImages: PropTypes.number.isRequired,
  onNextFetch: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  currentImageUrl: PropTypes.string,
  currentImageDescription: PropTypes.string,
};

export default HomePage;
