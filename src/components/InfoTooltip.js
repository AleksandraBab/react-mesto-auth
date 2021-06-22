import React from 'react'

export default function InfoTooltip (props) {
  const {isOpen, onClose, stopProp, isRegistered} = props;

  return  (
    <div className={`popup ${isOpen && 'popup_opened'}`}
      onClick={onClose}
    >
    <div className="popup__container"
      onClick={stopProp}
    >
      <button
        type="button"
        className={`popup__close-btn`}
        aria-label="Закрыть без сохранения"
        onClick={onClose}
      >
      </button>
      <div className={`popup__img ${isRegistered ? 'popup__img_type_success' : 'popup__img_type_bad'}`}></div>
      <h2 className="popup__heading popup__heading_type_reg">{isRegistered ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
    </div>
  </div>

  )
}
