import React from 'react'
import '../../App.css'
import Servicelist from '../Servicelist';

function Service() {
    return (
        <div className='services'>
          <h1>SERVICES OFFERED</h1>
          <div className='service__container'>
          <div className='service__wrapper'>
          <ul className='service__list'>
            <Servicelist
              src='images/android1.png'
              text='Create Mobile Applications that fit your desires.'
              label='Android App Development'
              path='/sign-up'
            />
            <Servicelist
              src='images/data.png'
              text='Travel through your data from a data analysts perspective'
              label='Data Analysis'
              path='/sign-up'
            />
          </ul>
          <ul className='service__list'>
            <Servicelist
              src='images/web.png'
              text='Set sail into the world of User-friendly websites that will leave your clients wanting more'
              label='Web-App Development'
              path='/sign-up'
            />
            <Servicelist
              src='images/cyber.png'
              text='Kickstart your security experience with the most comprehensive security platform'
              label='Cyber Security'
              path='/sign-up'
            />
          </ul>
          <ul className='service__list'>
            <Servicelist
              src='images/database.png'
              text='We implement, monitor and maintain your SQL databases to ensure optimal performance of the DB servers '
              label='Database Maintenance'
              path='/sign-up'
            />
            <Servicelist
              src='images/research.png'
              text='We are responsible for designing innovative uses for new and existing technology'
              label='Information Research Scientist'
              path='/sign-up'
            />
          </ul>
        </div>
          <h2>Cick on any Service, register and begin your journey</h2>
      </div>
    </div>
    );
}

export default Service;
