/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/AboutMe.scss';
import imagen from '../assets/static/digneli-hero.png';
import amigos from '../assets/static/amigos1.jpg';
import amigos2 from '../assets/static/amigos2.jpg';
import java from '../assets/static/java2.jpg';
import redux from '../assets/static/redux.jpg';
import databases from '../assets/static/basesdato.jpg';

const AboutMe = () => (
  <section className='AboutMe'>
    <div className='About-me_container'>
      <h4 className='About-ability'>¿Quién Soy?</h4>

      <hr />
      <div className='About-me'>
        <div className='About-me-img'>
          <img src={imagen} alt='' />
        </div>
        <div className='About-data'>
          <h2>
            <strong>Título:</strong>
            {' '}
            Industrial Engineer | Software Engineer
          </h2>
          <h2>
            <strong>Mi nombre:</strong>
            {' '}
            Digneli Dávila
          </h2>
          <h2>
            <strong>Edad:</strong>
            {' '}
            25
          </h2>
        </div>
      </div>

      <div className='About-me-text'>
        <p>Hola! Gracias por visitar mi página. Te cuento de mi... Yo nací y siempre viví en venezuela hasta los 22 años cuando me vine a vivir acá a Argentina, ame mucho el pais que por eso lo escogí. Vine con la ilusión de hacer muchas cosas y poder emprender que hasta trabaje de todo un poco apenas llegue. Durante mi infancia fui algo callada y poco reservada luego en mi estapa de la universidad me abrí más y conocí grandes amigos.</p>
        <div className='About-me-text-img'>
          <img src={amigos} alt='' />
          <img src={amigos2} alt='' />
        </div>
        <p>Saben que es lindo? el trabajo en equipo y poder preocuparse por las cosas, pero hasta un limite, el saber separar lo urgente con lo importante y saber distribuir tu tiempo. Siento que son cosas que aprendí con el tiempo y son muy buenas practicas aplicarlo.</p>

      </div>

    </div>
    <br />
    <h4 className='About-ability'>Mi misión personal</h4>
    <hr />
    <div className='About-me-text-1'>
      <p>Dentro de mi misión esta enseñar mis actuales conocimientos y habilidades para que a otras personas les sea de utilidad en el día a día.</p>
    </div>
    <h4 className='About-ability'>Mi visión personal</h4>
    <hr />
    <div className='About-me-text-1'>
      <p>Dentro de mi visión esta aprender nuevas tecnologías para que a la hora de tomar decisiones sea mas llevadero y con una confianza mayor, ya sea dentro de habilidades blandas o al momento de hablar de infraestructura.</p>
    </div>
    <div className='About-themes_container'>
      <h4 className='About-ability'>Temas que me apasionan</h4>
      <hr />
      <div className='row'>
        <div className='col-sm-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Innovación</h5>
              <p className='card-text'>La idea de hablar de la innovación es entenderla. Debe existir por nuestra visión por lo que queremos para el futuro. Es mejorar cosas ya existentes así que todos podemos innovar con muchas ganas y creatividad.</p>
              <a href='#' className='btn btn-outline-primary'>Leer Más</a>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Toma de Decisiones</h5>
              <p className='card-text'>Y porqué hablar de decisión? Se que es algo rutinario y hay tantas buenas como malas decisiones de la cual aprendemos o le sacamos provecho, pero como sabemos cuando tomamos una y como hacerlo?</p>
              <a href='#' className='btn btn-outline-primary'>Leer Más</a>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Tegnologías</h5>
              <p className='card-text'>Seria muy redundante hablar de ella? La tecnología esta presente en todo, pero como la podemos entender mejor y porque existe? Claro esta para mejorar nuestra calidad de vida, pero hasta que punto?.</p>
              <a href='#' className='btn btn-outline-primary'>Leer Más</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='About-skills-container'>
      <h4 className='About-ability'>Mis habilidades</h4>
      <hr />
      <div className='row'>
        <div className='col-sm-4'>
          <div className='card'>
            <img className='card-img-top' src={redux} alt='Card image cap' />
            <div className='card-body'>
              <h5 className='card-title'>React Redux</h5>
              <p className='card-text'>Qué tan importante son las librerías de React, de verdad nos ayudan a mantener un mejor código y mas entendible? Qué es connect, props, reducers y actions?</p>
              <a href='#' className='btn btn-outline-primary'>Leer Más</a>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='card'>
            <img className='card-img-top' src={java} alt='Card image cap' />
            <div className='card-body'>
              <h5 className='card-title'>Mi mundo y Java</h5>
              <p className='card-text'>A pesar que es un lenguaje que nacio en el 1991, tiene las bases de todo lenguaje al igual que C++, con un paradigma Orientado a objetos o funcional.</p>
              <a href='#' className='btn btn-outline-primary'>Leer Más</a>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          <div className='card'>
            <img className='card-img-top' src={databases} alt='Card image cap' />
            <div className='card-body'>
              <h5 className='card-title'>Bases de Datos</h5>
              <p className='card-text'>Que increible es el mundo de los datos y el poder que se tiene para el análisis de la información con respecto al contexto.</p>
              <a href='#' className='btn btn-outline-primary'>Leer Más</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>

);

export default AboutMe;
