import { useState, useEffect } from 'react';
import fetchVideos from 'services/videos-api';

const useGetVideos = () => {
  const [query, setQuery] = useState(() => 'summer');
  const [page, setPage] = useState(1);
  const [totalVideo, setTotalVideo] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [video, setVideo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query !== '') {
      setIsLoading(prevIsLoading => !prevIsLoading);

      fetchVideos(query, page)
        .then(({ hits: video, totalHits: total }) => {
          const imagesArray = video.map(
            ({ id, tags, videos, views, downloads, likes }) => ({
              id: id,
              description: tags,
              videos,
              views,
              downloads,
              likes,
            })
          );
          setTotalVideo(total);
          return imagesArray;
        })
        .then(videoArray => {
          if (page === 1) {
            setVideo(videoArray);
          }
          return videoArray;
        })
        .then(videoArray => {
          if (page !== 1) {
            setVideo(prevVideo => [...prevVideo, ...videoArray]);
          }
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(prevIsLoading => !prevIsLoading));
    }
  }, [page, query]);

  const getSearchRequest = query => {
    setQuery(query);
    setPage(1);
  };

  const onNextFetch = () => setPage(prevPage => prevPage + 1);

  return {
    getSearchRequestVideo: getSearchRequest,
    onNextFetchVideo: onNextFetch,
    totalVideo,
    isLoadingVideo: isLoading,
    video,
    error,
  };
};

export default useGetVideos;
