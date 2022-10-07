import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const[email, setEmail]= useState('');
    const[passwd, setPasswd]= useState('');

    const handleSubmit= (e) => { 
        e.preventDefault(); 
    }

    const navigate = useNavigate();
    const navigateHome = () => {
     navigate('/services');
  };
  return (
    <>
     <form className='home-background' onSubmit={handleSubmit}>
                <div className="service__wrapper">

                    <div className="service__wrapper">
                        <label htmlFor="email">Email</label>
                    </div>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                    <div className="service__wrapper">
                        <label htmlFor="password">password</label>
                    </div>
                        <input value={passwd} onChange={(e) => setPasswd(e.target.value)}type="password" placeholder="********" id="password" name="password" />

                    <div className="service__wrapper">
                    <Link to = '/services' >
                <button type="submit" onClick={navigateHome}>Sign Up</button>
                </Link>
                </div>
                </div>
            </form>
    </>
  )
}

export default SignUp
