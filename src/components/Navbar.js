import { Button } from './Button';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  //Window size
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
// stops the register button from re-appearing when the page is refreshed
   useEffect(() => {
    showButton();
  }, []);

  //navbar editing
  window.addEventListener('resize', showButton);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                LSS <i className='fab fa-codepen' />
                {/* <img src={process.env.PUBLIC_URL+"images/logo.png"} /> */}
            </Link>
            <div className='menu-icon' onClick ={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to ='/services' className='nav-links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link to ='/team' className='nav-links' onClick={closeMobileMenu}>
                  Team
                </Link>
              </li>
              <li className='nav-item'>
                <Link to ='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Register
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Register</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar
