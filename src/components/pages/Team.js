import React from 'react'
import '../../App.css'
import Servicelist from '../Servicelist';

function Team() {
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
              text='Travel through your data from a data analysts perspective'
              label='Alexander Mackenzie -> Web App Developer'
              path='/team'
            />
            </ul>
            
            <ul className='service__list'>
            <Servicelist
              src='images/review4.png'
              text='Set sail into the world of User-friendly websites that will leave your clients wanting more'
              path='/team'
              label='Victoria Jons -> Cyber Security Analyst'
            />
            <Servicelist
              src='images/review5.png'
              text='Set sail into the world of User-friendly websites that will leave your clients wanting more'
              path='/team'
              label='Dunmus Peters -> Web App Developer'
            />
            <Servicelist
              src='images/review6.png'
              text='Travel through your data from a data analysts perspective'
              label='Abigael Jade -> Cyber Security Analyst'
              path='/team'
            />
          </ul>
          <ul className='service__list'>
            <Servicelist
              src='images/review7.png'
              text='Create Mobile Applications that fit your desires.'
              label='Jackson Tyler-> Mobile App Developer'
              path='/team'
            />
            <Servicelist
              src='images/review8.png'
              text='Travel through your data from a data analysts perspective'
              label='Hope Kedenge ->Data Analyst'
              path='/team'
            />
            <Servicelist
              src='images/review9.png'
              text='Set sail into the world of User-friendly websites that will leave your clients wanting more'
              label='Sali Michaelson-> WebApp Development'
              path='/team'
            />
          </ul>
         
        </div>
      </div>
    </div>
    );
}
 export default Team;