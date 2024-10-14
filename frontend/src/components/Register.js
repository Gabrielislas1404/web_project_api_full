import React, { useState } from 'react';
import headerLogo from '../images/headerlogo.svg';
import { Link, useHistory } from 'react-router-dom';
import InfoToolTip from './InfoTooltip';
import * as auth from '../utils/auth';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [open, setOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      auth
        .register(email, password)
        .then((res) => {
          if (!res._id) {
            setIsRegistered(false);
          } else {
            setIsRegistered(true);
          }
          setOpen(true);
          setTimeout(() => {
            history.push('/login');
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
          setOpen(true);
          setIsRegistered(false);
        });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="register">
        <div className="register__header-wrapper">
          <div className="register__header">
            <img src={headerLogo} alt="encabezado" className="register__logo" />
            <Link to="login" className="register__header-register">
              Iniciar sesión
            </Link>
          </div>
          <div className="register__line"></div>
        </div>
        <h2 className="register__title">Regístrate</h2>
        <form onSubmit={handleSubmit} className="register__form">
          <input
            className="register__form-item"
            name="email"
            type="email"
            placeholder="Correo electrónico"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="register__form-item"
            name="password"
            type="password"
            placeholder="Contraseña"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" className="register__button">
            Regístrate
          </button>
        </form>
        <Link className="register__login" to="login">
          ¿Ya eres miembro? Inicia sesión aquí
        </Link>
      </div>
      <InfoToolTip
        open={open}
        isRegistered={isRegistered}
        handleClose={handleClose}
      />
    </>
  );
}
