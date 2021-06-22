import React from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext'

function Card (props) {

  const {card, onCardClick, onCardLike, onDelClick} = props;

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;

  const isLiked = card.likes.some( element => element._id === currentUser._id);


  return (
    <li
      className="element"
    >
      <div className="element__image-wrapper">
        <img className="element__image" src={card.link} alt={card.name}
          onClick={() => onCardClick(card)}
        />
        <button
          type="button"
          className={`${isOwn ? 'element__delete-btn' : 'element__delete-btn_hidden'}`}
          aria-label="Удалить"
          onClick={() => onDelClick(card)}
        >
        </button>
      </div>
      <div className="element__caption">
        <h2 className="element__heading">{card.name}</h2>
        <div className="element__like">
          <button
            type="button"
            className={`element__like-btn ${isLiked && 'element__like-btn_liked'}`}
            aria-label="Добавить в избранное"
            onClick={() => onCardLike(card)}
            >
          </button>
          <span className="element__likecounter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card
