import React from 'react';
import './Infosection.css';

function Infosection(props) {
  return (
    <div className='info-container'>
        <div className='info-wrapper'>
          <h2 className='info-h2'>{props.heading}</h2>
          <img className='info-img' alt='' src='{props.src}'></img>
          <p className='info-p'>{props.text1}</p>
          <p className='info-p'>{props.text2}</p>
        </div>
    </div>
  )
}

export default Infosection
