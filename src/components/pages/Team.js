import React from 'react'
import '../../App.css'
import Servicelist from '../Servicelist';


export default function Team() {
    return (
        <div className='services'>
          <h1>THE TEAM</h1>
      <div className='service__container'>
        <div className='service__wrapper'>
          <ul className='service__list'>
            <Servicelist
              src='images/review1.png'
              text='I have been a mobile app developer for 5 years'
              label='Caleb KingsBury -> Mobile App Developer'
              path='/team'
            />
            <Servicelist
              src='images/review2.png'
              text='Travel through your data from a data analysts perspective'
              label='Stephanie Shantel -> Cyber Security Analyst'
              path='/team'
            />
            <Servicelist
              src='images/review3.png'
              text='Set sail into the world of User-friendly websites that will leave your clients wanting more'
              path='/team'
              label='Dunmus Ochieng -> Web App Developer'
            />
          </ul>
          <ul className='service__list'>
            <Servicelist
              src='images/review4.png'
              text='Create Mobile Applications that fit your desires.'
              label='Annalisa Lapez'
              path='/team'
            />
            <Servicelist
              src='images/review5.png'
              text='Travel through your data from a data analysts perspective'
              label='Data Analysis'
              path='/team'
            />
            <Servicelist
              src='images/review6.png'
              text='Set sail into the world of User-friendly websites that will leave your clients wanting more'
              label='WebApp Development'
              path='/team'
            />
          </ul>
         
        </div>
      </div>
    </div>
    );
}
