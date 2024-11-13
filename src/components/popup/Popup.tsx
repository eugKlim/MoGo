import React, { ReactNode } from 'react';
import Modal from 'react-modal';
import './popup.scss';

Modal.setAppElement('#root');

interface ICustomModal {
  isOpen: boolean;
  onRequestClose: () => void;
  children: ReactNode;
}

function CustomModal({ isOpen, onRequestClose, children }: ICustomModal) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={300}
      overlayClassName={{
        base: 'modal-overlay',
        afterOpen: 'modal-overlay-open',
        beforeClose: 'modal-overlay-close',
      }}
      className={{
        base: 'modal-content',
        afterOpen: 'modal-content-open',
        beforeClose: 'modal-content-close',
      }}
    >
      <div className="popup dark:bg-slate-700 text-black p-10 dark:text-white overflow-y-auto">
        <button
          className="popup-close-button"
          onClick={onRequestClose}
          aria-label="close popup"
        >
          ✕
        </button>
        {children}
      </div>
    </Modal>
  );
}

export default CustomModal;
