/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import mysql from '../assets/static/diploma-sql-mysql-1.png';
import ingenieria from '../assets/static/diploma-ingenieria-1.png';
import react from '../assets/static/diploma-react-ejs-1.png';
import frontend from '../assets/static/diploma-frontend-developer-1.png';
import scrum from '../assets/static/diploma-scrum-1.png';
import postman from '../assets/static/diploma-postman-1.png';

const CarouselItem = (props) => (

  <div className='Certificate-item' display='block'>
    <img className='Certificate-item__img' src={props.imagen} alt='imagen-Certificado' />
    <div className='Certificate-item__details'>
      <div>
        <img src='/img/icons8-me-gusta-64.png' alt='' />
        <img src='/img/icons8-me-gusta-64.png' alt='' />
      </div>
      <p className='Certificate-item__details--title'>{props.titulo}</p>
      <p className='Certificate-item__details--subtitle'>{props.anio} +{props.horas}</p>
    </div>
  </div>

);

export default CarouselItem;