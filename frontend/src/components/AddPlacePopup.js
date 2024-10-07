import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPlaceSubmit({ name, link });
    setName('');
    setLink('');
  };

  return (
    <PopupWithForm
      name={'add-button'}
      title={'Nuevo lugar'}
      buttonTitle={'Crear'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Título"
          minLength="2"
          maxLength="30"
          required
          onChange={(event) => setName(event.target.value)}
          className="title-input-error popup__input popup__input_title"
        />
        <span className="popup__line" id="input__error-name"></span>
        <input
          type="url"
          name="link"
          id="link"
          placeholder="Enlace a la imágen"
          minLength="7"
          required
          onChange={(event) => setLink(event.target.value)}
          className="popup__input popup__input_link"
        />
        <span className="popup__line" id="input__error-link"></span>
      </>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
