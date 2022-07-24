import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = props => {
  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        props.onClose();
      }
    },
    [props]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      props.onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>{props.children}</ModalContent>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
