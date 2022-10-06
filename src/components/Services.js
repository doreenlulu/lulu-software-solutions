import React from 'react'
import Servicelist from './Servicelist';
import './Services.css'

function Services() {
  return (
    <div className='services'>
    
      <div className='service__container'>
        <div className='service__wrapper'>
          <ul className='service__list'>
            <Servicelist
              src='images/android1.png'
              text='Create Mobile Applications that fit your desires.'
              label='Android App Development'
              path='/services'
            />
            <Servicelist
              src='images/data.png'
              text='Travel through your data from a data analysts perspective'
              label='Data Analysis'
              path='/services'
            />
          </ul>
          <ul className='service__list'>
            <Servicelist
              src='images/web.png'
              text='Set Sail into the world of User-friendly websites that will leave your clients wanting more'
              label='WebApp Development'
              path='/services'
            />
            <Servicelist
              src='images/cyber.png'
              text='Kickstart your security experience with the most comprehensive security platform'
              label='Cyber Security'
              path='/team'
            />
            <Servicelist
              src='images/database.png'
              text='We implement, monitor and maintain your SQL databases to ensure optimal performance of the DB servers '
              label='Database Maintenance'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services
