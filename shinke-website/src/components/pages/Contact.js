import React from 'react';
import '../../App.css';
import './Infosection.css';
import './Contact.css';

export default function Contact() {
    return (
        <>
          <div className='contact-container'>
              <div className='contact-wrapper'>
                <h2 className='contact-h2'>Want to visit the exhibition?</h2>
                <h3 className='contact-h3'>Amsterdam Museum</h3>
                <p className='contact-p'>Herengracht 603</p>
                <p className='contact-p'>1017 CE Amsterdam</p>
              </div>
              <div className='contact-wrapper'>
                <h3 className='contact-h3'>Secretariaat</h3>
                <p className='contact-p'>020 5231 822</p>
                <a className='contact-a' href='mailto: info@amsterdammuseum.nl'>info@amsterdammuseum.nl</a>
                <a className='contact-a' href='https://www.amsterdammuseum.nl/'>Website Amsterdam Museum</a>
              </div>
              <div className='contact-wrapper'>
                <h3 className='contact-h3'>Opening Hours</h3>
                <p className='contact-p'>Opened daily from 10.00 till 17.00</p>
              </div>
              <div className='contact-wrapper'>
                <h2 className='contact-h2'>Want to collaberate with Mediacollege Amsterdam?</h2>
                <h3 className='contact-h3'>Mediacollege Amsterdam MBO</h3>
                <p className='contact-p'>Contactweg 36</p>
                <p className='contact-p'>1014 AN Amsterdam</p>
              </div>
              <div className='contact-wrapper'>
                <h3 className='contact-h3'>Administration</h3>
                <p className='contact-p'>020 850 95 00</p>
                <a className='contact-a' href='mailto: info@ma-web.nl'>info@ma-web.nl</a>
                <a className='contact-a' href='https://www.ma-web.nl/'>Website Mediacollege Amsterdam</a>
              </div>
          </div>
        </>
      )
}