import React from 'react';
import '../assets/styles/components/PageError.scss';


function PageError(props) {
  return <div className="PageError">{props.error.message}</div>;
}

export default PageError;