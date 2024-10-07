import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name={'profile-button'}
      title={'Cambiar foto de perfil'}
      buttonTitle={'Guardar'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__wrapper">
        <input
          ref={avatarRef}
          type="url"
          name="picture"
          id="popup__avatar-input"
          placeholder="Imágen de perfil"
          minLength="7"
          required
          className="popup__input popup__input_link"
        />
        <span className="popup__line" id="input__error-picture"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
