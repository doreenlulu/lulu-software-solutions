import React from 'react'
import Servicelist from './Servicelist';
import './Services.css'

function Services() {
  return (
    <div className='services'>
      <h1>About Us <i className='fab fa-codepen'></i></h1>
      <div className='service__container'>
        <div className='service__wrapper'>
          <ul className='service__list'>
            <Servicelist
              src='images/background.png'
              text='With the new fast arising era of digitilization, more and more companies are embracing the move.
              Not all companies have portfolios or good user friendly websites that can enable the user have an easier access to the information about the website. 
              Luckily, we are here to check that off your list.
              Lulu Software solutions deals with the creation of Web and Mobile applications.
              We also deal with Data Analysis, Cyber Security, Database Maintenance and Research on IT. Click to meet the Team or proceed below to Services'
              label='Lulu Software Solutions'
              path='/team'
            />
          </ul>
          
            <h1>Services Offered <i className='fab fa-codepen'></i></h1>

            <ul className='service__list'>
            <Servicelist
              src='images/android1.png'
              text='Android software development is the process by which applications are created for devices running the Android operating system. Click to view this Service'
              label='Android App Development'
              path='/services'
            />
            <Servicelist
              src='images/data.png'
              text='Data analysis is the practice of working with data to glean useful information, which can then be used to make informed decisions. To book this service, click on it'
              label='Data Analysis'
              path='/services'
            />
            <Servicelist
              src='images/web.png'
              text='Web application development is the creation of application programs that reside on remote servers and are delivered to the users device over the Internet. Click to view this Service'
              label='Web-App Development'
              path='/services'
            />
          </ul>
          <ul className='service__list'>
            <Servicelist
              src='images/cyber.png'
              text='Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. Click to view this Service'
              label='Cyber Security'
              path='/services'
            />
            <Servicelist
              src='images/database.png'
              text='Database maintenance is a set of tasks that are all run with the intention to improve your database. Click to view this Service'
              label='Database Maintenance'
              path='/services'
            />
            <Servicelist
              src='images/research.png'
              text='Computer and information research scientists invent new approaches to computing technology and improve the use of existing technology. Click to view this Service'
              label='Information Research Scientist'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services
