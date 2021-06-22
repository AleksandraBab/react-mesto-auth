import logo from '../images/logo.svg'
import { Link, useLocation, useHistory  } from 'react-router-dom';

function Header (props) {
  const path = useLocation();
  const history = useHistory();

  function signOut(){
    localStorage.removeItem('jwt');
    props.logIn(false)
    history.push('/sign-in');
  }

  return (
      <header className="header page__header">
          <img className="logo" src={logo} alt="Логотип Mesto Russia" />
          <div className="header__text">
            {!props.loggedIn && <Link to={path.pathname === "/sign-in" ? "/sign-up" : "/sign-in"}
              className="header__link">
                {path.pathname === "/sign-in" ? "Регистрация" : "Войти"}
            </Link>}
            {props.loggedIn && <p className="header__text">
                {props.userEmail}
            </p>}
            {props.loggedIn && <p onClick={signOut} className="header__link header__link_type_logout">Выйти</p>}
          </div>
      </header>
  )
}

export default Header
