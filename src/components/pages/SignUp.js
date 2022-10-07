import React from 'react'
import { useState } from "react";

function SignUp() {
  const[email, setEmail]= useState('');
    const[passwd, setPasswd]= useState('');

    const handleSubmit= (e) => { 
        e.preventDefault(); 
    }

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
                <button type="submit">Sign Up</button>
                </div>
                </div>
            </form>
    </>
  )
}

export default SignUp
