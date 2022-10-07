import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function SignIn() {
    const navigate = useNavigate();

    const navigateHome = () => {
     navigate('/services');
  };
  const navigateToSignIn = () => {
    navigate('/sign-up');
  };

    const[email, setEmail]= useState('');
    const[passwd, setPasswd]= useState('');
    const[users, setUser]= useState('');

    console.log(users)
    
    useEffect (() => {
    // fetch("http://localhost:8000/users")
    fetch("https://software-solutions-backend.herokuapp.com/users")
    .then(resp => resp.json())
    .then (result => setUser(result))

    .catch((err) => {
   console.log(err.message);
    });
}, []);
    
 function handleSubmit(users) {
    setUser(users.map(newUser =>newUser.id === users.id? {...newUser, newId:true} : newUser))
   } 
    
    return (
        <>
            <form className='home-background' onSubmit={handleSubmit}>
                <h2>Welcome to Lulu Software Solutions</h2>
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
                <button type="submit" onClick={navigateHome} >Sign Up</button>
                </Link>
                </div>

                <div className="service__wrapper">
                    <Link to ="/sign-up" >
                <button onClick={navigateToSignIn}>Already have an Account? Sign in here</button>
                </Link>
                </div>
                </div>
            </form>
            </>
    );
}

export default SignIn;
