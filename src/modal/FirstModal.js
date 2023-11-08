import React from 'react';
import './FirstModal.css';
import * as S from '../shared/ButtonStyle'

const FirstModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>First Modal</h2>
        <p>화이팅 🔥🔥</p>
        <div style={{marginLeft:"140px"}}>
        <S.Small color = "white" onClick={onClose}>확인</S.Small>
        <S.Small backgroundColor = "black" onClick={onClose}>취소</S.Small>
        </div>
      </div>
    </div>
  );
};

export default FirstModal;