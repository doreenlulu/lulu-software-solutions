import React from 'react'
import { Link } from 'react-router-dom'

function Servicelist(props) {
    return (
     <>
      <li className='service__list'>
        <Link className='service__list__link' to={props.path}>
            
          <figure className='service__list__pic-wrap' data-category={props.label}>
        <img src={props.src} className='service__list__img' alt='Website ' />
          </figure>
          <div className='service__list__info'>
            <h5 className='service__list__text'>{props.text}</h5>
          </div>

        </Link>
      </li>
    </>
  );
}

export default Servicelist
