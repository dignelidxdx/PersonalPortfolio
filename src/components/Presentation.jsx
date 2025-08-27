/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/Presentation.scss';
import profesional from '../assets/static/profesional-photo.png';
import background from '../assets/static/background-computer.jpg';

const Presentation = () => (
  <section className='Presentation-hero'>
    <div className='background'>
      <img src={background} alt='' />
      <div className='background-top' />
    </div>
    <div className='Presentation-container'>
      <div className='Presentation-text'>
        <h3>
          ¡Bienvenido! Soy <strong>Digneli Dávila</strong>
          <br />
          Apasionada por la tecnología y aprendiz constante de su infinito mundo.
          <br />
          Actualmente me desempeño como <strong>Software Engineer</strong>, enfocada en:
          <br />
        </h3>
        <h2>
          <strong>Arquitectura de soluciones</strong><br />
          <strong>APIs y microservicios</strong><br />
          <strong>Bases de datos SQL y NoSQL</strong><br />
          <strong>Diagramas UML funcionales</strong><br />
          <strong>Pruebas unitarias y funcionales</strong><br />
          <strong>Atributos de calidad</strong><br />
          <strong>Uso de prompts de IA</strong>
        </h2>
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

