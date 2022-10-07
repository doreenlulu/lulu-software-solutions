import React from "react";
import { useState } from "react";


export function SignIn(props) {

    const[email, setEmail]= useState('');
    const[passwd, setPasswd]= useState('');

    // const handleSubmit

    return (
            <form>
                <label for="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label for="password">password</label>
                <input value={passwd} onChange={(e) => setPasswd(e.target.value)}type="password" placeholder="********" id="password" name="password" />
                <button>Sign In</button>
            </form>
    );
}

export default SignIn