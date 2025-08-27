/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo2.png';

const Header = (props) => {

  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <div className='Header shadow mb-5 rounded'>
      <div className='Header-container'>
        <div className='Header-logo'>
          <button className='Header_toggle-button' onClick={props.drawerClickHandler}>
            <div className='Header_toggle-button_line' />
            <div className='Header_toggle-button_line' />
            <div className='Header_toggle-button_line' />
          </button>
          <Link to='/'>
            <img height='60' src={logo} alt='' />
          </Link>
        </div>
        <nav className='Header-menu'>
          <ol>
            <div className='header__menu'>
              <div className='header__menu--profile'>
                <p tabIndex='0'>Conóceme</p>
              </div>
              <ul>
                <li><a href='/myhistory'>Mi Historia</a></li>
                <li><a href='/aboutme'>Sobre mí</a></li>
                <li><a href='/skills'>Habilidades</a></li>
              </ul>
            </div>
            <div className='header__menu'>
              <div className='header__menu--profile'>
                <p tabIndex='0'><Link to='/blog'>Blog</Link></p>
              </div>
            </div>
            <div className='header__menu'>
              <div className='header__menu--profile'>
                <p tabIndex='0'>Proyectos</p>
              </div>
              <ul>
                <li><a href='/project/mumi'>Mumi</a></li>
                <li><a href='/project/cmdt'>CMDT</a></li>
              </ul>
            </div>
            <div className='header__menu'>
              <div className='header__menu--profile'>
                <p tabIndex='0'>Experiencia</p>
              </div>
              <ul>
                <li><a href='/experience/2020'>2020</a></li>
                <li><a href='/experience/2019'>2019</a></li>
                <li><a href='/experience/2018'>2018</a></li>
                <li><a href='/experience/2017'>2017</a></li>
              </ul>
            </div>
            <div className='header__menu'>
              <div className='header__menu--profile'>
                <p tabIndex='0'>Contacto</p>
              </div>
              <ul>
                {hasUser ?
                  <li><a href='/'>{user.name}</a></li> :
                  null}
                {hasUser ?
                  <li><a onClick={handleLogout} href='/'>Cerrar Sesión</a></li> :
                  <li><Link to='/login'>Ingresá</Link></li>}
                {hasUser ?
                  null :
                  <li><Link to='/register'>Registrate</Link></li>}
                <li><Link to='/contact'>Contáctame</Link></li>
              </ul>
            </div>
          </ol>
        </nav>
      </div>
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
