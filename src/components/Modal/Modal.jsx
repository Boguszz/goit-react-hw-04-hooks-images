import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, Wrapper, Header, Title, Button, Icon } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, title, children }) => {
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
      <Wrapper>
        <Header>
          {title && <Title>{title}</Title>}
          <Button type="button" onClick={onClose}>
            <Icon />
          </Button>
        </Header>
        {children}
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
