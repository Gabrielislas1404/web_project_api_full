import React from 'react';
function PopupWithForm({
  name,
  title,
  buttonTitle,
  content,
  buttonClass,
  modifier,
  isOpen,
  onClose,
  onSubmit,
  children,
}) {
  return (
    <>
      <div className={`popup popup_${name} ${isOpen ? 'popup_hide' : ''} `}>
        <div className="popup__overlay"></div>
        <form
          className={`popup__content popup__content_${content}`}
          onSubmit={onSubmit}
          noValidate
        >
          <button
            type="button"
            className="popup__close-button"
            onClick={onClose}
          ></button>

          <h4 className={`popup__title popup__title_${modifier}`}>{title}</h4>
          {children}
          <button
            className={`popup__save-button popup__save-button_${buttonClass}`}
            type="submit"
          >
            {buttonTitle}
          </button>
        </form>
      </div>
    </>
  );
}

export default PopupWithForm;
