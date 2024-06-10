import React from 'react';
import '../../App.css';
import Infosection from '../Infosection.js';
import { Button } from '../Button.js';

export default function Game() {
  return(
    <>
      <div className='game-section'>
        <Infosection 
          heading='The Game'
          img=''
          text1='Shinke is an open world gathering game. 
                You play as a Lenape in the 1600’s Manhattan or Manaháhtaan. 
                Every morning you get a few tasks to do, speak to the other tribe members and 
                learn more about their culture.
                The game is played with a controller.'
          text2='The game is made for a school project. 
                The studies Game Artist, Game Developer and 
                Software Developer from Mediacollege Amsterdam collaborated with 
                the Amsterdam Museum for their Lenape exhibition. '
        />
        <div className='button-section'>
          <Button buttonStyle='btn--outline'>DOWNLOAD</Button>
        </div>
      </div>
    </>
  ) 
}