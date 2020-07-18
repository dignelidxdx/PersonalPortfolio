import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Blog.scss';
import imagen from '../assets/static/digneli-hero.png';
import reloj from '../assets/static/reloj.png';

const Blog1 = (props) => {
  const { id, title, categoria, paragraph, img, horasLectura } = props;
  return (
    <div className='col-md-4'>
      <div className='card card-blog'>
        <div className='card-img'>
          <Link to={`/blog/${id}`}><img src={img} alt='' className='img-fluid' /></Link>
        </div>
        <div className='card-body'>
          <div className='card-category-box'>
            <div className='card-category'>
              <h6 className='category'>
                {categoria}
                {' '}
              </h6>
            </div>
          </div>
          <h3 className='card-title'>
            <Link to={`/blog/${id}`}>
              {title}
              {' '}
            </Link>
          </h3>
          <p className='card-description'>
            {paragraph}
          </p>
        </div>
        <div className='card-footer'>
          <div className='post-author'>
            <a href='/'>
              <img src={imagen} alt='' className='avatar rounded-circle' />
              <span className='author'>Digneli Dávila</span>
            </a>
          </div>
          <div className='post-date'>
            <img width='17' height='17' src={reloj} alt='' />
            {' '}
            {horasLectura}
            {' '}
            min
          </div>
        </div>
      </div>
    </div>

  );

};
Blog1.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  categoria: PropTypes.string,
  horasLectura: PropTypes.number,
};

export default Blog1;
