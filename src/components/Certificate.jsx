  
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Carousel from './Carousel';
import '../assets/styles/components/Certificate.scss';

const Certificate = (props) => (
  <section className='Certificate'>
    <h4 className='Certificate-ability'>Certificados</h4>
    <hr />
    {props.children}
  </section>

);

export default Certificate;