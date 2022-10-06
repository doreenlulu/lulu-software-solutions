import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomeBackground.css';
import video from '../videos/video.mp4';

function HomeBackground() {
  return (
    <div className='home-background'>
      <video src={video} autoPlay loop muted />
      <h1>LULU SOFTWARE SOLUTIONS</h1>
      <p>Software solutions just by one click</p>

      <div className='background-btns'>
        <Button className='btns' buttonStyle='btn--outline' 
        buttonSize='btn--large'>GET STARTED <i className='fab fa-gofore' />
        </Button>

        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large' >
          MEET THE TEAM <i className='fab fa-codepen' />
        </Button>
      </div>

    </div>
  );
}

export default HomeBackground;
