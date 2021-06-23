import React from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext'
import PopupWithForm from './PopupWithForm'

export default function EditProfilePopup (props) {
  const {onUpdateUser, isOpen, onClose, stopProp, buttonText} = props;

  const currentUser = React.useContext(CurrentUserContext);

  const [formValues, setFormValues] = React.useState({
    userName: '',
    caption: ''
  });

  const [formValidity, setFormValidity] = React.useState({
    nameValid: true,
    descValid: true
  });

  React.useEffect(() => {
    setFormValues({
      userName: currentUser.name,
      caption: currentUser.about
    })
  }, [currentUser, isOpen])

  React.useEffect(() => {
    const isUserNameValid = formValues.userName.trim().length > 1;
    const isCaptionValid = formValues.caption.trim().length > 1;

    setFormValidity({
      nameValid: isUserNameValid,
      descValid: isCaptionValid
    })
  }, [formValues])


  const handleInputChange = React.useCallback ((evt) => {
    const { name, value } = evt.target

    setFormValues((prevState) => ({
      ...prevState, [name]: value
    }));
  }, [formValues]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({name: userName, about: caption});
  }

  const {userName, caption} = formValues;
  const {nameValid, descValid} = formValidity;
  const isSubmitAble = nameValid && descValid;

  return  (
    <PopupWithForm
      title={'Редактировать профиль'}
      name={'edit'}
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      stopProp={stopProp}
      onSubmit={handleSubmit}
      valid={isSubmitAble}
    >
      <input
          value={userName}
          onChange={handleInputChange}
          type="text"
          name="userName"
          placeholder="Введите имя"
          id="name"
          className={`popup__input popup__input_type_name ${nameValid ? '' : 'popup__input_type_error'}`}
          required minLength="2"
          maxLength="40"
      />
      <input
          value={caption}
          onChange={handleInputChange}
          name="caption"
          type="text"
          placeholder="Введите профессию"
          id="caption"
          className={`popup__input popup__input_type_caption ${descValid ? '' : 'popup__input_type_error'}`}
          required minLength="2"
          maxLength="200"
      />

    </PopupWithForm>

  )
}
