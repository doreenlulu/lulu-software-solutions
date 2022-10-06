import React from 'react'
import Servicelist from './Servicelist';
import './Services.css'

function Services() {
  return (
    <div className='services'>
      <h1>About Us</h1>
      <div className='service__container'>
        <div className='service__wrapper'>
          <ul className='service__list'>
            <Servicelist
              src='images/background.png'
              text='With the new fast arising era of digitilization, more and more companies are embracing the move.
              Not all companies have portfolios or good user friendly websites that can enable the user have an easier access to the information about the website. 
              Luckily, we are here to check that off your list.
              Lulu Software solutions deals with the creation of Web and Mobile applications.
              We also deal with Data Analysis, Cyber Security and Database Maintenance. View our services to find the one that suits you.'
              label='Lulu Software Solutions'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services
