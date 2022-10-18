import React from 'react';
import AppModal from 'react-modal';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

const ConfirmModal = (props: Props) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transition: 'all .5s ease',
      zIndex: 9999,
      marginRight: '-50%',
      width: 350,
      padding: 20,
      height: 'auto',
      overflow: 'visible',
      transform: 'translate(-50%, -50%)',
      border: 'none',
    },
  };

  AppModal.setAppElement('#root');

  return (
    <AppModal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
      contentLabel="Product Modal"
      className="confirmation_modal"
    >
      {props.children}
    </AppModal>
  );
};

export default ConfirmModal;
