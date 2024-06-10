import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Herosection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className='hero-img' src='../assets/images/lenapecta2.jpg' alt=''></img>
      <h2>PLAY AND LEARN</h2>
      <p>Experience the Lenape in the 1600s</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Play the game!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;