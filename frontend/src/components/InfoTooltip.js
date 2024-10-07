import React from 'react';
import registerok from '../images/registered.png';
import registererror from '../images/error.png';

export default function InfoToolTip({ open, isRegistered, handleClose }) {
  return (
    <div className={`popup popup_register ${open ? 'popup_hide' : ''}`}>
      <div className="popup__overlay"></div>

      <div className="popup__wrapper_register">
        <img
          className="popup__image-register"
          src={isRegistered ? registerok : registererror}
          alt="status"
        />

        <button
          type="button"
          className="popup__close-button"
          onClick={handleClose}
        ></button>

        <p className="popup_register-title">
          {isRegistered
            ? '¡Correcto! Ya estás registrado.'
            : 'Uy, algo salió mal. Por favor, inténtalo de nuevo.'}
        </p>
      </div>
    </div>
  );
}
