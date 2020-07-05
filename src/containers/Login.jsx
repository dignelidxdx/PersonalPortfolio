/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import logo from '../assets/static/logo.png';
import twitter from '../assets/static/twitter-icon.png';
import google from '../assets/static/google-icon.png';
import '../assets/styles/components/Login.scss';

const Login = (props) => { 

    const [form, setValues] = useState({
        email: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }
    
    return (
        <section className="login">
        <section className="login-container">
        <img src={logo} alt="logo-digneli"/>
            <h2>Inicia sesión</h2>
            <form className="login-container__form" action="" onSubmit={handleSubmit}>
                <input 
                    name="email"
                    className="input" 
                    type="text" 
                    placeholder="Correo"
                    onChange={handleInput}
                    />
                <input 
                    name="password" 
                    className="input" 
                    type="password" 
                    id="password" 
                    placeholder="Contraseña" 
                    onChange={handleInput}
                    />

                <label for="password">
                    <input 
                    id="mostrar_contrasena" 
                    type="checkbox" 
                    name="" 
                    id="cbox1" 
                    value="checkbox" />Mostrar Contraseña
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

    )

};

const mapDispatchToProps = {
    loginRequest,
}

export default connect(null, mapDispatchToProps)(Login);

