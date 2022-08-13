import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  Backdrop,
  ModalContainer,
  Wrapper,
  Title,
  Button,
  Icon,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, currentImageUrl, currentImageDescription }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleClickBackdrop}>
      <ModalContainer>
        <Wrapper>
          {currentImageDescription && <Title>{currentImageDescription}</Title>}
          <Button type="button" onClick={onClose}>
            <Icon />
          </Button>
        </Wrapper>
        <img
          src={currentImageUrl}
          alt={currentImageDescription}
          loading="lazy"
        />
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

Modal.prototype = {
  onClose: PropTypes.func.isRequired,
  currentImageUrl: PropTypes.string,
  currentImageDescription: PropTypes.string,
};

export default Modal;
