import { useContext, useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const { currentUser } = useContext(CurrentUserContext);
  const avatarRef = useRef();

  const isValidUrl = (urlString) => {
    try {
      return Boolean(new URL(urlString));
    } catch (e) {
      return false;
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (!isValidUrl(avatarRef.current.value)) {
      alert("Por favor, introduce una URL válida.");
      return;
    }

    onUpdateAvatar({
      avatar: avatarRef.current.value || currentUser.avatar,
    });
  }

  return (
    <PopupWithForm
      name={"profile-button"}
      title={"Cambiar foto de perfil"}
      buttonTitle={"Guardar"}
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
