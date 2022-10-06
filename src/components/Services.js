import React from 'react'
import Servicelist from './Servicelist';
import './Services.css'

function Services() {
  return (
    <div className='services'>
              <h1>Check out these EPIC Destinations!</h1>
      <div className='service__container'>
        <div className='service__wrapper'>
          <ul className='service__list'>
            <Servicelist
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Android App Development'
              path='/services'
            />
            <Servicelist
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Data Analysis'
              path='/services'
            />
          </ul>
          <ul className='service__list'>
            <Servicelist
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='WebApp Development'
              path='/services'
            />
            <Servicelist
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Cyber Security'
              path='/team'
            />
            <Servicelist
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
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
