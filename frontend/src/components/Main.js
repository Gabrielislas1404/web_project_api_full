import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import '../blocks/profile.css';
import Card from './Card';
import ImagePopup from './ImagePopup';

function Main({
  cards,
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick,
  onClose,
  selectedCard,
  onCardLike,
  onCardDelete,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <section className="profile">
        <div className="profile__picture-wrapper">
          <div className="profile__picture-overlay"></div>
          <img
            src={currentUser?.avatar}
            alt="foto de perfil"
            className="profile__picture"
          />
          <button
            className="profile__picture-button"
            onClick={onEditAvatarClick}
          ></button>
        </div>

        <div className="profile__container">
          <h1 className="profile__name">{currentUser?.name}</h1>
          <button
            type="button"
            className="profile__button"
            onClick={onEditProfileClick}
          ></button>
          <h2 className="profile__about-me">{currentUser?.about}</h2>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlaceClick}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              imagePopup={selectedCard}
              onCardClick={onCardClick}
              onClose={onClose}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            ></Card>
          );
        })}
      </section>

      {selectedCard && (
        <ImagePopup selectedCard={selectedCard} onClose={onClose} />
      )}
    </>
  );
}

export default Main;
