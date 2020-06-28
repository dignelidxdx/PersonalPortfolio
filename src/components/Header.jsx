/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */

import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo2.png';

const Header = (props) => (
  <div className='Header'>
    <div className='Header-container'>
      <div className='Header-logo'>
        <button className='Header_toggle-button' onClick={props.drawerClickHandler}>
          <div className='Header_toggle-button_line' />
          <div className='Header_toggle-button_line' />
          <div className='Header_toggle-button_line' />
        </button>
        <img height='60' src={logo} alt='' />
      </div>
      <nav className='Header-menu'>
        <ol>
          <div className='header__menu'>
            <div className='header__menu--profile'>
              <p tabIndex='0'>¿Quién soy?</p>
            </div>
            <ul>
              <li><a href='/'>Mi Historia</a></li>
              <li><a href='/'>Conóceme</a></li>
              <li><a href='/'>Skills</a></li>
            </ul>
          </div>
          <div className='header__menu'>
            <div className='header__menu--profile'>
              <p tabIndex='0'>Proyectos</p>
            </div>
            <ul>
              <li><a href='/'>Mumi</a></li>
              <li><a href='/'>CMDT</a></li>
            </ul>
          </div>
          <div className='header__menu'>
            <div className='header__menu--profile'>
              <p tabIndex='0'>Experiencia</p>
            </div>
            <ul>
              <li><a href='/'>2020</a></li>
              <li><a href='/'>2019</a></li>
              <li><a href='/'>2018</a></li>
              <li><a href='/'>2017</a></li>
            </ul>
          </div>
          <div className='header__menu'>
            <div className='header__menu--profile'>
              <p tabIndex='0'>Contáctame</p>
            </div>
            <ul>
              <li><a href='/'>Registrate</a></li>
              <li><a href='/'>Solo Mensaje</a></li>
            </ul>
          </div>
        </ol>
      </nav>
    </div>
  </div>

);

export default Header;
