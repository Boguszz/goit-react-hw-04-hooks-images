import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

import useGetImages from 'hooks/useGetImages';
import useModal from 'hooks/useModal';

function App() {
  const {
    getSearchRequest,
    onNextFetch,
    totalImages,
    isLoading,
    images,
    error,
  } = useGetImages();

  const {
    openModal,
    toggleModal,
    showModal,
    currentImageUrl,
    currentImageDescription,
  } = useModal();

  return (
    <>
      <Searchbar onSubmit={getSearchRequest} />

      {images && <ImageGallery images={images} openModal={openModal} />}

      {isLoading && <Loader />}

      {images && images.length >= 12 && images.length < totalImages && (
        <Button onNextFetch={onNextFetch} />
      )}

      {showModal && (
        <Modal
          onClose={toggleModal}
          currentImageUrl={currentImageUrl}
          currentImageDescription={currentImageDescription}
        />
      )}

      {error && <p>{error}</p>}
    </>
  );
}

export default App;
