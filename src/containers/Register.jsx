/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import logo from '../assets/static/logo.png';
import '../assets/styles/components/Login.scss';

const Register = (props) => {
    const [form, setValues] = useState ({
        email: '',
        name: '',
        password: '',
    });

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    };
    const handleSubmit = event => {
        event.preventDefault();
        props.registerRequest(form);
        props.history.push('/');
    }
    return (
        <section className="login">
            <section className="login-container">
                <img src={logo} alt="logo-digneli"/>
                <h2>Registrate</h2>
                <form
                    className="login-container__form" 
                    action="" 
                    onSubmit={handleSubmit}>
                    <input 
                        name="name"
                        className="input"
                        type="text" 
                        placeholder="Nombre"
                        onChange={handleInput} />
                    <input 
                        name="email"
                        className="input" 
                        type="text" 
                        id="" 
                        placeholder="Correo"
                        onChange={handleInput} />
                    <input 
                        name="password"
                        className="input"
                        type="password"
                        id="" 
                        placeholder="Contraseña"
                        onChange={handleInput} />
                    <button className="button">Registrarme</button>
                
                </form>

                <p className="login-container__register"><Link to="/inicio_sesion.html">Inicia Sesión</Link> </p>
            </section>
        </section>

    );
}

const mapDispatchToProps = {
    registerRequest,
}

export default connect(null, mapDispatchToProps)(Register);

