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
              text='Mobile app developer for 5 years. Currently a Senior developer at Cellulant.'
              label='Caleb KingsBury -> Mobile App Developer'
              path='/team'
            />
            <Servicelist
              src='images/review2.png'
              text='"Travel through your data from a data analysts perspective", one of her favourite quotes. CEO of She-security'
              label='Stephanie Shantel -> Cyber Security Analyst'
              path='/team'
            />
            <Servicelist
              src='images/review3.png'
              text='With over 10 years of experience in Web Development at Microsoft, meet the co-founder of Lakasa Co-operations'
              label='Alexander Mackenzie -> Web App Developer'
              path='/team'
            />
            </ul>
            
            <ul className='service__list'>
            <Servicelist
              src='images/review4.png'
              text='"Its important to be secure in this era of digitalization". Victoria has worked in the field of Cyber Security for a decade. Cuurently employed at IBM'
              path='/team'
              label='Victoria Jons -> Cyber Security Analyst'
            />
            <Servicelist
              src='images/review5.png'
              text='Fresh graduate of Moringa School with over 10 Fully functional Web Apps.'
              path='/team'
              label='Dunmus Peters -> Web App Developer'
            />
            <Servicelist
              src='images/review6.png'
              text='Abigael is a co-founder of She-hacks kenya, a company that has dedicated its resources to make sure your data is secure'
              label='Abigael Jade -> Cyber Security Analyst'
              path='/team'
            />
          </ul>
          <ul className='service__list'>
            <Servicelist
              src='images/review7.png'
              text='Create Mobile Applications that fit your wildest desires through the hands of Jackson, a well reknown Mobile App Developer in the world of Android'
              label='Jackson Tyler-> Mobile App Developer'
              path='/team'
            />
            <Servicelist
              src='images/review8.png'
              text='CEO of Lulu Software Solutions. "My main aim is to make sure you have a smooth transistion into the digital era"'
              label='Hope Kedenge ->Data Analyst'
              path='/team'
            />
            <Servicelist
              src='images/review9.png'
              text='Co-founder of Lulu Software Solutions with over 10 years worth of experience in WebApp development'
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
