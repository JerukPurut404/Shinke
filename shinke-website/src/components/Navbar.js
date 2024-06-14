import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import lowpolylogo from '../assets/images/lowpolylogo.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-logo'>
            <img className='navbar-img' src={lowpolylogo} alt='tree'></img>
            <Link to='/' className='logo-text' onClick={closeMobileMenu}>
              SHINKE
            </Link>
          </div>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/game'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                The Game
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/lenape'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                The Exhibition
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Play!</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;