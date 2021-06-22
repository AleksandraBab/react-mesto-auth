import React from 'react'
import PopupWithForm from './PopupWithForm'

export default function DeletePlacePopup (props) {
  const {onCardDelete, card, onClose, stopProp, buttonText} = props;

  function handleSubmit(evt) {
    evt.preventDefault();

    onCardDelete(card)
  }

  return  (

    <PopupWithForm
      title={'Вы уверены?'}
      name={'del'}
      buttonText={buttonText}
      isOpen={card}
      onClose={onClose}
      stopProp={stopProp}
      onSubmit={handleSubmit}
      valid={true}
    >
    </PopupWithForm>
  )
}
