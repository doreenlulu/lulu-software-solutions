import React from 'react'
import { Link } from 'react-router-dom'

function Teamlist(props) {
    return (
     <>
      <li className='team__list'>
        <Link className='team__list__link' to={props.path}>
            
          <figure className='team__list__pic-wrap' data-category={props.label}>
        <img src={props.src} className='team__list__img' alt='Team ' />
          </figure>
          <div className='team__list__info'>
            <h5 className='team__list__text'>{props.text}</h5>
          </div>

        </Link>
      </li>
    </>
  );
}

export default Teamlist
