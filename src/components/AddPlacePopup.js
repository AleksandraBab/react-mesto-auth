import React from 'react'
import PopupWithForm from './PopupWithForm'

export default function AddPlacePopup (props) {
  const {onAddPlace, isOpen, onClose, stopProp, buttonText} = props;

  const [formValues, setFormValues] = React.useState({
    placeName: '',
    link: ''
  });

  const [formValidity, setFormValidity] = React.useState({
    nameValid: false,
    linkValid: false
  });

  React.useEffect( () => {
      if(!isOpen) {
        setFormValues({
          placeName: '',
          link: ''
        })
      }
  }, [isOpen])

  const handleInputChange = React.useCallback ((evt) => {
    const { name, value } = evt.target

    setFormValues((prevState) => ({
      ...prevState, [name]: value
    }));
  }, [formValues]);


  React.useEffect(() => {
    const isNameValid = formValues.placeName.length > 1;
    const isLinkValid = formValues.link.length > 1;

    setFormValidity({
      nameValid: isNameValid,
      linkValid: isLinkValid
    })
  }, [formValues])

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({name: placeName, link});
  }

  const {placeName, link} = formValues;
  const {nameValid, linkValid} = formValidity;
  const isSubmitAble = nameValid && linkValid;

  return  (
    <PopupWithForm
    title={'Новое место'}
    name={'add'}
    buttonText={buttonText}
    isOpen={isOpen}
    onClose={onClose}
    stopProp={stopProp}
    onSubmit={handleSubmit}
    valid={isSubmitAble}

  >
    <input
      value={placeName}
      onChange={handleInputChange}
      type="text"
      name="placeName"
      placeholder="Название"
      id="place"
      className="popup__input popup__input_type_place"
      required
      minLength="2"
      />
    <input
      value={link}
      onChange={handleInputChange}
      type="url"
      name="link"
      placeholder="Ссылка на картинку"
      id="src"
      className="popup__input popup__input_type_src"
      required
    />
  </PopupWithForm>
  )
}
