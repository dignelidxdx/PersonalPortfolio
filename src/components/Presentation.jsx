/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/Presentation.scss';
import profesional from '../assets/static/profesional-photo.png';
import background from '../assets/static/background-computer.jpg';

const Presentation = () => (
  <section className='Presentation-hero'>
    <div className='background'>
      <img src={background} alt=""/>
      <div className='background-top'></div>
    </div>
    <div className='Presentation-container'>
      <div className='Presentation-text'>
        <h3>
          Bienvenido! Soy
          {' '}
          <strong>Digneli Dávila</strong>
          <br />
          {' '}
          Estoy apasionada por la tecnología
          {' '}
          <br />
          {' '}
          y soy aprendiz de su infinito mundo.
          <br />
          {' '}
          Actualmente
          <strong> Frontend Developer </strong>
          {' '}
          con  <br /> HTML5, CSS3, JS, React (próximamente)
          <br />
          {' '}
          y
          <strong> Backend Developer</strong>
          {' '}
          con Java, <br /> Spring Boot/Hibernate, MySQL y Postman.

        </h3>
      </div>
      <div className='Presentation_hero-img'>
        <img
          className='Presentation-top'
          src={profesional}
          alt=''
        />
      </div>

    </div>
  </section>

);

export default Presentation;

