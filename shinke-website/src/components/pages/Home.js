import React from 'react';
import '../../App.css';
import HeroSection from '../Herosection.js';
import Scoreboard from '../Scoreboard.js';
import { Download } from '../Download.js';

function Home() {
  return (
    <>
      <HeroSection />

      <div className='button-section'>
        <Download buttonStyle='btn--outline'>DOWNLOAD</Download>
      </div>  
      <Scoreboard />
    </>
  );
}

export default Home;