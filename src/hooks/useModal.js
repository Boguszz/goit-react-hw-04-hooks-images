import { useState } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState(null);
  const [currentImageDescription, setCurrentImageDescription] = useState(null);
  const [currentImageViews, setCurrentImageViews] = useState(null);
  const [currentImageDownloads, setCurrentImageDownloads] = useState(null);
  const [currentImageLikes, setCurrentImageLikes] = useState(null);

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  const openModal = e => {
    if (e.target.nodeName === 'IMG') {
      setShowModal(prevShowModal => !prevShowModal);
      setCurrentImageUrl(e.target.dataset.large);
      setCurrentImageDescription(e.target.alt);
      setCurrentImageViews(e.target.dataset.views);
      setCurrentImageDownloads(e.target.dataset.downloads);
      setCurrentImageLikes(e.target.dataset.likes);
    }
  };

  return {
    openModal,
    toggleModal,
    showModal,
    currentImageUrl,
    currentImageDescription,
    currentImageViews,
    currentImageDownloads,
    currentImageLikes,
  };
};

export default useModal;
