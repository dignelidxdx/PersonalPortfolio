/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CarouselItem from './CarouselItem';
import '../assets/styles/components/Carousel.scss';

const Carousel = (props) => (
  <div className='carousel'>
    <div className='carousel__container'>
      {props.children}
    </div>
  </div>
);

export default Carousel;