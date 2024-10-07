import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useContext, useEffect, useState } from 'react';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser?.name);
    setDescription(currentUser?.about);
  }, [currentUser]);

  const handleInputName = (event) => {
    setName(event.target.value);
  };

  const handleInputDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name={'edit-profile'}
      title={'Edital perfil'}
      buttonTitle={'Guardar'}
      onSubmit={handleSubmit}
    >
      <>
        <input
          type="text"
          name="name"
          id="input-name"
          placeholder="Nombre"
          minLength="2"
          maxLength="40"
          onChange={handleInputName}
          className="popup__input popup__input_name"
        />
        <span className="popup__line" id="input__error-name"></span>
        <input
          type="text"
          name="occupation"
          id="occupation"
          placeholder="Acerca de mí"
          minLength="2"
          maxLength="200"
          onChange={handleInputDescription}
          className="popup__input popup__input_occupation"
        />
        <span className="popup__line" id="input__error-occupation"></span>
      </>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
