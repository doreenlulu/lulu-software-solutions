import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function SignIn() {

    const[email, setEmail]= useState('');
    const[passwd, setPasswd]= useState('');

    const navigate = useNavigate();

    const handleSubmit= (e) => { 
        e.preventDefault(); 
    }
    

    const navigateHome = () => {
     navigate('/');
  };
  const navigateToSignIn = () => {
    navigate('/signin');
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
                    <Link to = '/' >
                <button type="submit" onClick={navigateHome} >Sign Up</button>
                </Link>
                </div>

                <div className="service__wrapper">
                    <Link to ="/signin" >
                <button onClick={navigateToSignIn}>Already have an Account? Sign in here</button>
                </Link>
                </div>
                </div>
            </form>
            </>
    );
}

export default SignIn;
