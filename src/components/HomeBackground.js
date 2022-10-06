import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomeBackground.css';

function HomeBackground() {
  return (
    <div className='home-background'>
      <h1>ALL YOUR SOFTWARE SOLUTIONS</h1>
      <p>Just by One click</p>

      <div className='background-btns'>
        <Button className='btns' buttonStyle='btn--outline' 
        buttonSize='btn--large'>GET STARTED <i className='fab fa-gofore' />
        </Button>

        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large' >
          MEET THE TEAM <i className='fab fa-speakap' />
        </Button>
      </div>

    </div>
  );
}

export default HomeBackground;
