import headerLogo from '../images/headerlogo.svg';

function Header({ email, logOutButton }) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={headerLogo} alt="encabezado" className="header__logo" />
        <div className="header__info-wrapper">
          <span className="header__email">{email}</span>
          <p className="header__sign-out" onClick={logOutButton}>
            Cerrar Sesión
          </p>
        </div>
      </div>

      <div className="header__line"></div>
    </header>
  );
}

export default Header;
