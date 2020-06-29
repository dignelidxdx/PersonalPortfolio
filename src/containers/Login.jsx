/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/logo.png';
import twitter from '../assets/static/twitter-icon.png';
import google from '../assets/static/google-icon.png';
import '../assets/styles/components/Login.scss';

const Login = () => (
    <section className="login">
    <section className="login-container">
    <img src={logo} alt="logo-digneli"/>
        <h2>Inicia sesión</h2>
        <form className="login-container__form" action="">
            <input className="input" type="text" placeholder="Correo" />
            <input className="form-control input" type="password" name="password" id="password" placeholder="Contraseña" />

            <label for="password">
                <input id="mostrar_contrasena" type="checkbox" name="" id="cbox1" value="checkbox" />Mostrar Contraseña
            </label>
            <br/>
            <button className="button">Iniciar sesión</button>
            <div className="login-container__remember">
                <label for="">
                    <input type="checkbox" name="" id="cbox1" value="checkbox" />Recuerdame
                </label>
                <a href="">Olvidé mi contraseña</a>
            </div>
        </form>
        <section className="login-container__social">
            <div><img width="20px" src={google} alt="" />Inicia sesión con Google</div>
            <div><img width="20px" src={twitter} alt="" />Inicia sesión con Twitter</div>
        </section>
        <p className="login-container__register">No tienes ninguna cuenta <Link to='/register'>Regístrate</Link> </p>
    </section>
</section>

);

export default Login;

