/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../assets/styles/components/Footer.scss';
import logo from '../assets/static/user-woman.png';
import whatsapp from '../assets/static/003-whatsapp.png';
import linkedin from '../assets/static/linkedin.png';
import github from '../assets/static/github.png';

const Footer = () => (
  <footer className='Footer'>
    <div className='Footer-container'>
      <nav className='nav--Footer'>
        <div className='logo--Footer'>
          <img src={logo} />
        </div>
        <ul>
          <li><a href='/'>About me</a></li>
          <li><a href='/'>Skills</a></li>
          <li><a href='/'>Proyectos</a></li>
          <li><a href='/'>Experiencia</a></li>
          <li><a href='/'>Contáctame</a></li>
        </ul>
      </nav>
      <div className='nav--social'>
        <ul>
          <li>Follow Me</li>
          <a href='api.whatsapp.com/send?phone=5491173667901'><img className='Footer-img' src={whatsapp} alt='number cellphone' /></a>
          <a href='https://www.linkedin.com/in/digneli-mariet-d%C3%A1vila-ramones-497b9865/'><img className='Footer-img' src={linkedin} alt='linkedin' /></a>
          <a href='https://github.com/dignelidxdx'><img className='Footer-img' src={github} alt='github' /></a>
        </ul>
      </div>
    </div>
    <div className='Footer-design'>
      <p>
        Digneli© Designed with ❤️ by
        {' '}
        <a href='https://twitter.com/DavilaDigneli'>@DavilaDigneli</a>
      </p>
    </div>

  </footer>
);

export default Footer;
