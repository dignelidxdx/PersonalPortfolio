import React, { PureComponent } from 'react';
import '../assets/styles/components/GeneratePDF.scss';

class GeneratePDF extends PureComponent {

  render() {

    return (
      <div className='GeneratePDF'>
        <h6 className='GeneratePDF-text'>
          {' '}
          Para descargar mi CV has 
          <a href='https://drive.google.com/drive/folders/1bx_CiPiz4EWl1jCk5-HEusI2fop76Zbf?usp=sharing'> Click acá </a>
          {' '}
          (español e inglés).
        </h6>
      </div>

    );
  }
};

export default GeneratePDF;
