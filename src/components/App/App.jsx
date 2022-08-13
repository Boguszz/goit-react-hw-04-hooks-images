import { Routes, Route } from 'react-router-dom';
import useGetImages from 'hooks/useGetImages';
import useModal from 'hooks/useModal';

import Header from 'components/Header';
import HomePage from 'pages/HomePage';

function App() {
  const { onNextFetch, totalImages, isLoading, images, getSearchRequest } =
    useGetImages();
  const {
    openModal,
    toggleModal,
    showModal,
    currentImageUrl,
    currentImageDescription,
  } = useModal();

  return (
    <>
      <Header images={images} getSearchRequest={getSearchRequest} />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              images={images}
              openModal={openModal}
              isLoading={isLoading}
              totalImages={totalImages}
              onNextFetch={onNextFetch}
              showModal={showModal}
              toggleModal={toggleModal}
              currentImageDescription={currentImageDescription}
              currentImageUrl={currentImageUrl}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
