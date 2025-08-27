/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/Education.scss';
import '../assets/styles/components/WorkExperience.scss';
import '../assets/styles/components/Project.scss';

const Education = () => (
  <section className='Education'>
    <h4 className='Education-ability'>Educación</h4>
    <hr />
    <div className='Education-container'>
    <article className='Education-title'>
        
        <div className='Education-title-detail'>
          <p>
            <strong>Desarrolladora en GO</strong>
            {' '}
            en
            {' '}
            <strong>Digital House - Mercado Libre</strong>
            {' '}
          </p>
          <p className='Education-data'>
            <small>
              <strong>Fecha: </strong>
              {' '}
              15/11/2021
              {' '}
              <strong> | Hasta: </strong>
              21/01/2022
              {' '}
              <strong> | Duración: </strong>
              360 HS
              {' '}
            </small>
            <br />
            <small>
              <strong>Modalidad: </strong>
              {' '}
              Online
              {' '}
            </small>
            {' '}
          </p>
          <div className='Education-description'>
            <p>
              Fue una experiencia enriquecedora además que aprender un montón con varios profesionales tanto de DigitalHouse para profundizar el lenguaje como de parte de profesionales de Mercado Libre como fue la calidad del software, infraestructura, sistemas distribuidos, etc.
            </p>
            <div className='Education-description_mini'>
              <p>
                Para ver logros has <a href='/'> Click acá </a>
                {' '}
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className='Education-title'>
       
        <div className='Education-title-detail'>
          <p>
            <strong>Desarrolladora en JAVA</strong>
            {' '}
            en
            {' '}
            <strong>ADA</strong>
            {' '}
          </p>
          <p className='Education-data'>
            <small>
              <strong>Fecha: </strong>
              {' '}
              12/02/2020
              {' '}
              <strong> | Hasta: </strong>
              13/11/2020
              {' '}
            </small>
            <br />
            <small>
              <strong>Modalidad: </strong>
              {' '}
              Online
              {' '}
            </small>
            {' '}
          </p>
          <div className='Education-description'>
            <p>
              Mi experiencia en ADA a sido muy satisfactoria, además de conocer compañeras increibles de quienes aprendes mucho y además adquieres habilidad para trabajar en equipo. He aprendido desde POO, procedural, algoritmos hasta conectar tu proyecto a una base de datos usando Spring Boot.
            </p>
            <div className='Education-description_mini'>
              <p>
                Para ver logros has <a href='/'> Click acá </a>
                {' '}
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className='Education-title'>
        
        <div className='Education-title-detail'>
          <p>
            <strong>Escuela de Programación y Desarrollo de Software</strong>
            {' '}
            en
            {' '}
            <strong>Platzi</strong>
            {' '}
          </p>
          <p className='Education-data'>
            <small>
              <strong>Fecha: </strong>
              {' '}
              20/06/2019
              {' '}
              <strong> | Hasta: </strong>
              Actualidad
              {' '}
            </small>
            <br />
            <small>
              <strong>Modalidad: </strong>
              {' '}
              Online
              {' '}
            </small>
            {' '}
          </p>
          <div className='Education-description'>
            <p>
              Nunca creí que con una modalidad solo online y estableciendo estrictamente tus horarios de estudios ibas a llegar lejos, aprendes a ser autodidacta cuando te apasionas con algo, en mí caso fue con JavaScript. El mundo es tan amplío que siempre me da curiosidad por aprender más y más. Actualmente aprendiendo otros lenguajes backend, AWS, almacenamiento en la nube.
            </p>
            <div className='Education-description_mini'>
              <p>
                Para ver logros has  <a href='/'> Click acá </a>
                {' '}
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className='Education-title'>
       
        <div className='Education-title-detail'>
          <p>
            <strong>Ingeniera Industrial</strong>
            {' '}
            en
            {' '}
            <strong>UNEFM - Venezuela</strong>
            {' '}
          </p>
          <p className='Education-data'>
            <small>
              <strong>Fecha: </strong>
              {' '}
              24/10/2012
              {' '}
              <strong> | Hasta: </strong>
              31/11/2017
              {' '}
            </small>
            <br />
            <small>
              <strong>Modalidad: </strong>
              {' '}
              Presencial
              {' '}
            </small>
            {' '}
          </p>
          <div className='Education-description'>
            <p>
              Me prepare como profesional en el área de ingeniería donde la experiencia fue extremadamente satisfactoria. Todas las herramientas que adquirí me ayudo para seguir desarrollandome como profesional en el mundo IT.
            </p>
            <div className='Education-description_mini'>
              <p>
                Para ver logros has <a href='/'> Click acá </a>
                {' '}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>

  </section>

);

export default Education;