import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Contact.scss';
import { MdEmail, MdSettingsPhone } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsEnvelopeOpen } from 'react-icons/bs';
import { contactRequest } from '../actions';

const Contact = (props) => {

  const [form, setValues] = useState({
    name: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.contactRequest(form);
    props.history.push('/');
  };

  return (
    <section className='Contact paralax-mf footer-paralax bg-image sect-mt4 route'>
      <div className='overlay-mf' />
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='contact-mf'>
              <div id='contact' className='box-shadow-full'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='title-box-2'>
                      <h5 className='title-left'>
                        Contáctame
                        {' '}
                        <BsEnvelopeOpen />
                      </h5>
                    </div>
                    <div>
                      <form action='' method='post' role='form' className='contactForm'>
                        {/* /*   <div id="sendmessage">Tu mensaje a sido enviado. Gracias!</div> */}
                        <div id='errormessage' />
                        <div className='row'>
                          <div className='col-md-12 mb-3'>
                            <div className='form-group'>
                              <input type='text' name='name' className='form-control' id='name' placeholder='Tu Nombre' data-rule='minlen:4' data-msg='Please enter at least 4 chars' />
                              <div className='validation' />
                            </div>
                          </div>
                          <div className='col-md-12 mb-3'>
                            <div className='form-group'>
                              <input type='email' className='form-control' name='email' id='email' placeholder='Tu Email' data-rule='email' data-msg='Please enter a valid email' />
                              <div className='validation' />
                            </div>
                          </div>
                          <div className='col-md-12 mb-3'>
                            <div className='form-group'>
                              <input type='text' className='form-control' name='subject' id='subject' placeholder='Asunto' data-rule='minlen:4' data-msg='Please enter at least 8 chars of subject' />
                              <div className='validation' />
                            </div>
                          </div>
                          <div className='col-md-12 mb-3'>
                            <div className='form-group'>
                              <textarea className='form-control' name='message' rows='5' data-rule='required' data-msg='Please write something for us' placeholder='Mensaje' />
                              <div className='validation' />
                            </div>
                          </div>
                          <div className='col-md-12'>
                            <button type='submit' className='button button-a button-big button-rouded'>Enviar Mensaje</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='title-box-2 pt-4 pt-md-0'>
                      <h5 className='title-left'>
                        Mi Contacto
                      </h5>
                    </div>
                    <div className='more-info'>
                      <p className='lead' />
                      <ul className='list-ico'>
                        <li>
                          <FaMapMarkerAlt />
                          {' '}
                          {' '}
                          La Matanza, Buenos Aires Argentina.
                        </li>
                        <li>
                          <MdSettingsPhone />
                          {' '}
                          {' '}
                          (+54) 9 11 7366-7901
                        </li>
                        <li>
                          <MdEmail />
                          {' '}
                          {' '}
                          dignei14@gmail.com
                        </li>
                      </ul>
                    </div>
                    <div className='socials'>
                      <ul>
                        <li>
                          <a href='https://www.facebook.com/digneli.davila/'>
                            <span className='ico-circle'>
                              <svg id='Bold' enableBackground='new 0 0 24 24' height='30' viewBox='0 0 24 24' width='30' xmlns='http://www.w3.org/2000/svg'><path d='m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z' /></svg>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href='https://www.instagram.com/dignelidxdx/'>
                            <span className='ico-circle'>
                              <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 512 512'>
                                <title>ionicons-v5_logos</title>
                                <path d='M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z' />
                                <path d='M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z' />
                                <path d='M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z' />
                              </svg>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href='https://twitter.com/Digneli_Davila'>
                            <span className='ico-circle'>
                              <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 512 512'>
                                <title>ionicons-v5_logos</title>
                                <path d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z' />
                              </svg>
                            </span>
                          </a>
                        </li>
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
};

const mapDispatchToProps = {
  contactRequest,
};

export default connect(null, mapDispatchToProps)(Contact);
