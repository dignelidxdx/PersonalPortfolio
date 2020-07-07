import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';
import Project from '../components/Project';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import GeneratePDF from '../components/GeneratePDF';
import Certificate from '../components/Certificate';
import Carousel from '../components/Carousel';
import BackToTop from '../components/BackToTop';
import CarouselItem from '../components/CarouselItem';
import MiniBlog from '../components/MiniBlog';
import '../assets/styles/App.scss';

const Home = ({ certificados }) => {

   /*
   Use of React Hooks with useEffect and useState to call a API
   const initialState = useInitialState(API); 
   
   const [ videos, setVideos ] = useState([]);
   useEffect(() = {
     fetch(API)
     .then(response = response.json())
     .then(data = setVideos(data));
   }, []); */

  return /* initialState.length === 0 ? <h1>Loading...</h1> : */ (
    <div className='App'>
      <Presentation />
      <GeneratePDF />
      <Skills />
      <Project />
      <WorkExperience />
      <Education />
      <Certificate>
        <Carousel>
          {certificados.map(item =>
            <CarouselItem key={item.id} {...item} />          
            )}
        </Carousel>
      </Certificate>
      <MiniBlog />    
      <BackToTop/>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    certificados: state.certificados,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);