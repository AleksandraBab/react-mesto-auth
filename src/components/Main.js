import React from 'react'
import Card from './Card'
import CurrentUserContext from '../contexts/CurrentUserContext'

function Main (props) {
  const {onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onDelClick} = props
  const currentUser = React.useContext(CurrentUserContext)


  return (
      <main className="content">
          <section className="profile section page__section">
            <div
              className="profile__avatar-block"
              onClick={onEditAvatar}
            >
              <img
                className="profile__avatar"
                src={currentUser.avatar}
                alt={currentUser.name}
              />
              <div className="profile__bckgrnd"></div>
            </div>
            <div className="profile__info">
              <div className="profile__row">
                <h1 className="profile__name">{currentUser.name}</h1>
                <button
                  type="button"
                  className="profile__edit-btn"
                  aria-label="Редактировать профиль"
                  onClick={onEditProfile}
                >
                </button>
                </div>
              <p className="profile__caption">{currentUser.about}</p>
            </div>
            <button
              type="button"
              className="profile__add-btn"
              aria-label="Добавить карточку"
              onClick={onAddPlace}
            >
          </button>
          </section>
          <section className="elements section page__section">
            <ul className="elements__grid-items">
              {cards.map((item) => (
                    <Card
                      key={item._id}
                      card={item}
                      onCardClick={onCardClick}
                      onCardLike={onCardLike}
                      onDelClick={onDelClick}
                    />
              ))}
            </ul>
          </section>
      </main>
  )
}

export default Main
