import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Project from '../components/Project';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import GeneratePDF from '../components/GeneratePDF';
import Workshop from '../components/Workshop';
import Certificate from '../components/Certificate';
import Footer from '../components/Footer';
import SideDrawer from '../components/SideDrawer';
import Backdrop from '../components/Backdrop';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import ingenieria from '../assets/static/diploma-ingenieria-1.png';
import react from '../assets/static/diploma-react-ejs-1.png';
import frontend from '../assets/static/diploma-frontend-developer-1.png';
import scrum from '../assets/static/diploma-scrum-1.png';
import postman from '../assets/static/diploma-postman-1.png';
import java from '../assets/static/diploma-java-avanzado-1.png';
import comunicacion from '../assets/static/diploma-comunicacion-equipos-1.png';
import mysql from '../assets/static/diploma-sql-mysql-1.png';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'urlAPI'

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = (e) => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className='App'>
        <Header drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Presentation />
        <GeneratePDF />
        <Skills />
        <Project />
        <WorkExperience />
        <Education />
        <Workshop />
        <Certificate>
          <Carousel>
            <CarouselItem imagen={react} titulo='React JS' horas='20' anio='2020' />
            <CarouselItem imagen={frontend} titulo='Frontend Developer' horas='60' anio='2020' />
            <CarouselItem imagen={java} titulo='Java SE Avanzado' horas='120' anio='2020' />
            <CarouselItem imagen={mysql} titulo='Bases de Datos con MySQL y SQL' horas='30' anio='2019' />
            <CarouselItem imagen={postman} titulo='Postman' horas='6' anio='2020' />
            <CarouselItem imagen={ingenieria} titulo='Fundamentos de Ing. de Software' horas='10' anio='2019' />
            <CarouselItem imagen={scrum} titulo='SCRUM' horas='16' anio='2020' />
            <CarouselItem imagen={comunicacion} titulo='Comunicación efectiva para equipos' horas='8' anio='2019' />
          </Carousel>
        </Certificate>

        <Footer />
      </div>
    );
  }

}

export default App;