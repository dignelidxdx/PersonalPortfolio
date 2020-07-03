import React, { Component } from 'react';
import '../assets/styles/components/Contact.scss';
import email from '../assets/static/1234.png';
import cell from '../assets/static/7654.png';

export default class Contact extends Component {
    render() {
        return (
            <section className="paralax-mf footer-paralax bg-image sect-mt4 route">
                <div class="overlay-mf"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="contact-mf">
                                <div id="contact" className="box-shadow-full">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                    Contáctame :)
                                </h5>
                                            </div>
                                            <div>
                                                <form action="" method="post" role="form" className="contactForm">
                                                    {/* /*   <div id="sendmessage">Tu mensaje a sido enviado. Gracias!</div> */}
                                                    <div id="errormessage"></div>
                                                    <div className="row">
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input type="text" name="name" className="form-control" id="name" placeholder="Tu Nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input type="email" className="form-control" name="email" id="email" placeholder="Tu Email" data-rule="email" data-msg="Please enter a valid email" />
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12 mb-3">
                                                            <div className="form-group">
                                                                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Mensaje"></textarea>
                                                                <div className="validation"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <button type="submit" className="button button-a button-big button-rouded">Enviar Mensaje</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="title-box-2 pt-4 pt-md-0">
                                                <h5 className="title-left">
                                                    Mi Contacto
                                </h5>
                                            </div>
                                            <div className="more-info">
                                                <p className="lead">

                                                </p>
                                                <ul className="list-ico">
                                                    <li><span>
                                                    <svg height="20" viewBox="0 0 128 128" width="20" xmlns="http://www.w3.org/2000/svg"><g><path d="m80.229 82.863c.231-.376.462-.745.693-1.128 10.389-17.2 15.617-32.246 15.542-44.715a32.464 32.464 0 0 0 -64.927-.011c-.076 12.48 5.153 27.528 15.542 44.726.231.383.462.752.693 1.128-21.872 2.703-36.372 10.52-36.372 19.801 0 11.652 23.1 20.779 52.6 20.779s52.6-9.127 52.6-20.779c0-9.281-14.5-17.098-36.371-19.801zm-45.192-45.843a28.964 28.964 0 1 1 57.927.011c.15 24.858-23.09 55.517-28.964 62.869-5.874-7.352-29.115-38.012-28.963-62.88zm28.963 82.923c-29.371 0-49.1-8.935-49.1-17.279 0-7.4 14.629-14.285 34.934-16.518a185.3 185.3 0 0 0 12.833 17.654 1.748 1.748 0 0 0 2.666 0 185.3 185.3 0 0 0 12.834-17.654c20.3 2.233 34.934 9.114 34.934 16.518-.001 8.344-19.73 17.279-49.101 17.279z"/><path d="m49.692 109.807c-7.766-.994-14-2.744-17.548-4.925a1.75 1.75 0 1 0 -1.833 2.981c3.963 2.436 10.689 4.36 18.937 5.415a1.7 1.7 0 0 0 .224.014 1.75 1.75 0 0 0 .22-3.485z"/><path d="m66.939 110.643c-2.439.056-4.979.043-7.458-.048a1.75 1.75 0 1 0 -.129 3.5c1.538.056 3.1.085 4.648.085q1.527 0 3.021-.036a1.75 1.75 0 0 0 1.709-1.79 1.73 1.73 0 0 0 -1.791-1.711z"/><path d="m78.777 37.02a14.778 14.778 0 1 0 -14.777 14.78 14.795 14.795 0 0 0 14.777-14.78zm-26.055 0a11.278 11.278 0 1 1 11.278 11.28 11.29 11.29 0 0 1 -11.278-11.28z"/></g></svg>
                                                    </span>La Matanza, Buenos Aires Argentina.</li>
                                                    <li><span> <img width="20" height="20" src={cell} alt=""/></span> (+54) 9 11 7366-7901</li>
                                                    <li><span> <img width="20" height="20" src={email} alt=""/></span> dignei14@gmail.com</li>
                                                </ul>
                                            </div>
                                            <div className="socials">
                                                <ul>
                                                    <li><a href=""><span className="ico-circle">
                                                            <svg id="Bold" enable-background="new 0 0 24 24" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/></svg>
                                                            </span></a></li>
                                                        <li><a href=""><span className="ico-circle">
                                                            <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 512 512'><title>ionicons-v5_logos</title><path d='M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z' /><path d='M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z' /><path d='M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z' /></svg>
                                                            </span></a></li>
                                                        <li><a href=""><span className="ico-circle">
                                                            <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 512 512'><title>ionicons-v5_logos</title><path d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z'/></svg>
                                                            </span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </section>
        );
    }
}