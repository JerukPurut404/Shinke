import React from 'react';
import '../../App.css';
import { Download } from '../Download.js';
import './Infosection.css';
import trees from '../../assets/images/lowpolytree.jpg';
import vidplaceholder from '../../assets/images/placeholder.mp4';
import picplaceholder1 from '../../assets/images/placeholder1.png';

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
                  learn more about their culture.
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
          <ul className='photos-wrapper'>
            <li className='photos-item'>
              <img className='item-img' src={picplaceholder1} alt='meeps'></img>
              <p className='item-text'>Text about this item</p>
            </li>
            <li className='photos-item'>
            <p className='item-text'>Text about this item</p>
              <img className='item-img' src={picplaceholder1} alt='meeps'></img>
            </li>
            <li className='photos-item'>
              <img className='item-img' src={picplaceholder1} alt='meeps'></img>
              <p className='item-text'>Text about this item</p>
            </li>
            <li className='photos-item'>
            <p className='item-text'>Text about this item</p>
              <img className='item-img' src={picplaceholder1} alt='meeps'></img>
            </li>
          </ul>
        </div>
    </>
  ) 
}