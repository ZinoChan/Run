import React from 'react';
import AppModal from 'react-modal';



const Modal = (props) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      position: 'fixed',
      transition: 'all .5s ease',
      zIndex: 9999,
      marginRight: '-50%',
      width: '60%',
      height: 'auto',
      overflow: 'visible',
      transform: 'translate(-50%, -50%)'
    }
  };

  AppModal.setAppElement('#root');

  return (
    <AppModal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
        contentLabel="Product Modal"
    >
      {props.children}
    </AppModal>
  );
};

export default Modal;