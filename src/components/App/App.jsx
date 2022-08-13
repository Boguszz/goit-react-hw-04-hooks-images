import { Routes, Route } from 'react-router-dom';

import useGetImages from 'hooks/useGetImages';
import useGetVideos from 'hooks/useGetVideos';
import useModal from 'hooks/useModal';

import Header from 'components/Header';
import HomePage from 'pages/HomePage';
import VideoPage from 'pages/VideoPage';

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

  const {
    onNextFetchVideo,
    totalVideo,
    isLoadingVideo,
    video,
    getSearchRequestVideo,
  } = useGetVideos();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header images={images} getSearchRequest={getSearchRequest} />
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
            </>
          }
        />

        <Route
          path="/video"
          element={
            <>
              <Header
                images={images}
                getSearchRequest={getSearchRequestVideo}
              />
              <VideoPage
                video={video}
                isLoading={isLoadingVideo}
                totalVideo={totalVideo}
                onNextFetch={onNextFetchVideo}
              />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
