import React from 'react'
import Form from './Form'
import { useHistory } from 'react-router-dom';
import * as auth from './auth'

function Login (props) {
  const {title, name, buttonText, logIn} = props;

  const history = useHistory();

  const [formValues, setFormValues] = React.useState({
    email: '',
    password: ''
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target

    setFormValues((prevState) => ({
      ...prevState, [name]: value
    }));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const { email, password } = formValues;

    if (!password || !email){
      return;
    }
    auth.authorize(password, email)
    .then((data) => {
      localStorage.setItem('jwt', data.token);
      setFormValues({
        email: '',
        password: ''
      })
      logIn(true);
      history.push('/');
    })
    .catch(err => console.log(err));

  }

  return  (
    <div className="enter">
      <Form
        title={title}
        name={name}
        onSubmit={onSubmit}
        buttonText={buttonText}
        valid='true'
        type="login"
      >
        <input
          type="url"
          name="email"
          placeholder="Email"
          id="email"
          className="popup__input popup__input_type_login"
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          id="password"
          className="popup__input popup__input_type_login"
          onChange={handleInputChange}
          required
        />
      </Form>
    </div>


  )
}

export default Login
