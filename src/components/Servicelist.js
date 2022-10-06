import React from 'react'
import { Link } from 'react-router-dom'

function Servicelist() {
    return (
     <>
      <li className='service__list'>
        <Link className='service__list__link'>

          <figure className='service__list__pic-wrap' >
            <img src='/' className='service__list__img' alt='Website ' />
          </figure>
          <div className='service__list__info'>
            <h5 className='service__list__text'></h5>
          </div>

        </Link>
      </li>
    </>
  );
}

export default Servicelist
