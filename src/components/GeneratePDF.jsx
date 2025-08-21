import React, { PureComponent } from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';
import '../assets/styles/components/GeneratePDF.scss';

class GeneratePDF extends PureComponent {

  render() {

    return (
      <div className='GeneratePDF'>
        <div className='GeneratePDF-text'>
          {' '}
          <p>Para descargar mi CV formato pdf</p>
          {' '}
          <a href='https://firebasestorage.googleapis.com/v0/b/my-portfolio-2a204.appspot.com/o/CV-spanish.pdf?alt=media&token=13677d00-80e9-4290-a0f6-45ddab1b69b6' download>
            {' '}
            <AiOutlineFilePdf />
            {' '}
            En español
          </a>
          {' '}
          {' '}
          <a href='https://firebasestorage.googleapis.com/v0/b/my-portfolio-2a204.appspot.com/o/CV-english.pdf?alt=media&token=826ade25-c18d-4f3c-aebf-97e720294301' download>
            <AiOutlineFilePdf />
            {' '}
            En inglés
          </a>
        </div>
      </div>

    );
  }
};

export default GeneratePDF;
