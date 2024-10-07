import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import headerLogo from '../images/headerlogo.svg';
import * as auth from '../utils/auth';

export default function Login({ setIsLogged, email, setEmail }) {
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      return;
    }
    auth
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setIsLogged(true);
          history.push('/home');
        }
      })
      .catch(console.log);
  };

  return (
    <div className="login">
      <div className="login__header-wrapper">
        <div className="login__header">
          <img src={headerLogo} alt="encabezado" className="login__logo" />
          <Link to="register" className="login__header-register">
            Regístrate
          </Link>
        </div>
        <div className="login__line"></div>
      </div>
      <h2 className="login__title">Inicia Sesión</h2>
      <form onSubmit={handleSubmit} className="login__form">
        <input
          className="login__form-item"
          name="email"
          type="email"
          placeholder="Correo electrónico"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="login__form-item"
          name="password"
          type="password"
          placeholder="Contraseña"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" className="login__button">
          Inicia Sesión
        </button>
      </form>
      <Link className="login__register" to="register">
        ¿Aún no eres miembro? Regístrate aquí
      </Link>
    </div>
  );
}
