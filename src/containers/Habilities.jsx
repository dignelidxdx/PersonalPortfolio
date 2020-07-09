/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Habilities.scss';
import amigos from '../assets/static/amigos1.jpg';
import amigos2 from '../assets/static/amigos2.jpg';
import java from '../assets/static/java2.jpg';
import redux from '../assets/static/redux.jpg';
import databases from '../assets/static/basesdato.jpg';

const Habilities = () => (
    <section className="habilities">
        <div className="habilities-container">
            <h4 className='About-ability'>Soft Skills</h4>
            <hr />
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Innovación</h5>
                            <p class="card-text">La idea de hablar de la innovación es entenderla. Debe existir por nuestra visión por lo que queremos para el futuro. Es mejorar cosas ya existentes así que todos podemos innovar con muchas ganas y creatividad.</p>
                            <a href="#" class="btn btn-outline-primary">Leer Más</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Toma de Decisiones</h5>
                            <p class="card-text">Y porqué hablar de desición? Se que es algo rutinario y hay tantas buenas como malas decisiones de la cual aprendemos o le sacamos provecho, pero como sabemos cuando tomamos una y como hacerlo?</p>
                            <a href="#" class="btn btn-outline-primary">Leer Más</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Tegnologías</h5>
                            <p class="card-text">Seria muy redundante hablar de ella? La tecnología esta presente en todo, pero como la podemos entender mejor y porque existe? Claro esta para mejorar nuestra calidad de vida, pero hasta que punto?.</p>
                            <a href="#" class="btn btn-outline-primary">Leer Más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="habilities-container">
            <h4 className='About-ability'>Hard Skills</h4>
            <hr />
            <div className="row">
                <div className="col-sm-4">
                    <div class="card">
                        <img class="card-img-top" src={redux} alt="Card image cap"/>                 
                        <div class="card-body">
                            <h5 class="card-title">React Redux</h5>
                            <p class="card-text">Qué tan importante son las librerías de React, de verdad nos ayudan a mantener un mejor código y mas entendible? Qué es connect, props, reducers y actions?</p>
                            <a href="#" class="btn btn-outline-primary">Leer Más</a>
                        </div>
                    </div>
                </div>   
                <div className="col-sm-4">
                    <div class="card">
                        <img class="card-img-top" src={java} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Mi mundo y Java</h5>
                            <p class="card-text">A pesar que es un lenguaje que nacio en el 1991, tiene las bases de todo lenguaje al igual que C++, con un paradigma Orientado a objetos o funcional.</p>
                            <a href="#" class="btn btn-outline-primary">Leer Más</a>
                        </div>
                    </div>
                </div>  
                <div className="col-sm-4">
                    <div class="card">
                        <img class="card-img-top" src={databases} alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Bases de Datos</h5>
                            <p class="card-text">Que increible es el mundo de los datos y el poder que se tiene para el análisis de la información con respecto al contexto.</p>
                            <a href="#" class="btn btn-outline-primary">Leer Más</a>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </section>

);

export default Habilities;
