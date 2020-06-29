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
        <figure className='Education-title-imageContainer'>
          <img className='Education-title-image' src='' />
        </figure>
        <div className='Education-title-detail'>
          <p>
            <strong>Desarrolladora JAVA</strong>
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
              <strong> - Hasta: </strong>
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
          <p className='Education-description'>
            Mi experiencia en ADA a sido muy satisfactoria, además de conocer chicas increibles de quienes aprendes mucho y además adquieres habilidad para trabajar en equipo. He aprendido desde POO, procedural, algoritmos hasta conectar tu proyecto a una base de datos usando Spring Boot.
            <div className='Education-description_mini'>
              <p>
                Para ver habilidades has <a href='/'> Click acá </a>
                {' '}
              </p>
            </div>

          </p>
        </div>
      </article>
      <article className='Education-title'>
        <figure className='Education-title-imageContainer'>
          <img className='Education-title-image' src='' />
        </figure>
        <div className='Education-title-detail'>
          <p>
            <strong>Escuela de JavaScript</strong>
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
              <strong> - Hasta: </strong>
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
          <p className='Education-description'>
            Nunca creí que con una modalidad solo online y estableciendo estrictamente tus horarios de estudios ibas a llegar lejos, aprendes a ser autodidacta cuando te apasionas con algo, en mí caso fue con JavaScript. El mundo es tan amplío que siempre me da curiosidad por aprender más y más.
            <div className='Education-description_mini'>
              <p>
                Para ver habilidades has  <a href='/'> Click acá </a>
                {' '}
              </p>
             
            </div>
          </p>
        </div>
      </article>
      <article className='Education-title'>
        <figure className='Education-title-imageContainer'>
          <img className='Education-title-image' src='' />
        </figure>
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
              <strong> - Hasta: </strong>
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
          <p className='Education-description'>
            Me prepare como profesional en el área de ingeniería donde la experiencia fue extremadamente satisfactoria. Todas las herramientas que adquirí me ayudo para seguir desarrollandome como profesional en el mundo IT.
            <div className='Education-description_mini'>
              <p>
                Para ver logros has <a href='/'> Click acá </a>
                {' '}
              </p>
            </div>
          </p>
        </div>
      </article>
    </div>

  </section>

);

export default Education;