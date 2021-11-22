import React from "react";
import "./Modal.css";

function ModalSuccess({ closeModal }) {
  return (
    <div id="modalContainer">
      <div className="titleCloseBtn">
        <button onClick={() => closeModal(false)}> X </button>
      </div>
      <div className="title">
        <h2 className="h">Заказ успешно выполнен!</h2>
      </div>
      <div className="title">
        <img src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png" />
      </div>
      <div className="body">
        <p>
          Товар будет доставлен в течение <span className="span"> три</span> дня
        </p>
      </div>
      <div className="footer">
        <button onClick={() => closeModal(false)}>Exit</button>
      </div>
    </div>
  );
}

export default ModalSuccess;
