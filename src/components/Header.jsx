/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo2.png';

const Header = (props) => (
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
              <li><a href='/aboutme'>¿Quién soy?</a></li>
              <li><a href='/skills'>Skills</a></li>
              <li><a href='/blog'>Blog</a></li>
            </ul>
          </div>
          <div className='header__menu'>
            <div className='header__menu--profile'>
              <p tabIndex='0'>Proyectos</p>
            </div>
            <ul>
              <li><a href='/mumi'>Mumi</a></li>
              <li><a href='/cmdt'>CMDT</a></li>
            </ul>
          </div>
          <div className='header__menu'>
            <div className='header__menu--profile'>
              <p tabIndex='0'>Experiencia</p>
            </div>
            <ul>
              <li><a href='/2020'>2020</a></li>
              <li><a href='/2019'>2019</a></li>
              <li><a href='/2018'>2018</a></li>
              <li><a href='/2017'>2017</a></li>
            </ul>
          </div>
          <div className='header__menu'>
            <div className='header__menu--profile'>
              <p tabIndex='0'>Contacto</p>
            </div>
            <ul>
              <li><Link to='/register'>Registrate</Link></li>
              <li><Link to='/login'>Ingresá</Link></li>
              <li><Link to='/contact'>Contáctame</Link></li>
            </ul>
          </div>
        </ol>
      </nav>
    </div>
  </div>

);

export default Header;
