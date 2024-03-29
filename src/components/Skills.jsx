/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/Skills.scss';
import skillOne from '../assets/static/html-skill.png';
import skillTwo from '../assets/static/css-skill.png';
import skillThree from '../assets/static/javascript-skill.png';
import skillFour from '../assets/static/java.png';
import skillFive from '../assets/static/apirest.png';
import skillSix from '../assets/static/mysql.png';
import skillSeven from '../assets/static/Go_Logo_Blue.png';
import skillEight from '../assets/static/gin.png';
import skillNine from '../assets/static/Swagger-logo.png';

const Skills = () => (
  <section className='Skills'>
    <h4 className='Skills-ability'>Habilidades</h4>
    <hr />
    <section className='Skills-container'>
      <div className='Skills-icon'>
        <img className='Skills_icon-img' src={skillOne} alt='' />
        <strong>HTML 5</strong>
      </div>
      <div className='Skills-icon'>
        <img className='Skills_icon-img' src={skillTwo} alt='' />
        <strong>CSS 3</strong>
      </div>
      <div className='Skills-icon'>
        <img className='Skills_icon-img' src={skillThree} alt='' />
        <strong>JavaScript</strong>
      </div>
      <div className='Skills-icon'>
        <img className='Skills_icon-img' src={skillFour} alt='' />
        <strong>Java-SpringBoot</strong>
      </div>
      <div className='Skills-icon'>
        <img className='Skills_icon-img' src={skillFive} alt='' />
        <strong>API REST</strong>
      </div>
      <div className='Skills-icon'>
        <img className='Skills_icon-img' src={skillSix} alt='' />
        <strong>MYSQL</strong>
      </div>
      <div className='Skills-icon'>
        <img className='Skills_icon-img' src={skillSeven} alt='' />        
      </div>
      <div className='Skills-icon'>
        <img className='Skills_icon-img' src={skillEight} alt='' />
        <strong>Gin</strong>
      </div>
      <div className='Skills-icon'>
        <img className='Skills_icon-img' src={skillNine} alt='' />
        <strong>Swagger</strong>
      </div>
    </section>
  </section>

);

export default Skills;
