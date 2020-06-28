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
            Tengo una experiencia increible cursando en ADA, donde hemos obtenido prácticas en:
            <div className='Education-description_mini'>
              <p>
                Para ver habilidades has
                {' '}
              </p>
              <a href='/'> Click acá </a>
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
            <strong>Desarrolladora Frontend</strong>
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
            Siempre tuve una sed por el conocimiento, estudiar online fue mi solución, los conceptos y prácticas que manejo son:
            <div className='Education-description_mini'>
              <p>
                Para ver habilidades has
                {' '}
              </p>
              <a href='/'> Click acá </a>
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
            Me prepare como profesional en el area de ingeniería y mis logros fueron:
            <div className='Education-description_mini'>
              <p>
                Para ver logros has
                {' '}
              </p>
              <a href='/'> Click acá </a>
            </div>
          </p>
        </div>
      </article>
    </div>

  </section>

);

export default Education;