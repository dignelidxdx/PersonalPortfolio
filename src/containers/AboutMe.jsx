/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/AboutMe.scss';
import imagen from '../assets/static/digneli-hero.png';

const AboutMe = () => (
    <section className="AboutMe">
        <div className="About-me_container">
            <h4 className='About-ability'>¿Quién Soy?</h4>
            <hr />
            <div className="About-me">
                <div className="About-me-img">
                    <img src={imagen} alt=""/>
                </div>
                <div className="About-data">
                    <h2><strong>Nombre:</strong> Digneli Dávila</h2>
                    <h2><strong>Edad:</strong> 24</h2>
                    <h2><strong>Nacionalidad:</strong> Venezolana</h2>
                </div>
            </div>
            <div className="About-me-text">
                <h4>Hola! gracias por pasar por acá, estoy muy feliz por mostrarte mi trabajo. Parte de mi esta representado en esta página y fue una idea que tenia desde hace un tiempo y quise reflejar.</h4>
            </div>
        </div>
        
        <div className="About-themes_container">
            <h4 className='About-ability'>Temas que me apasionan</h4>
            <hr />
        </div>

        <div className="About-skills-container">
            <h4 className='About-ability'>Skills</h4>
            <hr />
        </div>

        

    </section>

);

export default AboutMe;