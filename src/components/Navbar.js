import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                Lulu Software Solutions <i className='fab fa-typo3' />
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
                  Services Offered
                </Link>
              </li>
              <li className='nav-item'>
                <Link to ='/team' className='nav-links' onClick={closeMobileMenu}>
                  Team
                </Link>
              </li>
              <li className='nav-item'>
                <Link to ='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li>
            </ul>
            <Button></Button>
        </div>
    </nav>
    </>
  )
}

export default Navbar
