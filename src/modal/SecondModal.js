// SecondModal.js

import React from 'react';
import './SecondModal.css'; // 스타일 파일 import

const SecondModal = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Second Modal</h2>
        <p>할 수 있다 !!  🔥🔥</p>
      </div>
    </div>
  );
};

export default SecondModal;
