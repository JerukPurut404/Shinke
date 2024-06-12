import React from 'react';
import '../../App.css';
import './Infosection.css';
import lenape from '../../assets/images/map.webp';

export default function Lenape() {
  return (
    <>
    <div className='info-container'>
      <div className='info-wrapper'>
        <h2 className='info-h2'>The exhibition Manahahtáanung or New Amsterdam</h2>
        <img src={lenape} alt='lenape' className='info-img'></img>
        <p className='info-p'>
          The reason for the collaboration and the exhibition is that 2024 will mark 400 years
          since the Dutch arrived in America at the mouth of the Hudson to found a colony. 
          After that colony was conquered by the English from the Dutch in 1664, 
          the settlement grew into the city of New York in the following centuries.
        </p>
        <p className='info-p'>
          The Dutch invasion and decades of colonization in this area had major consequences for 
          the Indigenous population who lived in the area and on the island they called Manahahtáanung in the 17th century. 
          They lost their land and became victims of diseases, wars and loss of means of making a living. 
          Colonists deliberately made it impossible for Indigenous people to maintain their own way of life and culture. 
          At the same time, 
          there has always been resistance from Indigenous communities, 
          even to this day.
        </p>
        <p className='info-p'> 
          The Indigenous story behind New York takes place from May 16 to November 10 2024 in the Amsterdam Museum. 
          The exhibition can be seen in New York in 2025. 
          The exhibition was made possible in part by the Mondriaan Fund, 
          DutchCultureUSA and the Dutch Consulate General New York. 
          The Amsterdam Museum is structurally supported by the Municipality of Amsterdam, 
          the Friends Lottery and the ELJA Foundation.
        </p>
        <p className='info-p'>
          For a limited period of time the Amsterdam Museum also collaborates with Mediacollege Amsterdam,
          who's students made interactive installation about the exhibition.
          These are seen from June 24 to June 30? 2024.
        </p>
        <p className='info-p'>
          For more information or tickets go to the official webpage of  <a className='info-a' href='https://www.amsterdammuseum.nl/tentoonstelling/manahahtaanung-of-nieuw-amsterdam/89642'>Museum Amsterdam</a>.
        </p>
      </div>
    </div>
    </>
  )
}