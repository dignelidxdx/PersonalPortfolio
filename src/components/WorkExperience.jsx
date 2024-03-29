/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/WorkExperience.scss';

const WorkExperience = () => (
  <section className='Workexperience'>
    <h4 className='Workexperience-title'>Experiencia Laboral</h4>
    <hr />
    <div className='Profesional-container'>
    <article className='project'>
        <img src='' alt='' />
        <p>
          <strong>Software Developer</strong>
          {' '}
          en
          {' '}
          <strong>Mercado Libre</strong>
          {' '}
        </p>
        <p className='project-date'>
          <small>
            <strong>Fecha: </strong>
            {' '}
            15/11/2021
            {' '}
            <strong> - Hasta: </strong>
            Actualidad
            {' '}
          </small>
          {' '}
        </p>
        <p>
          Desarrolladora Go de Servicios APIs REST, con distintas integraciones, microservicios, unit and functional test, colas de mensajería, no SQL, SQL, seguridad, documentación con Swagger, Postman...
        </p>
        <a href='/experience/suplemento' className='blogs-button'> Leer Más </a>
      </article>
      <article className='project'>
        <img src='' alt='' />
        <p>
          <strong>Software Engineer</strong>
          {' '}
          en
          {' '}
          <strong>GlobalLogic</strong>
          {' '}
        </p>
        <p className='project-date'>
          <small>
            <strong>Fecha: </strong>
            {' '}
            21/09/2020
            {' '}
            <strong> - Hasta: </strong>
            12/11/2021
            {' '}
          </small>
          {' '}
        </p>
        <p>
          Desarrolladora Java de Servicios APIs REST, con distintas integraciones, microservicios, unit test, colas de mensajería, seguridad con OAuth2 y JWT, SQL, documentación con Swagger, Postman...
        </p>
        <a href='/experience/suplemento' className='blogs-button'> Leer Más </a>
      </article>
      <article className='project'>
        <img src='' alt='' />
        <p>
          <strong>Analista de la calidad</strong>
          {' '}
          en
          {' '}
          <strong>Vivamos Fundae</strong>
          {' '}
        </p>
        <p className='project-date'>
          <small>
            <strong>Fecha: </strong>
            {' '}
            18/09/2018
            {' '}
            <strong> - Hasta: </strong>
            20/01/2020
            {' '}
          </small>
          {' '}
        </p>
        <p>
          Reuniones semanales para generar feedback y proponer mejoras.
          Preparación de cronómetros de insumos para anticipar stock.
          Capacidad de transmitir información y realizar training por la instalación de la Organización...
        </p>
        <a href='/experience/vivamos' className='blogs-button'> Leer Más </a>
      </article>
      <article className='project'>
        <img src='' alt='' />
        <p>
          <strong>Prácticas Profesionales</strong>
          {' '}
          en
          {' '}
          <strong>PDVSA</strong>
          {' '}
        </p>
        <p className='project-date'>
          <small>
            <strong>Fecha: </strong>
            {' '}
            15/02/2017
            {' '}
            <strong> - Hasta: </strong>
            13/09/2017
            {' '}
          </small>
          {' '}
        </p>
        <p>
          Tuve varias funciones entre ellas fue completar con data para la planificacion de proyectos
          <br />
          desarrollo de una base de datos en excel para obtener datos de...
        </p>
        <a href='/experience/pdvsa' className='blogs-button'> Leer Más </a>
      </article>
    </div>

  </section>

);

export default WorkExperience;
