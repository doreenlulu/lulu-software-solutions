import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import Team from './components/pages/Team';
import SignUp from './components/pages/SignUp';
import Service from './components/pages/Service';
import SignIn from './components/pages/SignIn';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
  <>
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/services" element={<Service />}></Route>
    <Route path="/team" element={<Team />}></Route>
    <Route path="/sign-up" element={<SignUp />}></Route> 
    <Route path="/sign-in" element={<SignIn />}></Route>
  </Routes>
    </Router>
  </>
  )
}

export default App;
