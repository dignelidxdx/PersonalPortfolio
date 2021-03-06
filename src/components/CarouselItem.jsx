/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = (props) => { 
  const { title, year, hour, png } = props;
  
  return (

  <div className='Certificate-item' display='block'>
    <img className='Certificate-item__img' src={png} alt='imagen-Certificado' />
    <div className='Certificate-item__details'>
      <div>
        <img src='/img/icons8-me-gusta-64.png' alt='' />
        <img src='/img/icons8-me-gusta-64.png' alt='' />
      </div>
      <p className='Certificate-item__details--title'>{title}</p>
      <p className='Certificate-item__details--subtitle'>{year} +{hour}</p>
    </div>
  </div>
  )
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  hour: PropTypes.number,
}

export default CarouselItem;