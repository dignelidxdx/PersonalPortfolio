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
          <a href='https://firebasestorage.googleapis.com/v0/b/my-portfolio-2a204.appspot.com/o/CV-Digneli-Davila-Spanish.pdf?alt=media&token=bf16bd47-1450-48b9-81f6-98673066a2aa' download>
            {' '}
            <AiOutlineFilePdf />
            {' '}
            En español
          </a>
          {' '}
          {' '}
          <a href='https://firebasestorage.googleapis.com/v0/b/my-portfolio-2a204.appspot.com/o/CV-Digneli-Davila-English.pdf?alt=media&token=6a8ef4f6-a683-4169-9404-29ca9a1f35d7' download>
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
