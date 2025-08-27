/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/MiniBlog.scss';
import reloj from '../assets/static/reloj.png';
import tech from '../assets/static/tecnology.png';
import marplata from '../assets/static/marplata.jpg';
import design from '../assets/static/design.jpg';
import imagen from '../assets/static/digneli-hero.png';

const MiniBlog = () => (
    <section id="blog" className="MiniBlog blog-mf route">
        <h4 className='About-ability'>Blog</h4>
        <hr />
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="title-box text-center">
                        <p >
                            Cuento un poco de temas que podrían interesar sobre tecnología, turismo y marketing, y lo importante de sobrellevar los temas hoy en día.
                        </p>
                        <div className="line-mf"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-blog">
                        <div className="card-img">
                            <a href="blog-single.html"><img src={marplata} alt="" className="img-fluid" /></a>
                        </div>
                        <div className="card-body">
                            <div className="card-category-box">
                                <div className="card-category">
                                    <h6 className="category">Travel</h6>
                                </div>
                            </div>
                            <h3 className="card-title"><a href="blog-single.html">Ver más ideas sobre viajar</a></h3>
                            <p className="card-description">
                                A veces es tan importante salir de la rutina que es necesario hacer viajes inesperados para lugares a donde no conoces. ¿Porqué no hacer una planificación? Así sea para un fin de semana...
              </p>
                        </div>
                        <div className="card-footer">
                            <div className="post-author">
                                <a href="#">
                                    <img src={imagen} alt="" className="avatar rounded-circle" />
                                    <span className="author">Digneli Dávila</span>
                                </a>
                            </div>
                            <div className="post-date">
                                <img width="17" height="17" src={reloj} alt=""/> 10 min
              </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-blog">
                        <div className="card-img">
                            <a href="blog-single.html"><img src={design} alt="" className="img-fluid" /></a>
                        </div>
                        <div className="card-body">
                            <div className="card-category-box">
                                <div className="card-category">
                                    <h6 className="category">Maquetación</h6>
                                </div>
                            </div>
                            <h3 className="card-title"><a href="blog-single.html">Lee más sobre la maquetación</a></h3>
                            <p className="card-description">
                                Podemos determinar la maquetación como la transformación del diseño de un producto web en un conjunto de archivos (html, css, js) capaces de ser reproducidos por los navegadores web.
              </p>
                        </div>
                        <div className="card-footer">
                            <div className="post-author">
                                <a href="#">
                                    <img src={imagen} alt="" className="avatar rounded-circle" />
                                    <span className="author">Digneli Dávila</span>
                                </a>
                            </div>
                            <div className="post-date">
                            <img width="17" height="17" src={reloj} alt=""/> 10 min
              </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-blog">
                        <div className="card-img">
                            <a href="blog-single.html"><img src={tech} alt="" className="img-fluid" /></a>
                        </div>
                        <div className="card-body">
                            <div className="card-category-box">
                                <div className="card-category">
                                    <h6 className="category">Java</h6>
                                </div>
                            </div>
                            <h3 className="card-title"><a href="blog-single.html">Lee más sobre Java</a></h3>
                            <p className="card-description">
                                Uno de mis lenguajes favoritos del backend es Java, en este articulo te voy a contar todo lo que he aprendido del lenguaje desde su sintaxis hasta sus paradigmas.
              </p>
                        </div>
                        <div className="card-footer">
                            <div className="post-author">
                                <a href="#">
                                    <img src={imagen} alt="" className="avatar rounded-circle" />
                                    <span className="author">Digneli Dávila</span>
                                </a>
                            </div>
                            <div className="post-date">
                            <img width="17" height="17" src={reloj} alt=""/> 10 min
              </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-12 text-center MiniBlog-mas-title">
                    <p>Si quieres ver mas has <a className='MiniBlog-mas' href="/blog">Click Acá</a></p>
                </div>
            </div>
        </div>
    </section>

);

export default MiniBlog;