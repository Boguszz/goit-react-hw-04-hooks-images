import Gallery from 'components/Gallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import Information from 'components/Information';

const HomePage = ({
  images,
  openModal,
  isLoading,
  totalImages,
  onNextFetch,
  showModal,
  toggleModal,
  title,
  url,
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
        <Modal onClose={toggleModal} title={title}>
          <Information
            url={url}
            description={title}
            downloads={downloads}
            likes={likes}
            views={views}
          />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
