import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegSadCry } from 'react-icons/fa';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <section className='NotFound'>
    <h1>
      Página no encontrada
      {' '}
      <FaRegSadCry />
    </h1>
    <p>Disculpa, está en desarrollo</p>
    <h2>
      Regresa al
      {' '}
      <Link className='a' to='/'>Home</Link>
    </h2>
  </section>

);

export default NotFound;

