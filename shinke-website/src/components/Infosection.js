import React from 'react';
import './Infosection.css';

function Infosection(props) {
  return (
    <div className='info-container'>
        <h2 className='info-h2'>{props.heading}</h2>
        <p className='info-p'>{props.text}</p>
    </div>
  )
}

export default Infosection
