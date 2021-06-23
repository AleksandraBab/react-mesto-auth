import React from 'react'
import Form from './Form'

function PopupWithForm (props) {
  const {title, name, buttonText, children, isOpen, onClose, stopProp, onSubmit, valid} = props;

  return  (
  <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}
    onClick={onClose}
  >
    <div className="popup__container"
      onClick={stopProp}
    >
      <button
        type="button"
        className={`popup__close-btn popup__close-btn_place_${name}`}
        aria-label="Закрыть без сохранения"
        onClick={onClose}
      >
      </button>
      <Form
        title={title}
        name={name}
        onSubmit={onSubmit}
        buttonText={buttonText}
        valid={valid}
        children={children}
      />
    </div>
  </div>
  )
}

export default PopupWithForm
