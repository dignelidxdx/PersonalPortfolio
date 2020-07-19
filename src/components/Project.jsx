import React, { useEffect, useState } from 'react';
import '../assets/styles/components/Project.scss';
import video from '../assets/video/mumi-presentation.mp4';
import muestra from '../assets/static/axi.png';

const Project = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className='hero'>
      <h4 className='Project-ability'>Proyectos</h4>
      <hr />
      <section className='Project-container'>
        <article className='event'>
          <figure className='event-videoContainer'>
            <video className='html-video' src={video} controls />
          </figure>
          <div className='event-detail'>
            <h3 className='event-title'>Mumi - Nació por la GlobHack LATAM 2020</h3>
            <p className='event-description'>El evento fue organizado por Globant y Belatrix, donde mas de 80 equipos participaron en una hackaton, estuve con un equipo formada por 5 chicas en programación y la experiencia fue gratificante.</p>
            <a className='event-url' href='/project/mumi'>Ver más</a>
          </div>
        </article>
        <article className='event'>
          <figure className='event-imageContainer'>
            <a href='/project/CMDT'>
              <img className='event-image' src={muestra} />
            </a>
          </figure>
          <div className='event-detail'>
            <h3 className='event-title'>CMDT - Propuesta para registro de consultas</h3>
            <p className='event-description'>Tuve un cliente que me solicito un registro de consultas para pacientes, por ahora esta desarrollado en Google Spreadsheets y en una Demo deployada con firebase.</p>
            <a className='event-url' href='/project/CMDT'>Ver más</a>

          </div>
        </article>
      </section>

    </section>

  );

};

export default Project;
