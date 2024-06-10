import React from 'react';
import '../../App.css';
import Infosection from '../Infosection.js';
import { Button } from '../Button.js';

export default function Game() {
  return(
    <>
    <div className='button-section'>
        <Button buttonStyle='btn--outline'>DOWNLOAD</Button>
      </div>
      <Infosection 
        heading='The Game'
        text='Here comes a text about how the game is made and how it works '
      />
    </>
  ) 
}