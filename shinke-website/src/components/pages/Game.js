import React from 'react';
import '../../App.css';
import { Download } from '../Download.js';
import './Infosection.css';
import trees from '../../assets/images/gamescreenshot.png';
import vidplaceholder from '../../assets/images/placeholder.mp4';
import picplaceholder1 from '../../assets/images/placeholder1.png';
import vidlenape from '../../assets/images/lenape.mp4';
import blueberry from '../../assets/images/blueberry.png';
import toadstool from '../../assets/images/toadstool.png';
import pike from '../../assets/images/pike.png';
import blockout from '../../assets/images/blockout.png';

export default function Game() {
  return(
    <>
        <div className='info-container'>
          <div className='info-wrapper'>
            <h2 className='info-h2'>The Game</h2>
            <img src={trees} className='info-img' alt='low poly tree forest' ></img>
            <p className='info-p'>Shinke is an open world gathering game. 
                  You play as a Lenape in the 1600’s Manhattan or Manaháhtaan. 
                  Every morning you get a few tasks to do, speak to the other tribe members and 
                  explore their living enviroment.
            </p>
            <p className='info-p'>The game is made for a school project. 
                  The studies Game Artist, Game Developer and 
                  Software Developer from Mediacollege Amsterdam collaborated with 
                  the Amsterdam Museum for their The Lenape exhibition.</p>
          </div>
          <div className='button-section'>
            <Download buttonStyle='btn--outline'>DOWNLOAD</Download>
          </div>
          <figure className='info-wrapper'>
            <video className='video-video' src={vidplaceholder} autoPlay loop muted></video>
          </figure>
          <div className='button-section'>
            <Download buttonStyle='btn--outline'>DOWNLOAD</Download>
          </div>
          <h3 className='info-h3'>Game development and art</h3>
          <ul className='photos-wrapper'>
            <li className='photos-item'>
              <video className='video-video' src={vidlenape} autoPlay loop muted></video>
              <p className='item-text'>Lenape villager models with animation.</p>
            </li>
            <li className='photos-item'>
            <p className='item-text'>Collection item: Blueberry enviroment model</p>
              <img className='item-img' src={blueberry} alt='meeps'></img>
            </li>
            <li className='photos-item'>
              <img className='item-img' src={toadstool} alt='toadstool'></img>
              <p className='item-text'>Enviroment item: Mushroom</p>
            </li>
            <li className='photos-item'>
              <p className='item-text'>Collection item: Pike inventory model</p>
              <img className='item-img' src={pike} alt='pike'></img>
            </li>
            <li className='photos-item'>
              <img className='item-img' src={picplaceholder1} alt='wigwam'></img>
              <p className='item-text'>Enviroment building: Wigwam</p>
            </li>
            <li className='photos-item'>
              <p className='item-text'>Block out enviroment</p>
              <img className='item-img' src={blockout} alt='block out'></img>
            </li>
          </ul>
          <div className='button-section'>
            <Download buttonStyle='btn--outline'>DOWNLOAD</Download>
          </div>
          <div className='info-wrapper'>
            <h3 className='info-h3'>Artist and developers</h3>
            <img className='info-img' src={picplaceholder1} alt='groupphoto dev and art team'></img>
            <p className='info-p'>Artists: Jilenko van Scheppingen (art lead), Wies Peschke, Raphaël Westerhof, Noa Colijn.</p>
            <p className='info-p'>Game developers: Marinus van Duivenbode (lead developer), Christiaan Oostwouder.</p>
            <p className='info-p'>Web developers: Astrid Prins (frontend), Eugene van Aubel (backend).</p>
          </div>
        </div>
    </>
  ) 
}