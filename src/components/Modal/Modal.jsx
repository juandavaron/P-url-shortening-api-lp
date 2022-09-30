import React from "react";
import { createPortal } from "react-dom";
import { Button } from "../Button/Button";

function Modal({
  closeModal
}) {

  return createPortal(
    <section className="modal">
      <div className="modal__close" onClick={closeModal}></div>
      <div className="modal__container">
        <div className="modal__info">
          <span>Features</span>
          <span>Pricing</span>
          <span> Resources</span>
        </div>

        <div className="modal__logIn">
          <span>Login</span>
          <Button className='oval modal__btn'>Sing Up</Button>
        </div>
      </div>
    </section>,
    document.getElementById('modal')
  );
};

export { Modal };