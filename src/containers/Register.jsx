/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.png';
import '../assets/styles/components/Login.scss';

const Register = () => (
    <section className="login">
        <section className="login-container">
            <img src={logo} alt="logo-digneli"/>
            <h2>Registrate</h2>
            <form className="login-container__form" action="">
                <input className="input" type="text" placeholder="Nombre" />
                <input className="input" type="text" name="" id="" placeholder="Correo" />
                <input className="input" type="text" name="" id="" placeholder="Contraseña" />
                <button className="button">Registrarme</button>
               
            </form>

            <p className="login-container__register"><Link to="/inicio_sesion.html">Inicia Sesión</Link> </p>
        </section>
    </section>

);

export default Register;

