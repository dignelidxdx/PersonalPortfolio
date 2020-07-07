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
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="title-box text-center">
                        <p >
                            Cuento un poco de temas que podrían interesar sobre tecnología, turismo y marketing, y lo importante de sobrellevar los temas hoy en día.
                        </p>
                        <div class="line-mf"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card card-blog">
                        <div class="card-img">
                            <a href="blog-single.html"><img src={marplata} alt="" class="img-fluid" /></a>
                        </div>
                        <div class="card-body">
                            <div class="card-category-box">
                                <div class="card-category">
                                    <h6 class="category">Travel</h6>
                                </div>
                            </div>
                            <h3 class="card-title"><a href="blog-single.html">Ver más ideas sobre viajar</a></h3>
                            <p class="card-description">
                                A veces es tan importante salir de la rutina que es necesario hacer viajes inesperados para lugares a donde no conoces. ¿Porqué no hacer una planificación? Así sea para un fin de semana...
              </p>
                        </div>
                        <div class="card-footer">
                            <div class="post-author">
                                <a href="#">
                                    <img src={imagen} alt="" class="avatar rounded-circle" />
                                    <span class="author">Digneli Dávila</span>
                                </a>
                            </div>
                            <div class="post-date">
                                <img width="17" height="17" src={reloj} alt=""/> 10 min
              </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card-blog">
                        <div class="card-img">
                            <a href="blog-single.html"><img src={design} alt="" class="img-fluid" /></a>
                        </div>
                        <div class="card-body">
                            <div class="card-category-box">
                                <div class="card-category">
                                    <h6 class="category">Maquetación</h6>
                                </div>
                            </div>
                            <h3 class="card-title"><a href="blog-single.html">Lee más sobre la maquetación</a></h3>
                            <p class="card-description">
                                Podemos determinar la maquetación como la transformación del diseño de un producto web en un conjunto de archivos (html, css, js) capaces de ser reproducidos por los navegadores web.
              </p>
                        </div>
                        <div class="card-footer">
                            <div class="post-author">
                                <a href="#">
                                    <img src={imagen} alt="" class="avatar rounded-circle" />
                                    <span class="author">Digneli Dávila</span>
                                </a>
                            </div>
                            <div class="post-date">
                            <img width="17" height="17" src={reloj} alt=""/> 10 min
              </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card card-blog">
                        <div class="card-img">
                            <a href="blog-single.html"><img src={tech} alt="" class="img-fluid" /></a>
                        </div>
                        <div class="card-body">
                            <div class="card-category-box">
                                <div class="card-category">
                                    <h6 class="category">Java</h6>
                                </div>
                            </div>
                            <h3 class="card-title"><a href="blog-single.html">Lee más sobre Java</a></h3>
                            <p class="card-description">
                                Uno de mis lenguajes favoritos del backend es Java, en este articulo te voy a contar todo lo que he aprendido del lenguaje desde su sintaxis hasta sus paradigmas.
              </p>
                        </div>
                        <div class="card-footer">
                            <div class="post-author">
                                <a href="#">
                                    <img src={imagen} alt="" class="avatar rounded-circle" />
                                    <span class="author">Digneli Dávila</span>
                                </a>
                            </div>
                            <div class="post-date">
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