import React from 'react'
import '../../App.css'
import Teamlist from '../Teamlist';

export default function Team() {
    return (
        <div className='teamm'>
          <h1>THE TEAM</h1>
      <div className='team__container'>
        <div className='team__wrapper'>
          <ul className='team__list'>
            <Teamlist
              src='images/android1.png'
              text='Create Mobile Applications that fit your desires.'
              label='Android App Development'
              path='/team'
            />
            <Teamlist
              src='images/data.png'
              text='Travel through your data from a data analysts perspective'
              label='Data Analysis'
              path='/team'
            />
          </ul>
          <ul className='team__list'>
            <Teamlist
              src='images/web.png'
              text='Set sail into the world of User-friendly websites that will leave your clients wanting more'
              label='WebApp Development'
              path='/team'
            />
            <Teamlist
              src='images/cyber.png'
              text='Kickstart your security experience with the most comprehensive security platform'
              label='Cyber Security'
              path='/team'
            />
            <Teamlist
              src='images/database.png'
              text='We implement, monitor and maintain your SQL databases to ensure optimal performance of the DB servers '
              label='Database Maintenance'
              path='/team'
            />
          </ul>
        </div>
      </div>
    </div>
    );
}
