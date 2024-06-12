import React from 'react';
import '../../App.css';
import './Infosection.css';
import lenape from '../../assets/images/map.webp';

export default function Lenape() {
  return (
    <>
    <div className='info-container'>
      <div className='info-wrapper'>
        <h2 className='info-h2'>Manahahtáanung or New Amsterdam</h2>
        <img src={lenape} alt='lenape' className='info-img'></img>
        <p className='info-p'>
        400 years ago, the first Dutch settlers arrived in the area that is now New York. 
        Their assignment from the Dutch West India Company (WIC) was to found the colony of New Netherland, 
        with the capital New Amsterdam, on the southern tip of present-day Manhattan. 
        The Amsterdam Museum, 
        together with Museum of the City of New York and representatives of Lenape – 
        original inhabitants of this area in the United States – 
        created this exhibition about shared history.
        </p>
        <p className='info-p'>
        The Dutch invasion and decades of colonization in this area had major consequences for the Indigenous population 
        who lived in the area and on the island they called Manahahtáanung in the 17th century. 
        They lost their land and became victims of diseases, 
        wars and loss of means of making a living.
        Colonists deliberately made it impossible for Indigenous people to maintain their own way of life and culture. 
        At the same time, there has always been resistance from Indigenous communities, even to this day.
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
          who's students provide 10 interactive installations about the exhibition.
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