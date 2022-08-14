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
    url,
    title,
    views,
    downloads,
    likes,
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
                title={title}
                url={url}
                views={views}
                downloads={downloads}
                likes={likes}
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
                showModal={showModal}
                toggleModal={toggleModal}
                openModal={openModal}
                title={title}
                url={url}
                views={views}
                downloads={downloads}
                likes={likes}
              />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
