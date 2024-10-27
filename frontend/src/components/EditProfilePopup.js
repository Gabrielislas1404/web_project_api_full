import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext, useEffect, useState } from "react";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (name.length < 5) {
      alert("El nombre debe tener al menos 5 caracteres");
      return;
    }

    if (description.length < 5) {
      alert("La descripción debe tener al menos 2 caracteres");
      return;
    }

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
      name={"edit-profile"}
      title={"Edital perfil"}
      buttonTitle={"Guardar"}
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
          min={5}
        />
        <span className="popup__line" id="input__error-name"></span>
        <input
          min={5}
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
