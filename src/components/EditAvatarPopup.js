import React from 'react'
import PopupWithForm from './PopupWithForm'

export default function EditProfilePopup (props) {
  const {onUpdateAvatar, isOpen, onClose, stopProp, buttonText} = props;
  const avatar = React.useRef()


  function handleSubmit(evt) {
    evt.preventDefault();

    if (avatar.current.value.length > 2) {
      onUpdateAvatar({avatar: avatar.current.value});
      avatar.current.value = ''
    }
  }

  /* Валидация формы с рефом не настроена, поэтому в valid передается всегда true */

  return  (
    <PopupWithForm
      title={'Обновить аватар'}
      name={'avatar'}
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      stopProp={stopProp}
      onSubmit={handleSubmit}
      valid={true}
    >
      <input
        ref={avatar}
        type="url"
        name="avatar"
        placeholder="Вставьте ссылку на изображение"
        id="avatar"
        className="popup__input popup__input_type_avatar"
        required
      />
    </PopupWithForm>
  )
}
