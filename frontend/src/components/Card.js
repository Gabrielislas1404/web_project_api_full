import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import trash from '../images/Trashelement.svg';
function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  function handleClick() {
    onCardClick(card);
  }
  const likesNumber = card.likes.length;

  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = currentUser && card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `elements__trash ${
    isOwn ? 'elements__trash' : 'elements__trash_hidden'
  }`;
  const isLiked =
    currentUser && card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `elements__heart ${
    isLiked ? 'elements__black-heart' : ''
  }`;

  const handleLikeClick = () => {
    onCardLike(card);
  };
  return (
    <div key={card._id} className="elements__container">
      <img
        className="elements__image"
        onClick={handleClick}
        src={card.link}
        alt={card.name}
      />
      <div className="elements__description">
        <h3 className="elements__text">{card.name}</h3>
        <button className="elements__trash">
          <img
            className={cardDeleteButtonClassName}
            onClick={() => onCardDelete(card)}
            src={trash}
            alt="Basura"
          />
        </button>
        <div className="elements__like-wrapper">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <span className="elements__like">{likesNumber}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
