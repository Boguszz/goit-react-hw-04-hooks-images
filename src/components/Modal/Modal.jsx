import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { RiDownload2Fill } from 'react-icons/ri';
import { IoEyeSharp } from 'react-icons/io5';
import { AiFillLike } from 'react-icons/ai';

import {
  Backdrop,
  Wrapper,
  Header,
  Title,
  Button,
  Icon,
  Popup,
  List,
  Item,
  Text,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({
  onClose,
  currentImageUrl,
  currentImageDescription,
  downloads,
  views,
  likes,
}) => {
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
          {currentImageDescription && <Title>{currentImageDescription}</Title>}
          <Button type="button" onClick={onClose}>
            <Icon />
          </Button>
        </Header>

        <img
          src={currentImageUrl}
          alt={currentImageDescription}
          loading="lazy"
        />

        <Popup>
          <List>
            <Item>
              <RiDownload2Fill />
              <Text>{downloads}</Text>
            </Item>
            <Item>
              <IoEyeSharp />
              <Text>{views}</Text>
            </Item>
            <Item>
              <AiFillLike />
              <Text>{likes}</Text>
            </Item>
          </List>
        </Popup>
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
