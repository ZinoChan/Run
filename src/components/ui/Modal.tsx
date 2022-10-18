import React from 'react';
import AppModal from 'react-modal';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, closeModal, children }: Props) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transition: 'all .5s ease',
      zIndex: 9999,
      marginRight: '-50%',
      width: '60%',
      height: 'auto',
      overflow: 'visible',
      transform: 'translate(-50%, -50%)',
    },
  };

  AppModal.setAppElement('#root');

  return (
    <AppModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      contentLabel="Product Modal"
    >
      {children}
    </AppModal>
  );
};

export default Modal;
